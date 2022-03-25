import { ImageProps } from "../Image"

export interface LinkInfo {
  url?: string
  label: string
  subitems?: LinkInfo[]
  isExternal?: boolean
}

export interface SocialLink {
  url: string
  icon: { image: Omit<ImageProps, "alt">; alt: string }
}

export enum ExternalLinkHref {
  TELEGRAM = "TELEGRAM",
  STAKER_ROLE_LEARN_MORE = "STAKER_ROLE_LEARN_MORE",
  LP_ROLE_LEARN_MORE = "LP_ROLE_LEARN_MORE",
  MINT_TBC = "MINT_TBC",
  BTC_ROLE_LEARN_MORE = "BTC_ROLE_LEARN_MORE",
  TOKEN_HOLDER_ROLE_LEARN_MORE = "TOKEN_HOLDER_ROLE_LEARN_MORE",
  THRESHOLD_GITHUB = "https://github.com/threshold-network",
  THRESHOLD_DISCORD = "https://discord.gg/VafbhzJ3vW",
  THRESHOLD_TWITTER = "https://twitter.com/TheTNetwork",
  THRESHOLD_BLOG = "https://blog.threshold.network/",
  GOVERNANCE = "https://forum.threshold.network/",
  THRESHOLD_TOKEN = "https://curve.fi/teth",
  DAPP = "https://dashboard.threshold.network",
}
