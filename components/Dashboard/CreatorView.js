// components/Dashboard/creatorview.js
import { useState } from 'react';
import { useSponsorshipContext } from '../../context/useSponsorshipContext';
import Link from 'next/link';
import HomeTemplate from './HomeTemplate';

export default function InfluencerView() {
  const { walletAddress, logout } = useSponsorshipContext();
  const [availableDeals, setAvailableDeals] = useState([]);
  const [myDeals, setMyDeals] = useState([]);
  // In a real implementation, you would fetch deals from the blockchain
  
  return (
    <HomeTemplate>
      <div className="influencer-dashboard">
        <div className="dashboard-header">
          <h1>Influencer Dashboard</h1>
          <div className="wallet-info">
            <span className="wallet-address">{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
            <button onClick={logout} className="logout-button">Disconnect</button>
          </div>
        </div>
        
        <div className="dashboard-section">
          <h2>Available Sponsorship Opportunities</h2>
          {availableDeals.length > 0 ? (
            <div className="deals-list">
              {availableDeals.map(deal => (
                <div key={deal.id} className="deal-card">
                  <h3>{deal.title}</h3>
                  <p>Brand: {deal.brand}</p>
                  <p>Payment: {deal.payment} ETH</p>
                  <Link href={`/deals/${deal.id}`}>View Details</Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No available deals at the moment. Check back later!</p>
          )}
        </div>
        
        <div className="dashboard-section">
          <h2>Your Active Deals</h2>
          {myDeals.length > 0 ? (
            <div className="deals-list">
              {myDeals.map(deal => (
                <div key={deal.id} className="deal-card">
                  <h3>{deal.title}</h3>
                  <p>Status: {deal.status}</p>
                  <Link href={`/deals/${deal.id}`}>View Details</Link>
                </div>
              ))}
            </div>
          ) : (
            <p>You haven't accepted any deals yet.</p>
          )}
        </div>
      </div>
    </HomeTemplate>
  );
}