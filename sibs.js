// /stack/sibs.js
const wallet = "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638";
const cloud = "https://wallet.kesug.com/asset";
const sibsStack = {
  version: "1.0",
  protocol: "SIBS",
  tokens: [
    {
      symbol: "ETH",
      type: "ERC-20",
      decimals: 18,
      explorer: "https://etherscan.io",
      logoURI: "{cloud}/eth.png",
      powStackingEnabled: false
    },
    {
      symbol: "BAE",
      type: "ERC-20",
      decimals: 18,
      explorer: "https://wallet.kesug.com/view",
      logoURI: "{cloud}/bae.png",
      cleanTransitMainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
      powStackingEnabled: true,
      powEntryPoint: "{cloud}/stack",
      powRewardWallet: "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638"
    },
    {
      symbol: "AZT",
      type: "ERC-20",
      decimals: 6,
      explorer: "https://blockchair.com/polygon/address/0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984#app-gallery",
      logoURI: "{cloud}/azt.png",
      fromContract: "https://blockchair.com/polygon/address/0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45#app-gallery",
      cleanTransitMainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
      powStackingEnabled: true,
      powEntryPoint: "{cloud}/stack",
      powRewardWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984"
    },
    {
      symbol: "SOI",
      type: "ERC-20",
      decimals: 18,
      totalSupply: "10000000000",
      logoURI: "{cloud}/soi.png",
      explorer: "https://etherscan.io/token/0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638",
      cleanTransitMainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
momoPhoneProvided: "0923750968",
      fromContract: {wallet},
      priceUSD: 2.00,
      miningDifficulty: "2 EH",
      powStackingEnabled: true,
      powEntryPoint: "{cloud}/stack",
      powRewardWallet: "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638"
    }
  ]
};

module.exports = sibsStack;