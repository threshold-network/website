export interface LinkInfo {
  href?: string
  text: string
  dropdown?: LinkInfo[]
  isExternal?: boolean
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
  ROADMAP = "ROADMAP",
  FORUM = "FORUM",
}

export enum InternalLinkHref {
  ROOT = "/",
  ABOUT = "/about",
  GOVERNANCE = "/governance",
  EARN = "/earn",
  STAKER_ROLE = "/earn/staker-role",
  LP_ROLE = "/earn/liquidity-provider-role",
  BTC_ROLE = "/earn/btc-role",
  TOKEN_HOLDER_ROLE = "/earn/token-holder-role",
  PRESS = "/in-the-press",
  CONTRIBUTORS = "/contributors",
  FAQ = "/faq",
  AUDITS = "/audits",
}
