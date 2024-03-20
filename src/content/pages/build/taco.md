---
template: build-page/taco
path: /build/taco
title: TACo Page
seoTitle: Threshold Taco
seoDescription: "TACo (Threshold Access Control) enables end-to-end encrypted data sharing and communication."
tacoInfo:
  title: "TACo: Privacy without trust"
  description: "Give your users true sovereignty over their data, today. TACo – the first and only access control layer you aren’t forced to trust."
  image: /images/taco-encryption.svg
  buttons:
    - label: Start Building
      url: https://docs.threshold.network/app-development/threshold-access-control-tac/integration-guide
      variant: EXTERNAL_SOLID
    - label: Trust Overview
      url: https://docs.threshold.network/app-development/threshold-access-control-tac/trust-assumptions/cbd-mainnet-version
      variant: EXTERNAL_OUTLINE
  rowReverse: false
tacoFeaturesInfo:
  title: "The Fully Decentralized End-to-End Encryption"
  description: "Empower users to share data with qualifying recipients, and no-one else Encryption via a decentralized cryptosystem."
  highlighted: ["Decentralized", "Encryption"]
tacoFeatures:
  - title: "Web3 needs TACo"
    cards:
      - title: "Decentralized Storage"
        description: "TACo is the perfect compliment to persistent storage, finally enabling users to grant future access without having to download & re-encrypt locally."
        icon: /images/storage-icon.svg
      - title: "Web3 Social Networks"
        description: "TACo enables many-to-many data sharing, minus a centralized  authority that eventually decides to harvest and monetize interpersonal communication."
        icon: /images/social-icon.svg
      - title: "Media content-gating"
        description: "Whether it's a stream, a movie or a collectible, TACo enforces decryption rights to media, so owning an NFT has meaning beyond a symbolic receipt."
        icon: /images/media-icon.svg
  - title: "The Web needs TACo"
    cards:
      - title: "Hyper-sensitive data"
        description: "From reproductive health data to  seed phrase recovery, TACo is leveraged to ensure that high-stakes data sharing doesn’t involve trusting an intermediary."
        icon: /images/locker-icon.svg
      - title: "IoT & Connected Vehicles"
        description: "TACo is the antidote to the interconnected hardware panopticon, where every waking (and sleeping) moment of our lives is surveilled."
        icon: /images/iot-icon.svg
      - title: "Activism & Human Rights"
        description: "TACo protects those most at risk of intimidation, censorship and reprisal based on a data leaks – whether via a hack, subpoena, or a data vending business model."
        icon: /images/activism-icon.svg
tacoDiagramsInfo:
  title: "Integrate a Privacy Layer with Nothing to Hide"
  description: "TACo isn't just auditable, it's comprehensible, from high-level schematic to client code."
  image: /images/taco-grid.svg
  background: /images/glowing-background.png
tacoDiagrams:
  - title: "Generating a DKG Cohort"
    preTitle: "learn"
    description: "Independent nodes sampled from the Threshold network form a cohort – who collectively generate a DKG public key."
    image: /images/first-taco-diagram.svg
    buttons:
      - label: "nucypher/ferveo"
        url: https://github.com/nucypher/ferveo
        variant: EXTERNAL_OUTLINE
      - label: "nucypher-contracts"
        url: https://github.com/nucypher/nucypher-contracts
        variant: EXTERNAL_OUTLINE
  - title: "Encrypting Private Data"
    preTitle: "learn"
    description: "Data owners specify conditions for decryption, embedded with private data and encrypted with the DKG public key."
    image: "/images/second-taco-diagram.svg"
    buttons:
      - label: "taco-web"
        url: https://github.com/nucypher/taco-web
        variant: EXTERNAL_OUTLINE
      - label: "nucypher/main"
        url: https://github.com/nucypher/nucypher/tree/main
        variant: EXTERNAL_OUTLINE
  - title: "Accessing Decrypted Data"
    preTitle: "learn"
    description: "Requesters present state to the cohort, who verify conditions fulfillment before provisioning decryption material."
    image: "/images/third-taco-diagram.svg"
    buttons:
      - label: "taco-web"
        url: https://github.com/nucypher/taco-web
        variant: EXTERNAL_OUTLINE
      - label: "nucypher/main"
        url: https://github.com/nucypher/nucypher/tree/main
        variant: EXTERNAL_OUTLINE
tacoExamplesInfo:
  title: "Access conditions that fit your use case"
  preTitle: "build"
  description: "Whatever the business logic for data access, TACo nodes will enforce it. Specify and combine EVM, RPC and time-based conditions. Non-blockchain coming soon."
  image: "/images/ecosystem-grid.svg"
  rowReverse: false
tacoExamples:
  - title: "NFT-gating"
    description: "Predicate decryption rights on the holding of special-purpose NFTs. Works for digital media, event streams and beyond."
    image: "/images/nft-gating.png"
  - title: "Secret recovery"
    description: "Share your seed phrase or password  – to beneficiaries or your future self – without risking DOS by an intermediary."
    image: "/images/secret-recovery.png"
  - title: "Inference protection"
    description: "Prevent third-parties from harvesting or blocking communication between end-users and generative models."
    image: "/images/inference-protection.png"
tacoTableInfo:
  title: "The Zero Compromise Solution"
  highlighted: ["Zero", "Compromise"]
  description: "Choose a service that’s easy to integrate and that’s actually decentralized."
  rowReverse: false
tacoTable:
  headers:
    [
      "Feature / Service Choice",
      "TACo",
      "LIT",
      "EVM Contract",
      "PKI",
      "Cloud Service",
    ]
  features:
    - label: "Scalable to millions of users"
      options:
        - project: "Taco"
          image: "/images/check-purple.svg"
        - project: "LIT"
          image: "/images/check-white.svg"
        - project: "EVM Contract"
          image: "/images/x-gray.svg"
        - project: "PKI"
          image: "/images/x-gray.svg"
        - project: "Cloud Service"
          image: "/images/check-white.svg"
    - label: "Arbitrary access conditions"
      options:
        - project: "Taco"
          image: "/images/check-purple.svg"
        - project: "LIT"
          image: "/images/check-white.svg"
        - project: "EVM Contract"
          image: "/images/x-gray.svg"
        - project: "PKI"
          image: "/images/x-gray.svg"
        - project: "Cloud Service"
          image: "/images/check-white.svg"
    - label: "Redundant & highly available"
      options:
        - project: "Taco"
          image: "/images/check-purple.svg"
        - project: "LIT"
          image: "/images/dash-white.svg"
        - project: "EVM Contract"
          image: "/images/check-white.svg"
        - project: "PKI"
          image: "/images/x-gray.svg"
        - project: "Cloud Service"
          image: "/images/check-white.svg"
    - label: "Cryptoeconomically secured"
      options:
        - project: "Taco"
          image: "/images/check-purple.svg"
        - project: "LIT"
          image: "/images/x-gray.svg"
        - project: "EVM Contract"
          image: "/images/check-white.svg"
        - project: "PKI"
          image: "/images/x-gray.svg"
        - project: "Cloud Service"
          image: "/images/x-gray.svg"
    - label: "Battle-tested network"
      options:
        - project: "Taco"
          image: "/images/check-purple.svg"
        - project: "LIT"
          image: "/images/x-gray.svg"
        - project: "EVM Contract"
          image: "/images/check-white.svg"
        - project: "PKI"
          image: "/images/x-gray.svg"
        - project: "Cloud Service"
          image: "/images/x-gray.svg"
    - label: "Transparent trust model"
      options:
        - project: "Taco"
          image: "/images/check-purple.svg"
        - project: "LIT"
          image: "/images/x-gray.svg"
        - project: "EVM Contract"
          image: "/images/check-white.svg"
        - project: "PKI"
          image: "/images/check-white.svg"
        - project: "Cloud Service"
          image: "/images/dash-white.svg"
    - label: "Track record with infra"
      options:
        - project: "Taco"
          image: "/images/check-purple.svg"
        - project: "LIT"
          image: "/images/x-gray.svg"
        - project: "EVM Contract"
          image: "/images/check-white.svg"
        - project: "PKI"
          image: "/images/x-gray.svg"
        - project: "Cloud Service"
          image: "/images/x-gray.svg"
    - label: "Multi-chain"
      options:
        - project: "Taco"
          image: "/images/dash-purple.svg"
        - project: "LIT"
          image: "/images/check-white.svg"
        - project: "EVM Contract"
          image: "/images/x-gray.svg"
        - project: "PKI"
          image: "/images/x-gray.svg"
        - project: "Cloud Service"
          image: "/images/x-gray.svg"
---
