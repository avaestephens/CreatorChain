// utils/wallet.js
export async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return { success: true, address: accounts[0] };
      } catch (error) {
        console.error("Error connecting wallet:", error);
        return { success: false, error };
      }
    } else {
      return { success: false, error: "Please install MetaMask to use this app" };
    }
  }
  
