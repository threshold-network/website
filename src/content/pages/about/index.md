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
      answer: Threshold Cryptography is a class of cryptographic primitive that helps spread operations across a group of service-providers, such that no single entity is being trusted to behave correctly. The concept of a 'threshold' – wherein a minimum number of independent entities must align on the expected behavior – is a straightforward but powerful impediment against unilateral control. Without that control, surveillance, rent-seeking, and other exploitative Web2.0 practices become far harder to impose on end-users.   
    - question: What is the difference between Threshold's services and those offered by competitors, with respect to trust?
      answer:
        Although most Web3 and DeFi projects pay lip service to 'decentralization', 'trust-minimization', and 'permissionless', far fewer wait until their networks (and therefore services) are meaningfully decentralized before launching. Not only is their path towards trust-reduction often unclear and unresolved – i.e. necessitating ambitious R&D efforts with no guaranteed resolutions – there is also a tendency to obfuscate this uncertainty. Threshold is committed to (1) achieving meaningful decentralization (defined below) before offering a Mainnet/production version of any service, (2) making the limitations of said version (particularly with respect to trust impositions) transparent and comprehensible, and (3) delaying the service's launch until a low-risk path towards resolving those trust-related limitations has been established and planned out. To that end, Threshold's open-source repositories go beyond polished pull requests, and include plenty of upstream issues discussing the trust burdens placed on adopters amd users, and how we might solve them. Threshold documentation also contains entire sections dedicated to explaining the underlying trust assumptions of a given Threshold application or service. See TACo's Trust Assumptions pages for details of the current and future state of trust.      
    - question: What is Threshold's definition of 'meaningful decentralization'? 
      answer: Decentralization is a nebulous and contentious term, and a universally applicable delineation may never be agreed upon. In the context of Threshold's Web3 and DeFi applications – namely, a BTC-ETH bridge, programmable access control, verifiable randomness, and a stablecoin – we offer the following definition. An application may be described as 'meaningfully decentralized' if critical operational power is distributed across observably independent entities. More specifically, this means that no single commercial entity (or conglomerate) has the ability to abscond with user funds, decrypt private user data, spoof randomness, or block/DOS any of the services that Threshold adopters rely upon. Perhaps it would be better to describe this definition as 'Minimum Viable Decentralization', since Threshold delivers cryptographic services that are much more decentralized. For example, the signer set that manages tBTC deposits is always group of 100 nodes, while with TACo access to sensitive data is managed by cohorts of around 30 nodes – in both cases selected from the wider node population (which hovers around 250 and 100 distinct Etheruem addresses respectively). There are two caveats; (1) there are other components of each app that are less decentralized, and (2) a tBTC set or TACo cohort may contain multiple nodes controlled by the same entity. However, while it may not be possible to verify on-chain who controls each node, it is discernible through informal evidence – including Etherscan observation, 'voluntary self-doxxing' via community participation, and third-party oversight into correlations and concentrations of machines. Overall, the bar for 'meaningfully decentralized' is arguably rather low, and yet Threshold remains one of the few networks that clears this bar.   
      
    - question: Do legacy KEEP stakers need to set up a PRE node?
      answer:
        Yes, everyone who stakes on Threshold will need to run a PRE node. If
        you are working with a staking provider, reach out to them to accomplish
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
  - title: "Least Authority: Solana Smart Contracts Audit Report"
    url: https://leastauthority.com/blog/audits/audit-of-keep-network-solana-smart-contracts/
    date: 6 September 2023
    auditImage: /images/least-authority-2.png
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
