export interface LinkInfo {
  href?: string
  text: string
  dropdown?: LinkInfo[]
  isExternal?: boolean
}

export enum ExternalLinkHref {
  TELEGRAM = "TELEGRAM",
  STAKER_ROLE_LEARN_MORE = "STAKER_ROLE_LEARN_MORE",
  THRESHOLD_GITHUB = "https://github.com/threshold-network",
  THRESHOLD_DISCORD = "https://discord.gg/VafbhzJ3vW",
  THRESHOLD_TWITTER = "https://twitter.com/TheTNetwork",
  THRESHOLD_BLOG = "https://blog.threshold.network/",
  GOVERNANCE = "https://forum.threshold.network/",
  THRESHOLD_TOKEN = "https://curve.fi/teth",
  DAPP = "https://dashboard.threshold.network",
}
