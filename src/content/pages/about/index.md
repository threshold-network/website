---
path: /about
teamsSection:
  left:
    description:
      Keep is the privacy-focused infrastructure behind tBTC, the only
      truly decentralized solution for Bitcoin on Ethereum. Keep secures private
      data on public blockchains with “keeps.”
    image: /images/keep-logo-green.png
    buttons:
      - label: Visit Keep's Website
        url: https://keep.network/
        variant: EXTERNAL_OUTLINE
  title: Contributing Teams
  right:
    description:
      NuCypher brings privacy to the public blockchain. NuCypher's proxy
      re-encryption (PRE) and condition-based decryption (CBD) network provides
      cryptographic access controls for distributed apps and protocols.
    image: /images/nu-logo.png
    buttons:
      - label: Visit NuCypher’s Website
        url: https://www.nucypher.com/
        variant: EXTERNAL_OUTLINE
faq:
  title: FAQ
  additionalHelp:
    text: Still have questions? Join our Discord!
    button:
      label: Join Discord
      url: https://discord.gg/Threshold
      icon:
        image: /images/logo-discord.png
        alt: discord
      variant: INTERNAL_SOLID
  faqs:
    - question: What is threshold cryptography?
      answer: Threshold cryptography is a revolutionary technology that uses
        cryptography to unlock greater utility and usability for digital assets
        without needing to trust a centralized party. Threshold cryptography
        distributes sensitive operations across multiple independent entities –
        like nodes in a network – and requires a threshold, or minimum number of
        those entities to cooperate for the operation to be successful.
    - question: Do legacy KEEP stakers need to set up a PRE node?
      answer:
        Yes, everyone who stakes on Threshold will need to run a PRE node. If
        you are working with a stakng provider, reach out to them to accomplish
        this. If you are running your own node, you can refer to the following
        guide.
      buttons:
        - label: How to run a PRE Node
          leftIcon:
            image: /images/document.svg
          rightIcon:
            image: /images/external-arrow.svg
          url: https://docs.nucypher.com/en/latest/pre_application/running_a_node.html
    - question: What staking providers work with Threshold?
      answer: You can refer to the list of staking providers below.
      buttons:
        - label: Staking Providers
          leftIcon:
            image: /images/document.svg
          rightIcon:
            image: /images/external-arrow.svg
          url: https://docs.threshold.network/staking-and-running-a-node/running-a-node/staking-providers
    - question: What determines the exchange rate for T tokens?
      answer:
        As decided by the NU and KEEP communities in the final merge proposal,
        the conversion ratio for each token is based on the total supply rather
        than price. The final total supply of NU is ~1,380,688,920 and the total
        supply of KEEP is ~940,795,010. As a result, the token factors are
        1NU:~3.26T and 1KEEP:~4.78T.
      buttons:
        - label: Launch Details Post
          leftIcon:
            image: /images/document.svg
          rightIcon:
            image: /images/external-arrow.svg
          url: https://blog.threshold.network/threshold-launch/
    - question: How did Keep and NuCypher merge?
      answer:
        The Keep and NuCypher communities voted to merge into a single network
        in the RC0 T Token proposal. This resulted in the first ever
        decentralized on-chain network merger and launched Threshold Network.
        The merger resulted in the introduction of a new token (T), the
        Threshold DAO,  and the Threshold Discord server.
      buttons:
        - label: RC0 Proposal
          url: https://forum.keep.network/t/t-token-proposal-rc0/264
          leftIcon:
            image: /images/document.svg
          rightIcon:
            image: /images/external-arrow.svg
        - label: Merger Blog Post
          url: https://blog.threshold.network/decentralized-merger
          leftIcon:
            image: /images/document.svg
          rightIcon:
            image: /images/external-arrow.svg
title: About
template: about-page
seoTitle: About
seoDescription: ""
aboutInfo:
  title: About
  description: Threshold is the first ever on-chain merge between two existing
    networks and communities, Keep and NuCypher. Threshold provides a suite of
    threshold cryptography services that power user sovereignty on the
    blockchain.
  image: /images/about-illustration.svg
  buttons:
    - label: About the merge
      url: https://blog.threshold.network/the-story-of-threshold/
      variant: EXTERNAL_SOLID
  rowReverse: false
audits:
  - title: "Least Authority: tBTC Bridge v2 Security Audit Report"
    url: https://leastauthority.com/blog/audits/audit-of-keep-network-tbtc-bridge-v2/
    date: 29 September 2022
    auditImage: /images/least-authority-2.png
  - title: "CertiK: Vending Machine Security Audit Report"
    url: https://www.certik.com/projects/threshold-network
    date: 19 November 2021
    auditImage: /images/ctk-logo-ver-white.png
  - title:
      "ChainSecurity: Staking Contract, T Token, Vending Machine Security Audit
      Report"
    url: https://chainsecurity.com/security-audit/threshold-network/
    date: 09 November 2021
    auditImage: /images/chainsecurity-vertical-logo-white-with-transparent-background.png
---
