export interface LinkInfo {
  href?: string
  text: string
  dropdown?: LinkInfo[]
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
