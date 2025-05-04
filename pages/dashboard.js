// pages/dashboard.js - New combined dashboard
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSponsorshipContext } from '../context/useSponsorshipContext';
import BrandView from '../components/Dashboard/BrandView';
import InfluencerView from '../components/Dashboard/CreatorView';

export default function Dashboard() {
  const { isConnected, userRole, connectWallet, selectRole } = useSponsorshipContext();
  const router = useRouter();

  // If user has a role and is connected, show their dashboard
  if (isConnected && userRole) {
    return (
      <div className="dashboard-container">
        {userRole === 'brand' ? <BrandView /> : <InfluencerView />}
      </div>
    );
  }

  // If user is connected but hasn't selected a role
  if (isConnected && !userRole) {
    return (
      <div className="role-selection-container">
        <h2>What best describes you?</h2>
        <div className="role-buttons">
          <button 
            className="role-button brand-button"
            onClick={() => selectRole('brand')}
          >
            I'm a Brand
          </button>
          <button 
            className="role-button influencer-button"
            onClick={() => selectRole('influencer')}
          >
            I'm an Influencer
          </button>
        </div>
      </div>
    );
  }

  // If user is not connected, show connect wallet button
  return (
    <div className="connect-wallet-container">
      <h2>Welcome to CreatorChain</h2>
      <p>Connect your wallet to get started</p>
      <button 
        className="connect-wallet-button"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </div>
  );
}