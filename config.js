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