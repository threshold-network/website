import { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SimpleGrid, BoxProps, Link, Tooltip } from "@chakra-ui/react"
import { H4, ImageProps, Image, ImageRows } from "."

export interface TBTCPartner {
  name: string
  link: string
  role: "minter" | "guardian" | "general"
  image: ImageProps
}

export const TBTCPartners: FC<BoxProps> = ({ ...restProps }) => {
  const { minters, guardians } = useTBTCPartners()

  const data = [
    {
      title: "MINTERS",
      images: minters,
    },
    {
      title: "GUARDIANS",
      images: guardians,
    },
  ]

  return (
    <SimpleGrid columns={{ base: 1, xl: 2 }} {...restProps}>
      <H4 mr="28" mb="10">
        tBTC is backed by the following partners.
      </H4>
      <ImageRows data={data} renderImageCallback={renderPartners} />
    </SimpleGrid>
  )
}

type TBTCPartnerItemProps = Omit<TBTCPartner, "role">

const TBTCPartnerItem: FC<TBTCPartnerItemProps> = ({ name, link, image }) => (
  <Tooltip label={name} placement="top-start">
    <Link isExternal href={link}>
      <Image key={name} {...image} />
    </Link>
  </Tooltip>
)

export const renderPartners = (partner: TBTCPartnerItemProps) => (
  <TBTCPartnerItem key={partner.name} {...partner} />
)

export const useTBTCPartners = () => {
  const data = useStaticQuery(tBTCPartnersQuery)
  const partners = data.allMarkdownRemark.edges[0].node.frontmatter
    .partners as TBTCPartner[]

  return {
    all: partners,
    minters: partners.filter(filterByParnterRole("minter")),
    guardians: partners.filter(filterByParnterRole("guardian")),
  }
}

const filterByParnterRole =
  (role: TBTCPartner["role"]) => (partner: TBTCPartner) =>
    partner.role === role

const tBTCPartnersQuery = graphql`
  query tBTCPartners {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "tBTC-partners" } } }
    ) {
      edges {
        node {
          frontmatter {
            partners {
              name
              role
              link
              image {
                id
                relativePath
                internal {
                  mediaType
                }
                childImageSharp {
                  gatsbyImageData(width: 80, height: 80)
                }
              }
            }
          }
        }
      }
    }
  }
`
