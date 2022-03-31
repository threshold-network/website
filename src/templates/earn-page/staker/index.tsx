import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../../home-page/SectionTemplate"
import RolePageTemplate from "../RolePageTemplate"
import NetworkDistribution from "./NetworkDistribution"
import GettingStarted from "./GettingStarted"

const StakerPageTemplate: FC<any> = ({ data }) => {
  const { stakerInfo, gettingStarted } = data.markdownRemark.frontmatter

  console.log(gettingStarted)

  return (
    <RolePageTemplate>
      <SectionTemplate {...stakerInfo} />
      <NetworkDistribution />
      <GettingStarted {...gettingStarted} />
    </RolePageTemplate>
  )
}

export default StakerPageTemplate

export const query = graphql`
  query StakerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        stakerInfo {
          rowReverse
          title
          description
          image {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          buttons {
            label
            url
            variant
          }
        }
        gettingStarted {
          title
          left {
            title
            description
            links {
              leftIcon {
                id
                relativePath
                internal {
                  mediaType
                }
                svg {
                  name
                  attributes {
                    key
                    value
                  }
                  children {
                    name
                    type
                    value
                    attributes {
                      key
                      value
                    }
                  }
                }
              }
              label
              url
              rightIcon {
                id
                relativePath
                internal {
                  mediaType
                }
                svg {
                  name
                  attributes {
                    key
                    value
                  }
                  children {
                    name
                    type
                    value
                    attributes {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
          right {
            title
            description
            links {
              leftIcon {
                id
                relativePath
                internal {
                  mediaType
                }
                svg {
                  name
                  attributes {
                    key
                    value
                  }
                  children {
                    name
                    type
                    value
                    attributes {
                      key
                      value
                    }
                  }
                }
              }
              label
              url
              rightIcon {
                id
                relativePath
                internal {
                  mediaType
                }
                svg {
                  name
                  attributes {
                    key
                    value
                  }
                  children {
                    name
                    type
                    value
                    attributes {
                      key
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
