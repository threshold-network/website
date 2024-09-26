---
template: home-page
path: /
seoTitle: Threshold Network
hero:
  title: Bridge your Bitcoin and start earning.
  body: Deposit and redeem BTC in DeFi without intermediaries using Threshold's tBTC.
  ctaNotice:
    label: New!
    url: https://app.aave.com/reserve-overview/?underlyingAsset=0x18084fba666a33d37592fa2633fd49a74dd93a88&marketName=proto_mainnet_v3
    description: tBTC is live on Aave. Put your tBTC to work now!
  ctaButtons:
    - label: Mint tBTC
      url: https://dashboard.threshold.network/tBTC
      posthogLabel: Mint tBTC [hero] (Main page)
    - label: Stay Updated
      url: https://twitter.com/TheTNetwork
      posthogLabel: Stay Updated [hero] (Main page)
  image: /images/minting-tbtc.png
btcRole:
  title: Bridge BTC to Ethereum
  description: tBTC is Threshold’s decentralized bridge to bring BTC to the
    Ethereum network.
  descriptionOfPartners: tBTC is backed by the following partners.
  image: /images/tbtc.png
  buttons:
    - label: Stay Updated
      url: https://twitter.com/TheTNetwork
      variant: EXTERNAL_SOLID
      posthogLabel: Stay Updated [btcRole] (Main page)
    - label: Learn More
      url: /earn/btc
      variant: INTERNAL_OUTLINE
      posthogLabel: Learn More [btcRole] (Main page)
  rowReverse: false
  bgColor: "#333333"
bugBounty:
  preTitle: Bug bounty
  title: "Join the hunt: $500K Bug Bounty"
  description: "Spot security risks, claim your prize."
  image: /images/immunefi.svg
  buttons:
    - label: Read more
      url: https://immunefi.com/bounty/thresholdnetwork/
      variant: EXTERNAL_SOLID
  rowReverse: false
  bgColor: "#161A1F"
stakerRole:
  title: Threshold Staking
  description:
    Stakers escrow T tokens to run a node on the Threshold Network and
    earn rewards.
  image: /images/staking-threshold.png
  buttons:
    - label: Start Staking
      url: https://dashboard.threshold.network/overview/network
      variant: EXTERNAL_SOLID
    - variant: INTERNAL_OUTLINE
      label: Learn More
      url: /earn/staker
  rowReverse: false
  bgColor: "#858585"
lpRole:
  title: Provide Liquidity
  description: Liquidity providers earn yields by depositing assets into liquidity pools.
  image: /images/liquidity.png
  buttons:
    - label: Learn More
      url: /earn/liquidity-provider
      variant: INTERNAL_SOLID
  rowReverse: true
  bgColor: "#858585"
tokenHolderRole:
  title: Token Holder DAO
  description: Make the most of your T tokens on the Threshold Network by
    participating in DAO governance.
  image: /images/token-holder.png
  buttons:
    - label: Governance Forum
      url: https://forum.threshold.network/
      variant: EXTERNAL_SOLID
    - label: Learn More
      url: /earn/token-holder
      variant: INTERNAL_OUTLINE
  rowReverse: true
  bgColor: "#3c3c3c"
migrationInfo:
  title: Do you own KEEP or NU?
  description: Keep and NuCypher merged to form the Threshold Network. Upgrade
    your tokens to T!
  image: /images/legacy-tokens.png
  buttons:
    - label: Upgrade tokens
      url: https://dashboard.threshold.network/upgrade
      variant: EXTERNAL_OUTLINE
  bgColor: "#141414"
  rowReverse: false
tacoRole:
  title: Build uncensorable e2ee into your dapp
  description: TACo is the only end-to-end encryption plugin that is end-to-end decentralized
  image: /images/taco-section-image.svg
  buttons:
    - label: Learn More
      url: /build/taco
      variant: INTERNAL_SOLID
    - label: Quickstart
      url: https://docs.threshold.network/app-development/threshold-access-control-tac/quickstart-testnet
      variant: EXTERNAL_OUTLINE
  subitems:
    - title: Easy to integrate
      description: TACo makes access control easy with an intuitive API, flexible architecture, and a free-to-use Testnet. All you need is a use case that involves private data, and where trusting an intermediary won't fly.
      image: /images/decentralized-icon.png
    - title: Day One Decentralized
      description: Access to data encrypted via TACo is managed by groups of independent Threshold nodes, from the very first byte. There's no 'temporary phase' where you trust the developers not to decrypt sensitive data.
      image: /images/secure-icon.png
    - title: Secure & redundant
      description: Access control groups are sampled from a live, battle-tested & well-collateralized network. TACo is being integrated into apps handling hyper-sensitive payloads like seed phrases & health data.
      image: /images/private-icon.png
harnessThePower:
  title: Harness the power of Threshold
  description: Threshold leverages threshold cryptography to protect digital
    assets by distributing operations across independent parties, requiring some
    threshold number of them (t-of-n) to cooperate.
  buttons:
    - label: About Threshold
      url: /about
      variant: INTERNAL_SOLID
  subitems:
    - title: Decentralized
      description: Threshold utilizes a network of independent nodes to provide
        threshold cryptographic services without a central authority.
      image: /images/decentralized-icon.png
    - title: Secure
      description:
        Splitting cryptographic operations across nodes increases security
        and availability and reduces trust assumptions. Threshold is
        [audited](/about#audits) by the best firms in the space.
      image: /images/secure-icon.png
    - title: Private
      description: Cryptographic protocols eradicate the trust burden forced on
        end-users and ensure privacy on the public blockchain.
      image: /images/private-icon.png
activeCommunity:
  title: Threshold is run by an active community.
  bgColor: "#141414"
  description: The Threshold DAO is a decentralized community of T token holders
    and their delegates who collectively vote to decide what's next for the
    network.
  image: /images/governance.png
  buttons:
    - label: About Governance
      url: /governance
      variant: INTERNAL_SOLID
  rowReverse: false
joinTheCommunity:
  left:
    - label: Get involved
      title: Become a part of our community
      description:
        Join our Discord server and our Telegram to get involved and stay
        up to date.
      buttons:
        - label: Discord
          url: https://discord.gg/Threshold
          image: /images/discord.svg
          variant: INTERNAL_OUTLINE
          icon:
            image: /images/logo-discord.png
            alt: discord
        - label: Telegram
          url: https://t.me/thresholdnetwork
          image: /images/telegram.svg
          variant: INTERNAL_OUTLINE
          icon:
            image: /images/paper-plane-sharp.png
            alt: telegram
  right:
    - label: For Developers
      title: Learn more about the network
      description:
        Learn more about the Threshold network by reading the documentation
        or visiting Github.
      buttons:
        - label: GitHub
          url: https://github.com/threshold-network
          image: /images/github.svg
          variant: INTERNAL_OUTLINE
          icon:
            image: /images/logo-github.png
            alt: github
        - label: Docs
          url: https://docs.threshold.network/
          image: /images/document.svg
          variant: INTERNAL_OUTLINE
          icon:
            image: /images/document.svg
            alt: docs
title: Threshold Network
description: Threshold powers user sovereignty on the public blockchain.
---
