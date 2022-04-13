---
template: roleQuizModal
defiAccordion:
  buttonText: What is DeFi?
  accordionText: Short for decentralized finance, DeFi is an umbrella term for
    peer-to-peer financial services on public blockchains, primarily Ethereum.
stages:
  - stageId: BTC
    questionPage:
      title: Do you own BTC or tBTC and want to get involved in DeFi?
      options:
        - label: Yes, I do own BTC or tBTC.
          result: BTC
        - label: No, I do not own BTC or tBTC.
          result: NEXT
      includeAccordion: true
    resultPage:
      title: BTC/tBTC User
      description: Based on your quiz answers, the role suited to your preferences is
        a BTC/tBTC user for Threshold. To learn more about this role, head to
        the page below!
      image: /images/tbtc.png
      button:
        label: About tBTC
        url: /earn/btc
        variant: INTERNAL_SOLID
  - stageId: STAKER
    questionPage:
      title: Are you comfortable staking tokens and running a node on the Threshold
        Network?
      options:
        - label: I am comfortable staking tokens and running a node myself.
          result: STAKER
        - label: I am comfortable staking tokens but would rather delegate running a node
            to someone else.
          result: STAKER
        - label: I am not comfortable doing that.
          result: NEXT
      includeAccordion: false
    resultPage:
      title: Staker
      description: Based on your quiz answers, the role suited to your preferences is
        a staker for Threshold. To learn more about this role, head to the page
        below!
      image: /images/staking-threshold.png
      button:
        label: About Staking
        url: /earn/stake
        variant: INTERNAL_SOLID
  - stageId: LIQUIDITY
    questionPage:
      title: Is ongoing liquidity (e.g. the ability to withdraw any deposited tokens
        immediately) important to you?
      options:
        - label: Yes, this is important to me.
          result: LIQUIDITY
        - label: No, this is not that important to me.
          result: TOKEN_HOLDER
      includeAccordion: false
    resultPage:
      title: Liquidity Provider
      description: Based on your quiz answers, the role suited to your preferences is
        a liquidity provider for Threshold. To learn more abouot this role, head
        to the page below!
      image: /images/liquidity.png
      button:
        label: About Liquidity
        url: /earn/liquidity-provider
        variant: INTERNAL_SOLID
  - stageId: TOKEN_HOLDER
    resultPage:
      title: Token Holder
      description: Based on your quiz answers, the role suited to your preferences is
        a token holder for Threshold. To learn more about this role, head to the
        page below!
      image: /images/token-holder.png
      button:
        label: About Tokens
        url: /earn/token-holder
        variant: INTERNAL_SOLID
    questionPage:
      includeAccordion: false
---
