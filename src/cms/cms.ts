import CMS from "netlify-cms-app"
// @ts-ignore
import { ColorControl, ColorPreview } from "netlify-cms-widget-colorpicker"

CMS.registerWidget("color", ColorControl, ColorPreview)

CMS.init()
