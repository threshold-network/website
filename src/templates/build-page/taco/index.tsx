import React, { FC } from "react"
import { graphql } from "gatsby"
import SectionTemplate from "../../home-page/SectionTemplate"
import { Box, Divider, Text } from "@chakra-ui/react"
import { SectionInfo } from "../../../types"
import { HighlightWords } from "../../../components/HighlightWords"
import TacoFeatures, { FeatureSection } from "./TacoFeatures"
import TacoDiagrams from "./TacoDiagrams"
import { ImageProps } from "../../../components"
import TacoExamples from "./TacoExamples"
import TacoTable, { SectionTable } from "./TacoTable"

export interface TacoPageContent {
  tacoInfo: SectionInfo
  tacoFeaturesInfo: SectionInfo
  tacoFeatures: FeatureSection[]
  tacoDiagramsInfo: ExtendedSectionInfo
  tacoDiagrams: SectionInfo[]
  tacoExamplesInfo: SectionInfo
  tacoExamples: SectionInfo[]
  tacoTableInfo: SectionInfo
  tacoTable: SectionTable
}

export interface ExtendedSectionInfo extends SectionInfo {
  background?: ImageProps
}

export interface TacoTitleProps {
  title: string
}

const TacoTitle: FC<TacoTitleProps> = ({ title }) => {
  const words = title.trim().split(/\s+/)

  return (
    <>
      {words.map((word, index) => (
        <React.Fragment key={`text-${index}`}>
          {word === "TACo:" ? (
            <Text as="span">
              {word}
              <br />
            </Text>
          ) : (
            word
          )}
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </>
  )
}

const TacoPageTemplate: FC = ({ data }: any) => {
  const {
    tacoInfo,
    tacoFeaturesInfo,
    tacoFeatures,
    tacoDiagramsInfo,
    tacoDiagrams,
    tacoExamplesInfo,
    tacoExamples,
    tacoTableInfo,
    tacoTable,
  } = data.markdownRemark.frontmatter as TacoPageContent

  console.log("tacoTable: ", tacoTable)
  return (
    <Box bgColor="gray.900">
      <SectionTemplate
        {...tacoInfo}
        title={<TacoTitle title={tacoInfo.title} />}
        columnReverse
        size="md"
      >
        <Divider mt="6rem" />
      </SectionTemplate>
      <SectionTemplate
        {...tacoFeaturesInfo}
        title={
          <Box mx={{ md: "-4rem" }}>
            <HighlightWords
              title={tacoFeaturesInfo.title}
              highlighted={tacoFeaturesInfo.highlighted}
              bgGradient="linear-gradient(120.19deg, #BD30FF 3.32%, #7D00FF 95.02%)"
              fontWeight="bold"
            />
          </Box>
        }
        preTitle=""
        size="md"
        isCentered
        mt="-6rem"
        mb="4rem"
      >
        <TacoFeatures sections={tacoFeatures} />
      </SectionTemplate>
      <SectionTemplate
        {...tacoDiagramsInfo}
        image={{
          ...tacoDiagramsInfo.image,
          left: 0,
          mt: "20rem",
          ml: "-36rem",
          w: "44rem",
        }}
        title={<Box mx={{ md: "-4rem" }}>{tacoDiagramsInfo.title}</Box>}
        bgColor="#0A0C0F"
        preTitle=""
        size="md"
        isCentered
        isImageBackground
      >
        <TacoDiagrams
          backgroundImage={{
            ...tacoDiagramsInfo.background,
            right: 0,
            mt: "-10rem",
            mr: "-8rem",
            w: "44rem",
          }}
          tacoDiagrams={tacoDiagrams}
        />
      </SectionTemplate>
      <SectionTemplate
        {...tacoExamplesInfo}
        image={{
          ...tacoExamplesInfo.image,
          w: "52rem",
          transform: "scaleX(-1)",
          mt: "-9rem",
          mr: "12rem",
        }}
        position="relative"
        size="lg"
        isImageBackground
      >
        <TacoExamples tacoExamples={tacoExamples} />
      </SectionTemplate>
      <SectionTemplate
        {...tacoTableInfo}
        title={
          <Box mx={{ md: "-4rem" }}>
            <HighlightWords
              title={tacoTableInfo.title}
              highlighted={tacoTableInfo.highlighted}
              bgGradient="linear-gradient(120.19deg, #BD30FF 3.32%, #7432FF 175%)"
              fontWeight="bold"
            />
          </Box>
        }
        bgColor="#161A1F"
        preTitle=""
        size="md"
        isCentered
        isImageBackground
      >
        <TacoTable {...tacoTable} />
      </SectionTemplate>
    </Box>
  )
}

export default TacoPageTemplate

export const query = graphql`
  query TacoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        tacoInfo {
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
        tacoFeaturesInfo {
          title
          description
          highlighted
        }
        tacoFeatures {
          title
          cards {
            title
            description
            icon {
              id
              relativePath
            }
          }
        }
        tacoDiagramsInfo {
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
          background {
            id
            relativePath
            internal {
              mediaType
            }
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
        tacoDiagrams {
          title
          preTitle
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
        tacoExamplesInfo {
          title
          preTitle
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
          rowReverse
        }
        tacoExamples {
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
        }
        tacoTableInfo {
          title
          highlighted
          description
          rowReverse
        }
        tacoTable {
          headers
          features {
            label
            options {
              project
              mark
              highlight
            }
          }
        }
      }
    }
  }
`
