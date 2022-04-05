---
template: roleQuizModal
stages:
  - stageId: BTC
    questionPage:
      title: Do you own BTC or tBTC and want to get involved in DeFi?
      options:
        - label: Yes, I do own BTC or tBTC.
          result: BTC
        - label: No, I do not own BTC or tBTC.
          result: NEXT
    resultPage:
      title: BTC/tBTC User
  - stageId: STAKER
    questionPage:
      title:
        Are you comfortable staking tokens and running a node on the Threshold
        Network?
      options:
        - label: I am comfortable staking tokens and running a node myself.
          result: STAKER
        - label:
            I am comfortable staking tokens but would rather delegate running a node
            to someone else.
          result: STAKER
        - label: I am not comfortable doing that.
          result: NEXT
    resultPage:
      title: Staker Role!
  - stageId: LIQUIDITY
    questionPage:
      title:
        Is ongoing liquidity (e.g. the ability to withdraw any deposited tokens
        immediately) important to you?
      options:
        - label: Yes, this is important to me.
          result: LIQUIDITY
        - label: No, this is not that important to me.
          result: TOKEN_HOLDER
    resultPage:
      title: Liquidity Provider!
  - stageId: TOKEN_HOLDER
    resultPage:
      title: Token Holder!
---
