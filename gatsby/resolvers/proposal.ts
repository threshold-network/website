import axios from "axios"

const BASE_API_URL = "https://forum.threshold.network"
const PROPOSAL_CATEGORY_URL = `${BASE_API_URL}/c/governance-proposals/7.json`

const getTopicUrl = (slug: string, id: string) =>
  `${BASE_API_URL}/t/${slug}/${id}.json`

const getPostUrl = (id: string) => `${BASE_API_URL}/posts/${id}.json`

interface TopicResponseData {
  title: string
  slug: string
  id: string
  // eslint-disable-next-line camelcase
  post_stream: {
    posts: { id: string }
  }
}

interface PostResponseData {
  id: string
  raw: string
  cooked: string
  // eslint-disable-next-line camelcase
  created_at: string
  username: string
}

export const proposalResolver =
  (reporter) => async (source, args: { limit?: number }) => {
    try {
      const { data } = await axios.get(PROPOSAL_CATEGORY_URL)
      // Get only latest 3 proposals. The first topic in this category is a
      // pinned message about the Proposal category so we want to skip this
      // topic.
      const latestTopics = data.topic_list.topics.slice(1, args?.limit + 1 || 4)
      const topics: { data: TopicResponseData }[] = await Promise.all(
        latestTopics.map((topic: { slug: string; id: string }) =>
          axios.get(getTopicUrl(topic.slug, topic.id))
        )
      )
      const posts: { data: PostResponseData }[] = await Promise.all(
        topics
          .map((topicsResponse) => topicsResponse.data)
          .map((topic) => topic.post_stream.posts[0].id)
          .map((postId) => axios.get(getPostUrl(postId)))
      )

      return posts
        .map((postResponse) => postResponse.data)
        .map((post, index: number) => {
          const topic = topics[index].data
          return {
            id: post.id,
            title: topic.title,
            createdAt: post.created_at,
            createdBy: post.username,
            content: {
              raw: post.raw,
              html: post.cooked,
            },
            url: getTopicUrl(topic.slug, topic.id),
          }
        })
    } catch (error) {
      reporter.error("Could not fetch proposals: ", error)
    }
  }
