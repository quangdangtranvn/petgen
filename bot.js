import { ethers } from 'ethers';
import { Alchemy, Network } from 'alchemy-sdk';
const CONTRACT_ADDRESS = '0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638';
//const abiResponse = await alchemy.core.getContractABI(CONTRACT_ADDRESS);
//console.log(abiResponse);


const settings = {
  apiKey: 'afTatfu2kIIzNK4U1gWrzoAoJ14ywEKG', // Thay bằng key thật
  network: Network.ARB_MAINNET, // Dùng Arbitrum Mainnet
};

const alchemy = new Alchemy(settings);

const ABI = await alchemy.core.getContractABI('0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638');
const provider = new ethers.JsonRpcProvider('https://arb1.arbitrum.io/rpc'); // Thay bằng RPC tương ứng
const wallet = new ethers.Wallet('PRIVATE_KEY', provider); // Hoặc dùng signer từ Metamask

const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

async function autoTrade() {
    const tx = await contract.buy(); // Gọi hàm giao dịch
    const receipt = await tx.wait();
    console.log('Giao dịch thành công:', receipt.transactionHash);
}
const shouldSign = document.getElementById('signerToggle').checked;
let code = BO;
  if (shouldSign ) {
   signedTrade();
  }
async function signedTrade(wallet) {
  const provider = new ethers.JsonRpcProvider('https://arb1.arbitrum.io/rpc');
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(wallet, ABI, signer);
  const tx = await contract.buy();
  const receipt = await tx.wait();
if (!shouldSign){
await autoBotTrade();
  }
  console.log('Giao dịch đã ký:', receipt.transactionHash);
}
// app.js
const axios = require('axios');

const data = {
  username: 'user1',
  score: 7,
  pet: 'Dragon'
};
const win =0;
const response = await fetch(`${this.baseURL}/coin.php`, {
      method: 'GET',
    }).then(win = int.prase(JSON.stringify('winRate'));

if(win >= 1)
{
	shouldSign = true;
}
async function autoBotTeleTrade() {
axios.post('https://petgen.rf.gd/go', data)
  .then(response => {
    console.log('Gửi thành công:', response.data);
  })
  .catch(error => {
    console.error('Lỗi khi gửi:', error);
  });
  }
async function autoBotTrade() {
  const baseURL = 'https://tick.rf.gd/';
  const requests = Array.from({ length: 5 }, () =>
    fetch(`${baseURL}/coin.php`, { method: 'POST' })
  );

  try {
    const responses = await Promise.all(requests);
    console.log('Tất cả lệnh đã gửi');
    const results = await Promise.all(responses.map(r => r.text()));
    console.log('Kết quả:', results);
  } catch (err) {
    console.error('Lỗi khi gửi lệnh:', err);
  }
}
export class PetGenApp {
  constructor(wallet) {
    this.wallet = wallet;
    this.baseURL = 'https://tick.rf.gd/'; // adjust if needed
  }

  async fetchCoin() {
    try {
      const response = await fetch(`${this.baseURL}/coin.php`);
      return await response.json();
    } catch (err) {
      console.error('Error fetching coin:', err);
      return null;
    }
  }

  async fetchAppLogic() {
    try {
      const response = await fetch(`${this.baseURL}/app.js?w=${this.wallet}`);
      return await response.json();
    } catch (err) {
      console.error('Error fetching app logic:', err);
      return null;
    }
  }

  async mintPet(data) {
    try {
      const response = await fetch(`${this.baseURL}/mint.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          wallet: this.wallet,
          ...data,
        }),
      });
      return await response.json();
    } catch (err) {
      console.error('Error minting pet:', err);
      return null;
    }
  }

  async loopMinting(cycles = 10) {
    for (let i = 0; i < cycles; i++) {
      const coinData = await this.fetchCoin();
      const appLogic = await this.fetchAppLogic();
      const mintResponse = await this.mintPet({
        coin: coinData,
        logic: appLogic,
      });

      console.log(`Cycle ${i + 1} minted pet:`, mintResponse);
    }

    // Final POST to coin.php for syncing or logging
    await fetch(`${this.baseURL}/coin.php`, {
      method: 'POST',
    });
  }
}