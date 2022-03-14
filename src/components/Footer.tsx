import { FC } from "react"
import { graphql, StaticQuery } from "gatsby"

type FooterProps = {
  links: Array<{ url: string; label: string }>
}

const FooterTemplate: FC<FooterProps> = ({ links = [] }) => (
  <footer>
    <ul>
      {links.map((link, i) => (
        <li key={`legal-link-${i}`}>
          {link.url} + {link.label}
        </li>
      ))}
    </ul>
  </footer>
)

export const query = graphql`
  query Footer {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "footer-nav" } } }
    ) {
      edges {
        node {
          frontmatter {
            nav_links {
              label
              url
            }
          }
        }
      }
    }
  }
`

export const Footer = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const { allMarkdownRemark } = data
      const { frontmatter } = allMarkdownRemark.edges[0].node
      return <FooterTemplate links={frontmatter.nav_links} />
    }}
  />
)
