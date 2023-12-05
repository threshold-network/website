import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../../home-page/SectionTemplate"
import RolePageTemplate from "../RolePageTemplate"
import NetworkDistribution from "./NetworkDistribution"
import GettingStarted from "./GettingStarted"
import TechnicalRequirements from "./TechnicalRequirements"
import MigrationInfoSection from "../../home-page/MigrationInfoSection"

const StakerPageTemplate: FC<any> = ({ data }) => {
  const { stakerInfo, gettingStarted, techRequirements } =
    data.markdownRemark.frontmatter

  return (
    <RolePageTemplate>
      <SectionTemplate
        {...stakerInfo}
        preTitle={null}
        columnReverse
        size="sm"
      />
      <NetworkDistribution />
      <GettingStarted {...gettingStarted} />
      <TechnicalRequirements {...techRequirements} />
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
        techRequirements {
          title
          requirements {
            label
            image {
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
              alt
            }
          }
          cta {
            ctaTitle
            label
            url
            variant
          }
        }
      }
    }
  }
`
