async function connectWallet() {
  if (window.ethereum) { // Check if MetaMask is installed
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); // Request account access
      return accounts[0];
    } catch (error) {
      console.error("User denied account access"); // User denied account access...
    }
  } else {
    console.error("Please install MetaMask!"); // If MetaMask isn't installed
  }
}
