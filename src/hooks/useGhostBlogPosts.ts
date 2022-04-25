import { useEffect, useState } from "react"
// @ts-ignore
import GhostContentAPI from "@tryghost/content-api"

const useGhostBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([])

  const api = new GhostContentAPI({
    url: "https://threshold-network.ghost.io",
    // API key is not private and is safe to use on frontend:
    // https://ghost.org/docs/content-api
    key: "ca1ac53ba62d6f30b55b81890e",
    version: "v3",
  })

  useEffect(() => {
    api.posts
      .browse({ limit: 5, include: "tags,authors" })
      .then((posts: any) => {
        setBlogPosts(
          posts.map((post: any) => {
            const date = new Date(post.published_at).toLocaleDateString(
              "en-gb",
              {
                year: "numeric",
                month: "short",
              }
            )
            return {
              title: post.title,
              subTitle: `${date} - ${post.authors[0].slug}`,
              description: post.excerpt,
            }
          })
        )
      })
  }, [])

  return blogPosts
}

export default useGhostBlogPosts
