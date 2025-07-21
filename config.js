// config.js
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