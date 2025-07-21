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
return null;
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

// 📖 Metadata cho các token
const meta = {
  ETH: {
    decimals: 18,
    logoURI: "https://wallet.kesug.com/assets/eth.png",
    explorer: "https://etherscan.io"
  },
  BAE: {
    decimals: 18,
    logoURI: "https://wallet.kesug.com/assets/bae.png",
    explorer: "https://wallet.kesug.com/view",
cleanTransitMainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
momoPhoneProvided: "0923750968"
chairApps:
https://blockchair.com/polygon/address/0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984#app-gallery
  },
  AZT: {
    decimals: 6,
    logoURI: "https://wallet.kesug.com/assets/azt.png",
    explorer:
https://blockchair.com/polygon/address/0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984#app-gallery,
cleanTransitMainWallet: "0xdBe7fc9e9EE897B62d578Ed39943E3b5C5D62984",
momoPhoneProvided: "0923750968",
fromContract: "https://blockchair.com/polygon/address/0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45#app-gallery"
  }
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