setInterval(() => {
  fetch("https://cloud.quangbluekie.io/swap-chain")
    .then(res => res.json())
    .then(data => {
      document.getElementById("swapResult").textContent =
        `⚡ Swap realtime: ${data.status}`;
    });
}, 1); // mỗi mili giây