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
  unlockBot();
  setupForm();
  renderPets();
  renderStrategy();
  autoCreditWallet();
}

document.addEventListener("DOMContentLoaded", initApp);