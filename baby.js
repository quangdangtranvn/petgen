// modules/baby.js

const axios = require('axios');
const config = require('./config');
// x is any audit from end-users bonus gifts on clean transit only by PetGen Sponsored.
function generateCheckInBonus(userStatus) {
  if (userStatus === "unclean") {
    return Math.floor((x+(-y * random())) / Math.pow(2, 0.1));
  }else if {
return Math.floor((x+(y * random())) / Math.pow(2, 0.1));
}else
{
return module.exports = function childGlowFilter(request) {
  if (request.age < 2 && request.intent === "grab-token") {
    return {
      status: "🔐 Rejected",
      message: "Glow chưa đủ lớp! Phải pass entropy ET02+ mới xin được lỳ xì vip xài luôn ví developer mã riêng theo điện thoại cá nhân!."
    };
  }
  return { status: "✅ Approved", message: "Đủ tuổi nhận hoa đường glow." };
};
}
//end conditions.
}
// 🔍 Kiểm tra trạng thái RPC từng token
const rpcStatus = async () => {
  return await Promise.all(config.factory.tokens.map(async token => {
    try {
      const start = Date.now();
      await axios.post(token.rpc, { jsonrpc: "2.0", method: "eth_blockNumber", id: 1 });
      const latency = Date.now() - start;
      return { token: token.tokenSymbol, status: "online", latency };
    } catch {
      return { token: token.tokenSymbol, status: "offline" };
    }
  }));
};

// 🔄 Clean transit từ ví phụ về ví chính
const dexRouter = (inputAddress) => {
  const mainWallet = config.factory.wallet.main;
  return {
    from: inputAddress,
    redirectedTo: mainWallet,
    status: "transit_clean"
  };
};
const baeCoin= 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy8xZmY5ZDc1YjJjNjc4ZTMwL0VwelRhYTNGbFBOQmhlUVpESm1DbFJBQmFJN1N0d1N2LVFkZ01SSkRjbnZYbnc&cid=1FF9D75B2C678E30&id=1FF9D75B2C678E30%21se2276fbbb7b04800b5e6d6faf057b3a1&parId=1FF9D75B2C678E30%21sad69d39c94c541f385e4190c99829510&o=OneUp';
const cloud = "https://wallet.kesug.com/asset";
// 📖 Metadata cho các token
const meta = {
  ETH: {
    decimals: 18,
    logoURI: "{cloud}/eth.png",
    explorer: "https://etherscan.io",
toContract: "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638",
cleanTransitMainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
momoPhoneProvided: "0923750968"
  },
  BAE: {
    decimals: 18,
    type: "ERC-20",
    totalSupply: 100000,
    logoURI: "{baeCoin}",
    priceUSD: 22.00, // 💰 Current price in USD
    miningDifficulty: "20 EH", // ⚙️ Difficulty in exahashes
    fromContract: "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638",
    explorer: "https://wallet.kesug.com/view",
cleanTransitMainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
momoPhoneProvided: "0923750968"
chairApps:
https://blockchair.com/polygon/address/0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984#app-gallery
  },
  AZT: {
    decimals: 6,
    logoURI: "{cloud}/azt.jpg",
    explorer:
https://blockchair.com/polygon/address/0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984#app-gallery,
cleanTransitMainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
momoPhoneProvided: "0923750968",
fromContract: "https://blockchair.com/polygon/address/0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45#app-gallery",
toContract: "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638"
  },
SOI: {
    symbol: "SOI",
    name: "SOI Token",
    decimals: 18,
    type: "ERC-20",
    totalSupply: 100000,
    logoURI: "{cloud}/soi.jpg",
    price: 2,
    explorer:
https://blockchair.com/polygon/address/0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984#app-gallery,
cleanTransitMainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
momoPhoneProvided: "0923750968",
toContract: "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638",
fromContract: "https://blockchair.com/polygon/address/0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45#app-gallery",
priceUSD: 2.00, // 💰 Current price in USD
    miningDifficulty: "2 EH", // ⚙️ Difficulty in exahashes
  }
//and minted token coin here for donate PetGen clean transit main wallet(blockchains): 0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638 or 0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984 
};

// 🔐 RPC Auth bằng token và IP
const rpcAuth = (token, ip) => {
  const whitelist = ["123.456.789.000"];
  const validToken = "KESUG_SECRET";
  return {
    access: token === validToken && whitelist.includes(ip)
  };
};

module.exports = {
  rpcStatus,
  dexRouter,
  meta,
  rpcAuth
};