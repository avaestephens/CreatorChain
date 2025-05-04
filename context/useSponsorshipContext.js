import { createContext, useContext, useState, useEffect } from 'react';
import { connectWallet } from '../utils/wallet';

const SponsorshipContext = createContext();

export function SponsorshipProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'brand' or 'influencer'

  async function handleConnectWallet() {
    const result = await connectWallet();
    if (result.success) {
      setWalletAddress(result.address);
      setIsConnected(true);
      
      // Check if user has previously selected a role (could store in localStorage)
      const savedRole = localStorage.getItem('creatorChainRole');
      if (savedRole) {
        setUserRole(savedRole);
      }
    } else {
      alert(result.error);
    }
  }

  function selectRole(role) {
    setUserRole(role);
    localStorage.setItem('creatorChainRole', role);
  }

  function logout() {
    setWalletAddress('');
    setIsConnected(false);
    setUserRole(null);
  }

  useEffect(() => {
    // Check if wallet is already connected (MetaMask remembers connections)
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            setIsConnected(true);
            
            // Check if user has previously selected a role
            const savedRole = localStorage.getItem('creatorChainRole');
            if (savedRole) {
              setUserRole(savedRole);
            }
          }
        } catch (error) {
          console.error("Error checking connection:", error);
        }
      }
    };
    
    checkConnection();
  }, []);

  return (
    <SponsorshipContext.Provider value={{
      walletAddress,
      isConnected,
      userRole,
      connectWallet: handleConnectWallet,
      selectRole,
      logout
    }}>
      {children}
    </SponsorshipContext.Provider>
  );
}

export function useSponsorshipContext() {
  return useContext(SponsorshipContext);
}