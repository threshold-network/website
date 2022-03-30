import { FC } from "react"
import { Alert, AlertDescription, CloseButton } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"

export type WhatsNextBannerProps = {
  onClose: () => void
  body: string
}

export const WhatsNextBannerTemplate: FC<WhatsNextBannerProps> = ({
  onClose,
  body,
}) => {
  return (
    <Alert
      bg="brand.500"
      color="white"
      justifyContent="center"
      position="relative"
    >
      <AlertDescription dangerouslySetInnerHTML={{ __html: body }} />
      <CloseButton position="absolute" right="10px" onClick={onClose} />
    </Alert>
  )
}

const query = graphql`
  query Announcement {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "announcement" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`

const WhatsNextBanner: FC<Omit<WhatsNextBannerProps, "body">> = ({
  onClose,
}) => {
  const data = useStaticQuery(query)
  const body = data.allMarkdownRemark.edges[0].node.html

  return body ? <WhatsNextBannerTemplate body={body} onClose={onClose} /> : null
}

export default WhatsNextBanner
