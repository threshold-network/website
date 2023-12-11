import { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../../home-page/SectionTemplate"
import { Box, Divider } from "@chakra-ui/react"
import UseCases from "./UseCases"
import FeaturesSection from "./FeaturesSection"
import { HighlightWord } from "../../../components/HighlightWord"

const SDKTitle: FC = ({ sdkInfo }: any) => (
  <Box mr="-4rem">
    <HighlightWord
      title={sdkInfo.title}
      highlightedWord={sdkInfo.highlightedWord}
      bgGradient="linear-gradient(120.19deg, #BD30FF 3.32%, #7D00FF 95.02%)"
      fontWeight="bold"
    />
  </Box>
)

const SDKPageTemplate: FC = ({ data }: any) => {
  const {
    sdkInfo,
    useCasesInfo,
    useCases,
    featuresInfo,
    features,
    callToActionInfo,
  } = data.markdownRemark.frontmatter

  return (
    <Box bgColor="gray.900">
      <SectionTemplate
        {...sdkInfo}
        title={<SDKTitle sdkInfo={sdkInfo} />}
        preTitle={null}
        columnReverse
        size="sm"
      >
        <Divider mt="9rem" />
      </SectionTemplate>
      <SectionTemplate
        {...featuresInfo}
        image={{
          ...featuresInfo.image,
          left: 0,
          ml: "4rem",
          mt: "-5rem",
          w: "52rem",
        }}
        mt="-5rem"
        size="md"
        isImageBackground
      >
        <FeaturesSection cards={features} icon={featuresInfo.icon} />
      </SectionTemplate>
      <SectionTemplate {...useCasesInfo} size="md" bgColor="#161A1F">
        <UseCases cards={useCases} />
      </SectionTemplate>
      <SectionTemplate
        {...callToActionInfo}
        preTitle={null}
        size="md"
        isCentered
        bgColor="#161A1F"
      />
    </Box>
  )
}

export default SDKPageTemplate

export const query = graphql`
  query SDKPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        sdkInfo {
          rowReverse
          title
          highlightedWord
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
        useCasesInfo {
          rowReverse
          preTitle
          title
          description
        }
        useCases {
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
          preTitle
          title
          description
          buttons {
            label
            url
            variant
          }
        }
        featuresInfo {
          rowReverse
          preTitle
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
          icon {
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
        features {
          title
          description
        }
        callToActionInfo {
          rowReverse
          title
          description
          buttons {
            label
            url
            variant
          }
        }
      }
    }
  }
`
