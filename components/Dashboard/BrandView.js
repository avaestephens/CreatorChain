// components/Dashboard/BrandView.js
import { useState } from 'react';
import { useSponsorshipContext } from '../../context/useSponsorshipContext';
import HomeTemplate from './HomeTemplate';
import Link from 'next/link';
import CreateAgreementButton from '../CreateAgreementButton';

export default function BrandView() {
  const { walletAddress, logout } = useSponsorshipContext();
  const [activeDeals, setActiveDeals] = useState([]);
  // In a real implementation, you would fetch the brand's deals from the blockchain
  
  return (
    <HomeTemplate>
      <div className="brand-dashboard">
        <div className="dashboard-header">
          <h1>Brand Dashboard</h1>
          <div className="wallet-info">
            <span className="wallet-address">{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
            <button onClick={logout} className="logout-button">Disconnect</button>
          </div>
        </div>
        
        <div className="dashboard-actions">
          <Link href="/deals/create">
            <button className="create-deal-button">Create New Deal</button>
          </Link>
        </div>
        
        <div className="dashboard-section">
          <h2>Your Active Deals</h2>
          {activeDeals.length > 0 ? (
            <div className="deals-list">
              {activeDeals.map(deal => (
                <div key={deal.id} className="deal-card">
                  <h3>{deal.title}</h3>
                  <p>Status: {deal.status}</p>
                  <Link href={`/deals/${deal.id}`}>View Details</Link>
                </div>
              ))}
            </div>
          ) : (
            <p>You don't have any active deals. Create your first deal to get started!</p>
          )}
        </div>
      </div>
    </HomeTemplate>
  );
}
