const jwt = require('jsonwebtoken');
// JS tween animation cho mỗi .feature
import gsap from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');

  gsap.set(features, { opacity: 0, y: 40 });

  features.forEach((feature, i) => {
    gsap.to(feature, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: i * 0.3,
      ease: 'power2.out'
    });
  });
});
export class view {
// petgen_custom.js
export const TOTAL_FRAMES = Math.floor(360 / 3 * 1.5); // 180
let currentFrame = 0;

// BitArray setup
export const bitArrays = {
  rootA: new Uint8Array(64), // 8×8
  rootB: new Uint8Array(64)
};

export const dictRoot = {
  rootA: (idx) => {
    // Apply animation logic per index
    const intensity = bitArrays.rootA[idx];
    return `translate(${intensity * 2}px, ${intensity * 2}px)`;
  },
  rootB: (idx) => {
    const angle = bitArrays.rootB[idx] * 6;
    return `rotate(${angle}deg)`;
  }
};

// Animation loop
function animatePetFrame() {
  const frameRatio = currentFrame / TOTAL_FRAMES;

  for (let i = 0; i < 64; i++) {
    // Simulate data mutation for each frame
    bitArrays.rootA[i] = Math.floor(Math.sin(frameRatio * Math.PI * 2 + i) * 4 + 4);
    bitArrays.rootB[i] = Math.floor(Math.cos(frameRatio * Math.PI * 2 + i) * 4 + 4);

    // Apply transform to DOM elements (assuming grid of divs)
    const el = document.getElementById(`cell-${i}`);
    if (el) {
      el.style.transform =
        dictRoot.rootA(i) + ' ' + dictRoot.rootB(i);
    }
  }

  currentFrame = (currentFrame + 1) % TOTAL_FRAMES;
  requestAnimationFrame(animatePetFrame);
}

 animatePetFrame();
}//end class view

// User registration
app.post('/api/register', async (req, res) => {
  // Save user to the database
});

// User login
//app.post('/api/login', async (req, res) => {
  // Validate user credentials
  const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
  res.json({ token });
});

// app.js
const express = require('express');
const app = express();
const config = require('./config');
const baby = require('./baby');
await baby.rpcStatus();            // Kiểm tra RPC
const Web4Rate = 0.0022; // phải đúng rate như trong launcher config

module.exports = function convertAZTtoBAE(aztAmount, rate = Web4Rate) {
  if (rate !== Web4Rate) {
    throw new Error("🚫 Sai rate! Không khớp hợp đồng Web4.");
  }
export async function route(){
baby.dexRouter('0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638');        // Điều hướng từ ví DEX
//baby.dexRouter('0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984');        // Điều hướng từ ví DEX
baby.meta.BAE.logoURI;            // Truy xuất logo token BAE
baby.rpcAuth('token', 'ip');      
// Xác thực truy cập RPC
baby.rpcAuth('KESUG_SECRET', '123.456.789.000'); // kiểm tra truy cập RPC

  return {
    transit,
    logo,
    auth
}
// Giả lập render từ ein.lang (metadata Web4)
const einLangRender = {
  protocol: "Web4",
  project: config.projectName,
  owner: config.owner,
  chain: config.chain,
  wallet: config.mainWallet,
  paymentTag: config.paymentTag,
  tokens: config.tokenSymbols,
  baseValueUSD: config.baseValueUSD,
  verifyTier: config.verifyTier,
  fusionAI: config.fusionAI,
  glowingUI: config.glowingUI,
  einRules: config.einRules,
  roiExpected: config.indexListing.roiExpected,
  cap: config.cap,
  physicsCost: config.physicsCost,
  einLangVersion: "v1.0.0",
  renderMode: "fusion.mint.launcher@v1"
};

// Endpoint chính
app.get('/metadata', (req, res) => {
  res.json(config);
});
// app.js — Load GUI từ gui.lang
document.getElementById("character-name").textContent = langData["ui.characterName"];
document.getElementById("role").textContent = langData["ui.role"];
document.getElementById("description").textContent = langData["ui.description"];
document.getElementById("skill-1-title").textContent = langData["ui.skill.1.title"];
document.getElementById("skill-1-tooltip").textContent = langData["ui.skill.1.tooltip"];
// Endpoint render từ ein.lang
app.get('/ein', (req, res) => {
  res.json(einLangRender);
});

const einMetadata = {
  protocol: "Web4",
  owner: {
    nickName: "Quang Bluekie",
    fullName: "Quang Tran Dang",
    dateOfBirth: "02-02-2000",
    ownerID: "075200021007",
    citizenType: "Global Technologist",
    passportType: "Senate-AI-Diplomatic",
    emails: [
      "quangdt2220@gmail.com",
      "quangtd.9b@gmail.com",
      "quangdangtrandev@gmail.com"
    ],
    phone: "0923750968",
    walletETH: "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638"
  },
  identifiers: {
    ssnMock: "075-20-0021",
    dunsMock: "20021007",
    manifestCID: "PETGEN-V2-GLOBAL-ACCESS-0725",
    resolutionCode: "UN-RSA/SC-2211042"
  },
  finance: {
    currency: "$AZT, $ETH","BAE","SOI","ON"
    totalSupply: 200000,
    royaltyProtocol: "Web4 AutoSync",
    royaltyWallets: [
      "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638"
    ],
    paymentTag: "0923750968",
    status: "Founder Tier · Verified"
  },
  interface: {
    guiType: "Quantum Hologram",
    templateLang: "gtx-cssLang",
    theme: "GalacticGlow-Ironman",
    responsiveUI: true,
    cdnAssets: "https://cdn.quangbluekie.io/gtx-lang/"
  },
  security: {
    rsaVerified: true,
    rsaKeyLength: "3072-bit",
    hashing: "SHA-1024",
    cloudSync: true,
    hibernateFallback: true
  },
  launchConfig: {
    portableMode: true,
    sessionReplay: true,
    nftTemplate: "nft-template.json",
    webhookLog: "https://cdn.quangbluekie.io/php/log-mint/index.php",
    passportVerified: true,
    activationVia: "Web4 Launcher"
  }
};

// Endpoint render metadata từ ein.lang
app.get('/ein', (req, res) => {
  res.json(einMetadata);
});

app.listen(3000, () => {
  console.log("🚀 PetGen Web4 server running at http://localhost:3000");
});

const PetGenApp = {
  unlockPhone: "0923750968",
  rentHexKey: "0xACD",
  rentCooldownMs: 7200 * 1000,
  lastRentKey: "petgen_last_rent",
  phoneKey: "petgen_phone_unlock",
  pets: [
    {
      id: "petgen_i_tenzora_glow1350",
      name: "Tenzora ⚡ 1350%",
      class: "Glow",
      image: "https://cdn.quangbluekie.io/images/tenzora.png"
    },
    {
      id: "petgen_i_rainbowwings_bouncewings",
      name: "RainbowWings 🌈 Bounce",
      class: "WingShader",
      image: "https://cdn.quangbluekie.io/images/rainbowwings.png"
    },
    {
      id: "petgen_i_cervatrix_shadowpulse",
      name: "Cervatrix 🐉 Shadow Pulse",
      class: "Shadow",
      image: "https://cdn.quangbluekie.io/images/cervatrix.png"
    }
  ],
  strategy: {
    APR: 1000,
    BO: true,
    glowTrigger: "APR > 900%",
    creditAmount: "20 AZT"
  }
};

function unlockBot() {
  if (!localStorage.getItem(PetGenApp.phoneKey)) {
    const phone = prompt("📱 Nhập SĐT để mở khóa bot:");
    localStorage.setItem(PetGenApp.phoneKey, phone);
  }
}
// Ví dụ cập nhật trạng thái
export async function updateStatus(mode) {
  const key = `ui.status.${mode}`;
if(isCooldownOver){ document.getElementById("nametag").textContent = `🌟 ${langData["ui.nametag"]} — ${langData[key]}`;
}else{
// Gắn nametag thần hộ lên nhân vật
document.getElementById("nametag").textContent = langData["ui.nametag"];
} document.getElementById("status-text").textContent = langData[key];
}// xong cập nhật thanh trạng thái chuẩn MMORPG hay AAA GamePlays.
function isCooldownOver() {
  const last = localStorage.getItem(PetGenApp.lastRentKey);
  if (!last) return true;
  return Date.now() - parseInt(last) > PetGenApp.rentCooldownMs;
}

function rentBot(promptText) {
  const phone = localStorage.getItem(PetGenApp.phoneKey);
  if (phone !== PetGenApp.unlockPhone) {
    return alert("🔒 SĐT không hợp lệ.");
  }
  if (!isCooldownOver()) {
    return alert("⏳ Thuê thần thú giới hạn. Vui lòng đợi 2 giờ.");
  }
  if (PetGenApp.rentHexKey !== "0xACD") {
    return alert("🚫 Mã HEX không đúng.");
  }

  localStorage.setItem(PetGenApp.lastRentKey, Date.now().toString());
  alert(`✅ Đã thuê thần thú: "${promptText}"`);
}

function autoCreditWallet() {
  const walletKey = "petgen_user_wallet";
  const lastCreditKey = "petgen_last_credit";
  const wallet = localStorage.getItem(walletKey);
  const last = localStorage.getItem(lastCreditKey);
  const now = Date.now();

  if (!wallet || PetGenApp.rentHexKey !== "0xACD") return;
  if (last && now - parseInt(last) < 21600000) return;

  localStorage.setItem(lastCreditKey, now.toString());
  console.log(`🎁 +${PetGenApp.strategy.creditAmount} vào ví ${wallet}`);
}

function renderPets() {
  const div = document.getElementById("pets");
  PetGenApp.pets.forEach(pet => {
    const card = document.createElement("div");
    card.className = "card glow";
    card.innerHTML = `<img src="${pet.image}" width="120"><p>${pet.name}</p>`;
    div.appendChild(card);
  });
}

function renderStrategy() {
  const div = document.createElement("div");
  div.className = "card glow";
  div.innerHTML = `
    <h3>📈 Strategy</h3>
    <p>APR: ${PetGenApp.strategy.APR}%</p>
    <p>BO: ${PetGenApp.strategy.BO ? "Enabled" : "Disabled"}</p>
    <p>Glow Trigger: ${PetGenApp.strategy.glowTrigger}</p>
    <p>Auto Credit: ${PetGenApp.strategy.creditAmount}</p>
  `;
  document.body.appendChild(div);
}

function setupForm() {
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const prompt = document.querySelector("input[name='prompt']").value;
    rentBot(prompt);
  });
}

function initApp() {
convertAZTtoBAE(PetGenApp.strategy.creditAmount,rate = Web4Rate);
//logical ups
  unlockBot();
  setupForm();
  renderPets();
  renderStrategy();
  autoCreditWallet();
}
// Đọc và gắn meta từ meta.lang
loadMetaLang("meta.lang").then(meta => applyMeta(meta));
document.addEventListener("DOMContentLoaded", initApp);