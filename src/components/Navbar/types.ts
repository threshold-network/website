export interface LinkInfo {
  url?: string
  label: string
  subitems?: LinkInfo[]
  isExternal?: boolean
}

export enum ExternalLinkHref {
  TELEGRAM = "some_telegram_link",
  LEARN_MORE = "https://blog.threshold.network/",
  THRESHOLD_GITHUB = "https://github.com/threshold-network",
  THRESHOLD_DISCORD = "https://discord.gg/VafbhzJ3vW",
  THRESHOLD_TWITTER = "https://twitter.com/TheTNetwork",
  THRESHOLD_BLOG = "https://blog.threshold.network/",
  GOVERNANCE = "https://forum.threshold.network/",
  THRESHOLD_TOKEN = "https://curve.fi/teth",
  STAKE = "https://dashboard.threshold.network",
}
