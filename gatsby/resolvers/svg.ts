import { parse } from "svgson"
import { pathThatSvg } from "path-that-svg"
import fs from "fs"

const svgCache = {}
const SVG_CACHE_ID_PREFIX = "svg-data-cache"

const convertSvgAttributesToArray = (object) => {
  for (const key in object) {
    if (typeof object[key] === "object")
      object[key] = convertSvgAttributesToArray(object[key])
  }

  if (object.hasOwnProperty("attributes"))
    object.attributes = Object.entries(object.attributes).map(
      ([key, value]) => ({
        key,
        value,
      })
    )

  return object
}

export const svgResolver = (reporter) => async (source) => {
  if (source.internal.mediaType !== "image/svg+xml") {
    return null
  }

  try {
    const cacheId = `${SVG_CACHE_ID_PREFIX}-${source.id}`
    const cachedData = svgCache[cacheId]

    if (cachedData) {
      reporter.info(`Loading data from cache; id: ${cacheId}`)
      return cachedData
    }

    const data = fs.readFileSync(source.absolutePath, {
      encoding: "utf-8",
    })
    // Convert svg elements such as `rect`, `circle`, `ellipse`, `line`,
    // `polyline` or `polygon` to `path`. It will help to build the
    // styleable svg icon components with Chakra.
    const path = await pathThatSvg(data)
    // Convert svg to an object.
    const parsedSvgElement = await parse(path)

    const svgEelement = convertSvgAttributesToArray(parsedSvgElement)
    svgCache[cacheId] = svgEelement
    reporter.info(`Saving svg data in cache; id ${cacheId}`)
    return svgEelement
  } catch (error) {
    reporter.panic(error)
    return null
  }
}
