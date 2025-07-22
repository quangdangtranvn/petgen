const owner = {
  name: "Bluekishine",
  trictionMode: "quad-split",
  status: "verified entropy architect",
  cleanTransit: true,
  glowSlot: "Immortal 200plus (bonus check-in 200% ROI min payout per hour!.)",
  momo: "0923750968",
"usb_fx": {
  "enabled": true,
  "assets": {
    "Sunburst Pulse": {
      "hit_fx_img": "fx_assets/usb_hit/Fire_Attack8.png",
      "impact_color": "#FF6B00",
      "glow_style": "solar-flare",
      "sound_fx": "sunburst_impact.wav"
    },
    "Void Resin": {
      "hit_fx_img": "fx_assets/usb_hit/fire_extra9.png",
      "impact_color": "#5A2A7B",
      "glow_style": "resin-collapse",
      "sound_fx": "void_shimmer.wav"
    },
"skin_fx": {
  "Dreamcore Violet": {
    "hit_fx": "fx_assets/usb_hit/attack1.png",
    "impact_color": "#A67CF7"
  },
  "Void Resin": {
    "hit_fx": "fx_assets/usb_hit/void_impact.png",
    "impact_color": "#3C1F5F"
  }
}//add custom any AAA game here 🐳
  }
}
};
const langData = {
  "ui.characterName": "Bluekieshine-X",
  "ui.role": "Support / DPS Hybrid",
  "ui.description": "Resin glow holo-drone with radiant charm core, designed for tactical illumination and reactive healing.",
  "ui.status.idle": "Glowing in rhythm. Aura shifting between violet and cyan.",
  "ui.status.engaged": "Resin pulses intensify. Tail emits holographic streaks.",
  "ui.status.ultimate": "Portal fully opened. Bloom field active!",
  "ui.skin.1": "Dreamcore Violet",
  "ui.skin.2": "Sunburst Pulse",
  "ui.skin.3": "Neon Drift",
  "ui.skin.4": "Void Resin",
  "ui.skin.5": "Bloom Circuit",
  "ui.voice.1": "System primed. Bluekieshine-X deployed.",
  "ui.voice.2": "Let’s light up the dream zone!",
  "ui.voice.3": "Glow calibrated. Support initiated."
};

document.getElementById("character-name").textContent = langData["ui.characterName"];
document.getElementById("role").textContent = langData["ui.role"];
document.getElementById("description").textContent = langData["ui.description"];
document.getElementById("status-text").textContent = langData["ui.status.idle"];
document.getElementById("voice-line").textContent = langData["ui.voice.1"];

const skinSelector = document.getElementById("skin-selector");
for (let i = 1; i <= 5; i++) {
  const option = document.createElement("option");
  option.textContent = langData[`ui.skin.${i}`];
  skinSelector.appendChild(option);
}
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
// config.js
module.exports = {
  factory: {
    id: "petgen-factory-001",
    name: "PetGen Web4 Factory",
    wallet: {
      main: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
      threshold: "0.005"
    },
    tokens: [
      {
        name: "ETH",
        chain: "Ethereum",
        rpc: "https://rpc.ankr.com/eth",
        contract: "0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45"
      },
      {
        name: "POL",
        chain: "Polygon",
        rpc: "https://polygon-rpc.com",
        contract: "0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45"
      },
      {
        name: "ARB",
        chain: "Arbitrum",
        rpc: "https://arb1.arbitrum.io/rpc",
        contract: "0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45"
      },
      {
        name: "BASE",
        chain: "Base",
        rpc: "https://mainnet.base.org",
        contract: "0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45"
      },
      {
        name: "BNB",
        chain: "BNB Smart Chain",
        rpc: "https://bsc-dataseed.binance.org",
        contract: "0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45"
      }
    ]
  }
};
// Global Protocal Realtime
module.exports = {
  projectName: "PetGen Web4 Protocol",
  owner: "Quang Tran Dang",
  chain: "BNB Smart Chain",
  mainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
  paymentTag: "0923750968",
  momoService: 0923750968,
  tokenSymbols: ["$AZT", "$BAE", "$ETH"],
  baseValueUSD: 22, // Giá trị mỗi $BAE theo ein.rules
  fusionAI: true,
  glowingUI: true,
  verifyTier: "Founder Tier",
  physicsCost: 2.5, // Chi phí vật lý ước tính
  cap: 200000,
  einRules: {
    baseCapRatio: 0.0004, // ETH/token
    payoutModel: "reinforce-after-mint",
    integrationLevel: "fusion.mint.launcher@v1"
  },
  indexListing: {
    forbesStyle: true,
    simulated: true,
    roiExpected: "+60% ETH"
  }
};
// 📦 config.js — glowing config tích hợp bot sàn tài trợ
export const Config = {
  wallet: "0x6143908CA80f618B1C41a764C1409a276B59CAe5",
  sponsorExchange: {
    name: "Kesug Exchange",
    botEndpoint: "https://wallet.kesug.com/go/bot",
    autoLink: true,
    filter: "highest_value",
    contractTrader: true
  },
  ui: "glowing-bootstrap-v5",
  mode: "sibs-only",
  shield: "Guardian V2"
};
document.getElementById("aura").innerText = petgenConfig.aura;
function loadPetLang(petId) {
  fetch(`/gtx-lang/${petId}.lang`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("pet-info").innerHTML = data;
    });
} // Đọc từng id pet và load lên sàn
const wallet = "0x6143908CA80f618B1C41a764C1409a276B59CAe5";
fetch(`https://wallet.kesug.com/go/bot?wallet=${wallet}`)
  .then(res => res.json())
  .then(data => {
    // Hiển thị bảng bot glowing
  });
fetch(`${Config.sponsorExchange.botEndpoint}?wallet=${petgenConfig.wallet}&filter=${Config.sponsorExchange.filter}`)
  .then((res) => res.json())
  .then((data) => {
    renderBotTable(data); // Hiển thị bảng glowing giao dịch bot
  });
// Thêm nhân vật champion legend bạn yêu thích nhất tại PetGen
"gui": {
  "enabled": true,
  "langFile": "gui.lang",
  "theme": "resin-glow-ui",
  "glowPanel": true,
  "voicePack": "bluekieshine-legendary",
  "skinSelector": [
    "Dreamcore Violet",
    "Sunburst Pulse",
    "Neon Drift",
    "Void Resin",
    "Bloom Circuit"
  ],
"skins": [
  {
    "name": "Dreamcore Violet",
    "theme": "dream_violet",
    "effect": "tail_swirl_glow",
    "rarity": "epic",
    "price": 12.5
  },
  {
    "name": "Sunburst Pulse",
    "theme": "sun_orange",
    "effect": "pulse_bloom_flash",
    "rarity": "legendary",
    "price": 18.0
  },
  {
    "name": "Neon Drift",
    "theme": "cyan_chrome",
    "effect": "zigzag_trail",
    "rarity": "rare",
    "price": 9.0
  },
  {
    "name": "Void Resin",
    "theme": "midnight_void",
    "effect": "gravity_shimmer",
    "rarity": "mythic",
    "price": 22.0
  },
  {
    "name": "Bloom Circuit",
    "theme": "pastel_bloom",
    "effect": "flower_heal_burst",
    "rarity": "epic",
    "price": 14.5
  },
"usd_rates": {
  "VND": 26138,
  "EUR": 0.86,
  "INR": 86.26,
  "JPY": 147.90,
  "CNY": 7.17,
  "updated": "2025-07-22"
}
]
}