
// context/useSponsorshipContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { connectWallet } from '../utils/wallet';

const SponsorshipContext = createContext();

export function SponsorshipProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected]   = useState(false);
  const [userRole, setUserRole]         = useState(null);   // 'brand' | 'influencer' | null
  const [loading, setLoading]           = useState(true);   // true until we've done initial checks

  // On mount: restore role & check existing wallet connection
  useEffect(() => {
    const savedRole = localStorage.getItem('creatorChainRole');
    if (savedRole) {
      setUserRole(savedRole);
    }

    const initialize = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            setIsConnected(true);
          }
        } catch (err) {
          console.error('Error checking wallet connection:', err);
        }
      }
      setLoading(false);
    };

    initialize();
  }, []);

  // Called to actively connect the wallet
  async function handleConnectWallet() {
    const result = await connectWallet();
    if (result.success) {
      setWalletAddress(result.address);
      setIsConnected(true);
    } else {
      alert(result.error);
    }
  }

  // Choose a role and persist it
  function selectRole(role) {
    setUserRole(role);
    localStorage.setItem('creatorChainRole', role);
  }

  // Log out completely
  function logout() {
    setWalletAddress('');
    setIsConnected(false);
    setUserRole(null);
    localStorage.removeItem('creatorChainRole');
  }

  return (
    <SponsorshipContext.Provider value={{
      walletAddress,
      isConnected,
      userRole,
      loading,
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
