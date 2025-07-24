const connectWalletBtn = document.getElementById('connectWallet');
const walletAddressP = document.getElementById('walletAddress');

connectWalletBtn.addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      walletAddressP.textContent = `🪪 Connected: ${address.slice(0, 6)}...${address.slice(-4)}`;
      connectWalletBtn.textContent = 'Wallet Connected';
      connectWalletBtn.disabled = true;
    } catch (err) {
      walletAddressP.textContent = '❌ Wallet connection rejected';
    }
  } else {
    walletAddressP.textContent = '❌ MetaMask not detected';
  }
});
