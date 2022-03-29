import { FC } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { withPrefix } from "gatsby"
import {
  Box,
  chakra,
  Icon,
  IconProps,
  Image as ChakraImage,
} from "@chakra-ui/react"
import { createIcon } from "@chakra-ui/react"

interface SVGAttributes {
  key: string
  value: string
}

interface SVG {
  name: string
  type: string
  value: string
  attributes: SVGAttributes[]
  children: SVG[]
}

export type ImageProps = {
  id: string
  relativePath: string
  internal: {
    mediaType: string
  }
  svg?: SVG
  gatsbyImageData?: IGatsbyImageData
  alt: string
}

const iconCache: { [id: string]: typeof Icon } = {}

const convertAttrToObj = (attributes: SVGAttributes[]) =>
  attributes.reduce(
    (reducer, attr) => ({
      ...reducer,
      [attr.key]: attr.value,
    }),
    {}
  )

const buildIcon = (id: string, svg: SVG) => {
  if (!iconCache[id]) {
    const svgAttributes = convertAttrToObj(svg.attributes)
    const path = svg.children.map(({ name, attributes }) => {
      const Tag = name
      const _attribute = convertAttrToObj(attributes)
      // @ts-ignore
      return <Tag {..._attribute} fill="currentColor" />
    })
    iconCache[id] = createIcon({
      defaultProps: svgAttributes,
      path,
    })
  }

  return iconCache[id]
}

const ChakraGatsbyImage = chakra(GatsbyImage)

// @ts-ignore
export const Image: FC<ImageProps & IconProps & { childImageSharp?: any }> = ({
  id,
  relativePath,
  internal,
  svg,
  gatsbyImageData,
  alt,
  childImageSharp,
  ...restProps
}) => {
  if (internal.mediaType === "image/svg+xml" && svg) {
    const IconComponent = buildIcon(id, svg)
    return <IconComponent {...restProps} />
  } else if (gatsbyImageData) {
    return <ChakraGatsbyImage image={gatsbyImageData!} alt={alt} />
  }

  return (
    <ChakraImage
      src={withPrefix(`/images/${relativePath}`)}
      // @ts-ignore
      alt={alt}
      {...(restProps as ImageProps)}
    />
  )
}
