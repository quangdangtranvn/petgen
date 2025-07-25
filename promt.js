export class PromptAdapter {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async generatePrompt(petType, attributes) {
    const prompt = `Create a ${petType} with features: ${attributes.join(", ")}.`;
    const res = await fetch("https://api.quangbluekie.io/gen-prompt", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": this.apiKey },
      body: JSON.stringify({ prompt })
    });
    return res.json();
  }
}
import { ethers } from "ethers";

export class ContractAdapter {
  constructor(contractAddress, abi, signer) {
    this.contract = new ethers.Contract(contractAddress, abi, signer);
  }

  async mintPetNFT(promptId, metadataURI) {
    const tx = await this.contract.mint(promptId, metadataURI);
    return tx.wait();
  }

  async getMintedPets(walletAddress) {
    return await this.contract.getPetsByOwner(walletAddress);
  }
}
export class CDNAdapter {
  constructor(baseUrl = "https://cdn.quangbluekie.io/assets") {
    this.baseUrl = baseUrl;
  }

  getPetImagePath(petType, version = "v1") {
    return `${this.baseUrl}/${version}/images/${petType}.webp`;
  }

  async fetchGallery(petType) {
    const res = await fetch(`${this.baseUrl}/gallery/${petType}.json`);
    return await res.json();
  }
}