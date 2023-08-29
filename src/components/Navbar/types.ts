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
  BOND_PROGRAM = "https://blog.threshold.network/unlocking-liquidity-threshold-launches-bond-program-with-bond-protocol/",
  BTC_ROLE_LEARN_MORE = "BTC_ROLE_LEARN_MORE",
  DAPP = "https://dashboard.threshold.network",
  DUNE_DASHBOARD_TBTC = "https://dune.com/threshold/tbtc",
  GOVERNANCE = "https://forum.threshold.network/",
  LP_ROLE_LEARN_MORE = "LP_ROLE_LEARN_MORE",
  MINT_TBC = "MINT_TBC",
  STAKER_ROLE_LEARN_MORE = "STAKER_ROLE_LEARN_MORE",
  TELEGRAM = "TELEGRAM",
  TBTC_WRAPPED_TOUR = "https://blog.threshold.network/stop-three-on-tbtcs-wrapped-tour-kicks-off-with-an-arbitrum-integration-and-a-new-galxe-oat/",
  THRESHOLD_BLOG = "https://blog.threshold.network/",
  THRESHOLD_DISCORD = "https://discord.gg/Threshold",
  THRESHOLD_GITHUB = "https://github.com/threshold-network",
  THRESHOLD_TOKEN = "https://curve.fi/teth",
  THRESHOLD_TWITTER = "https://twitter.com/TheTNetwork",
  THRESHOLD_YOUTUBE_SUBSCRIBE = "https://www.youtube.com/@Threshold.Network?sub_confirmation=1",
  TOKEN_HOLDER_ROLE_LEARN_MORE = "TOKEN_HOLDER_ROLE_LEARN_MORE",
  WORMHOLE_HAKATON = "https://www.encode.club/wormhole-hackathon",
}
