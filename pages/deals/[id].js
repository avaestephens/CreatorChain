// // pages/deals/[id].js - Dynamic route for deal details
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { useSponsorshipContext } from '../../context/useSponsorshipContext';
// import HomeTemplate from '../../components/Dashboard/HomeTemplate';

// export default function DealDetails() {
//   const router = useRouter();
//   const { id } = router.query;
//   const { isConnected, userRole, walletAddress } = useSponsorshipContext();
//   const [dealData, setDealData] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   useEffect(() => {
//     // Redirect if not connected
//     if (!isConnected) {
//       router.push('/dashboard');
//       return;
//     }
    
//     // If we have an ID, fetch the deal
//     if (id) {
//       // In a real implementation, you would fetch from blockchain
//       // Example mock data
//       setTimeout(() => {
//         setDealData({
//           id,
//           title: "Example Deal",
//           description: "This is an example sponsorship deal",
//           payment: "0.5 ETH",
//           deadline: "2025-06-01",
//           status: "Open",
//           brand: "0x1234...5678",
//           influencer: null
//         });
//         setLoading(false);
//       }, 500);
//     }
//   }, [isConnected, id, router]);
  
//   if (!isConnected || loading) {
//     return <div>Loading...</div>;
//   }
  
//   if (!dealData) {
//     return <div>Deal not found</div>;
//   }
  
//   const isBrand = userRole === 'brand' && dealData.brand === walletAddress;
//   const isInfluencer = userRole === 'influencer';
//   const canAccept = isInfluencer && dealData.status === 'Open';
  
//   return (
//     <HomeTemplate>
//       <div className="deal-details-page">
//         <h1>{dealData.title}</h1>
        
//         <div className="deal-info">
//           <div className="info-item">
//             <span className="label">Status:</span>
//             <span className={`status status-${dealData.status.toLowerCase()}`}>{dealData.status}</span>
//           </div>
          
//           <div className="info-item">
//             <span className="label">Payment:</span>
//             <span>{dealData.payment}</span>
//           </div>
          
//           <div className="info-item">
//             <span className="label">Deadline:</span>
//             <span>{dealData.deadline}</span>
//           </div>
//         </div>
        
//         <div className="deal-description">
//           <h2>Description</h2>
//           <p>{dealData.description}</p>
//         </div>
        
//         {canAccept && (
//           <button className="accept-deal-button">
//             Accept This Deal
//           </button>
//         )}
        
//         {isBrand && (
//           <div className="brand-actions">
//             <button className="cancel-deal-button">
//               Cancel Deal
//             </button>
//           </div>
//         )}
//       </div>
//     </HomeTemplate>
//   );
// }



// pages/deals/[id].js - Server-side rendered version
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSponsorshipContext } from '../../context/useSponsorshipContext';
import HomeTemplate from '../../components/Dashboard/HomeTemplate';

// Replace getStaticPaths and getStaticProps with getServerSideProps
export async function getServerSideProps(context) {
  const { id } = context.params;
  
  // In a production app, you can fetch initial blockchain data here
  
  return {
    props: {
      dealId: id,
    },
  };
}

export default function DealDetails({ dealId }) {
  const router = useRouter();
  const { isConnected, userRole, walletAddress } = useSponsorshipContext();
  const [dealData, setDealData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Redirect if not connected
    if (!isConnected) {
      router.push('/dashboard');
      return;
    }
    
    // If we have an ID, fetch the deal
    if (dealId) {
      // In a real implementation, you would fetch from blockchain
      // Example mock data
      setTimeout(() => {
        setDealData({
          id: dealId,
          title: "Example Deal",
          description: "This is an example sponsorship deal",
          payment: "0.5 ETH",
          deadline: "2025-06-01",
          status: "Open",
          brand: "0x1234...5678",
          influencer: null
        });
        setLoading(false);
      }, 500);
    }
  }, [isConnected, dealId, router]);
  
  if (!isConnected || loading) {
    return <div>Loading...</div>;
  }
  
  if (!dealData) {
    return <div>Deal not found</div>;
  }
  
  const isBrand = userRole === 'brand' && dealData.brand === walletAddress;
  const isInfluencer = userRole === 'influencer';
  const canAccept = isInfluencer && dealData.status === 'Open';
  
  return (
      <div className="deal-details-page">
        <h1>{dealData.title}</h1>
        
        <div className="deal-info">
          <div className="info-item">
            <span className="label">Status:</span>
            <span className={`status status-${dealData.status.toLowerCase()}`}>{dealData.status}</span>
          </div>
          
          <div className="info-item">
            <span className="label">Payment:</span>
            <span>{dealData.payment}</span>
          </div>
          
          <div className="info-item">
            <span className="label">Deadline:</span>
            <span>{dealData.deadline}</span>
          </div>
        </div>
        
        <div className="deal-description">
          <h2>Description</h2>
          <p>{dealData.description}</p>
        </div>
        
        {canAccept && (
          <button className="accept-deal-button">
            Accept This Deal
          </button>
        )}
        
        {isBrand && (
          <div className="brand-actions">
            <button className="cancel-deal-button">
              Cancel Deal
            </button>
          </div>
        )}
      </div>
  );
}