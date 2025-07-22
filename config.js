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
    }
  }
}
};
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
  }
]
}