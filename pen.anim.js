// 🐾 PetGen Animation Module – pet.anim.js
const PetGenAnim = {
  animateHeartGlow(petName, color = "#48C0FA") {
    console.log(`💘 Pet ${petName} glowing với màu tim ${color}`);
    return `
      .pet-heart-${petName} {
        animation: glowHeart 2.4s infinite alternate;
        box-shadow: 0 0 24px ${color};
      }
      @keyframes glowHeart {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(1.1); opacity: 1; }
      }
    `;
  },

  floatFruitAura(fruitType) {
    console.log(`🍓 Hiển thị aura của trái ${fruitType}`);
    return `
      .fruit-${fruitType} {
        animation: floatAura 3s ease-in-out infinite;
        filter: drop-shadow(0 0 6px rgba(255,255,255,0.5));
      }
      @keyframes floatAura {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
    `;
  },

  summonPetEffect(petName) {
    console.log(`✨ Gọi hiệu ứng summon Pet ${petName}`);
    return `
      .pet-summon-${petName} {
        animation: summonGlow 1.8s ease-in;
        background-image: radial-gradient(circle, #ffffff00, #${Math.random().toString(16).slice(2,8)});
      }
      @keyframes summonGlow {
        0% { opacity: 0; transform: scale(0.5); }
        100% { opacity: 1; transform: scale(1); }
      }
    `;
  },

  ramenSteamEffect() {
    console.log("🍜 Hiệu ứng ramen glowing activated");
    return `
      .ramen-steam {
        animation: steamGlow 2s linear infinite;
        background: url('/assets/steam.png') center center no-repeat;
      }
      @keyframes steamGlow {
        0% { opacity: 0.4; transform: translateY(0); }
        100% { opacity: 0.9; transform: translateY(-10px); }
      }
    `;
  }
};

// 🧩 Gắn module vào hệ PetGen UI
window.PetGenAnim = PetGenAnim;