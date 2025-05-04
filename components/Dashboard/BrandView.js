// // components/Dashboard/BrandView.js
// import { useState } from 'react';
// import { useSponsorshipContext } from '../../context/useSponsorshipContext';
// import HomeTemplate from './HomeTemplate';
// import Link from 'next/link';
// import CreateAgreementButton from '../CreateAgreementButton';

// export default function BrandView() {
//   const { walletAddress, logout } = useSponsorshipContext();
//   const [activeDeals, setActiveDeals] = useState([]);
//   // In a real implementation, you would fetch the brand's deals from the blockchain
  
//   return (
//     <HomeTemplate>
//       <div className="brand-dashboard">
//         <div className="dashboard-header">
//           <h1>Brand Dashboard</h1>
//           <div className="wallet-info">
//             <span className="wallet-address">{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
//             <button onClick={logout} className="logout-button">Disconnect</button>
//           </div>
//         </div>
        
//         <div className="dashboard-actions">
//           <Link href="/deals/create">
//             <button className="create-deal-button">Create New Deal</button>
//           </Link>
//         </div>
        
//         <div className="dashboard-section">
//           <h2>Your Active Deals</h2>
//           {activeDeals.length > 0 ? (
//             <div className="deals-list">
//               {activeDeals.map(deal => (
//                 <div key={deal.id} className="deal-card">
//                   <h3>{deal.title}</h3>
//                   <p>Status: {deal.status}</p>
//                   <Link href={`/deals/${deal.id}`}>View Details</Link>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>You don't have any active deals. Create your first deal to get started!</p>
//           )}
//         </div>
//       </div>
//     </HomeTemplate>
//   );
// }


// // components/Dashboard/BrandView.js
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Link from 'next/link';
// import { useSponsorshipContext } from '../../context/useSponsorshipContext';
// import HomeTemplate from './HomeTemplate';
// import CreateAgreementButton from '../CreateAgreementButton';

// export default function BrandView() {
//   const { walletAddress, logout } = useSponsorshipContext();
//   const [activeDeals, setActiveDeals] = useState([
//     // Sample data - remove in production
//     {
//       id: '1',
//       title: 'Summer Fitness Campaign',
//       status: 'Active',
//       influencer: 'FitWithJamie',
//       budget: '2,500 USD',
//       deadline: 'June 15, 2025'
//     },
//     {
//       id: '2',
//       title: 'Tech Product Review',
//       status: 'Pending',
//       influencer: 'TechGuru',
//       budget: '3,200 USD',
//       deadline: 'May 30, 2025'
//     }
//   ]);
  
//   return (
//     <HomeTemplate>
//       <DashboardContainer>
//         <DashboardHeader>
//           <div>
//             <DashboardTitle>
//               Brand <GradientText>Dashboard</GradientText>
//             </DashboardTitle>
//             <DashboardSubtitle>
//               Manage your creator partnerships and campaigns
//             </DashboardSubtitle>
//           </div>
//           <WalletInfoContainer>
//             <WalletAddress>
//               {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
//             </WalletAddress>
//             <DisconnectButton onClick={logout}>
//               Disconnect
//             </DisconnectButton>
//           </WalletInfoContainer>
//         </DashboardHeader>
        
//         <ActionsContainer>
//           <Link href="/deals/create" passHref>
//             <CreateDealButton>
//               Create New Deal
//             </CreateDealButton>
//           </Link>
//           <Link href="/explore" passHref>
//             <FindCreatorsButton>
//               Find Creators
//             </FindCreatorsButton>
//           </Link>
//         </ActionsContainer>
        
//         <DashboardSection>
//           <SectionHeader>
//             <SectionTitle>Your Active Deals</SectionTitle>
//           </SectionHeader>
          
//           {activeDeals.length > 0 ? (
//             <DealsGrid>
//               {activeDeals.map(deal => (
//                 <DealCard key={deal.id}>
//                   <DealHeader>
//                     <DealTitle>{deal.title}</DealTitle>
//                     <DealStatus status={deal.status}>{deal.status}</DealStatus>
//                   </DealHeader>
//                   <DealInfo>
//                     <DealInfoItem>
//                       <DealInfoLabel>Creator:</DealInfoLabel>
//                       <DealInfoValue>{deal.influencer}</DealInfoValue>
//                     </DealInfoItem>
//                     <DealInfoItem>
//                       <DealInfoLabel>Budget:</DealInfoLabel>
//                       <DealInfoValue>{deal.budget}</DealInfoValue>
//                     </DealInfoItem>
//                     <DealInfoItem>
//                       <DealInfoLabel>Deadline:</DealInfoLabel>
//                       <DealInfoValue>{deal.deadline}</DealInfoValue>
//                     </DealInfoItem>
//                   </DealInfo>
//                   <Link href={`/deals/${deal.id}`} passHref>
//                     <ViewDetailsButton>View Details</ViewDetailsButton>
//                   </Link>
//                 </DealCard>
//               ))}
//             </DealsGrid>
//           ) : (
//             <EmptyStateContainer>
//               <EmptyStateText>
//                 You don't have any active deals yet. Create your first deal to get started!
//               </EmptyStateText>
//               <Link href="/deals/create" passHref>
//                 <CreateFirstDealButton>
//                   Create Your First Deal
//                 </CreateFirstDealButton>
//               </Link>
//             </EmptyStateContainer>
//           )}
//         </DashboardSection>
        
//         <DashboardSection>
//           <SectionHeader>
//             <SectionTitle>Recent Activity</SectionTitle>
//           </SectionHeader>
//           <ActivityContainer>
//             <ActivityItem>
//               <ActivityIcon>📝</ActivityIcon>
//               <ActivityContent>
//                 <ActivityTitle>Deal proposal sent to TechGuru</ActivityTitle>
//                 <ActivityTime>2 hours ago</ActivityTime>
//               </ActivityContent>
//             </ActivityItem>
//             <ActivityItem>
//               <ActivityIcon>✅</ActivityIcon>
//               <ActivityContent>
//                 <ActivityTitle>FitWithJamie accepted your deal</ActivityTitle>
//                 <ActivityTime>Yesterday</ActivityTime>
//               </ActivityContent>
//             </ActivityItem>
//             <ActivityItem>
//               <ActivityIcon>💰</ActivityIcon>
//               <ActivityContent>
//                 <ActivityTitle>Payment transferred to CookingWithAlex</ActivityTitle>
//                 <ActivityTime>3 days ago</ActivityTime>
//               </ActivityContent>
//             </ActivityItem>
//           </ActivityContainer>
//         </DashboardSection>
//       </DashboardContainer>
//     </HomeTemplate>
//   );
// }

// // Styled components matching your site's theme
// const DashboardContainer = styled.div`
//   width: 100%;
// `;

// const DashboardHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-bottom: 2rem;
  
//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

// const DashboardTitle = styled.h1`
//   font-size: 2.25rem;
//   font-weight: 700;
//   margin: 0;
// `;

// const DashboardSubtitle = styled.p`
//   color: #a0aec0;
//   margin-top: 0.5rem;
//   font-size: 1rem;
// `;

// const GradientText = styled.span`
//   background: linear-gradient(to right, #63b3ed, #805ad5);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const WalletInfoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   background-color: #1a202c;
//   padding: 0.75rem 1rem;
//   border-radius: 0.5rem;
// `;

// const WalletAddress = styled.span`
//   font-family: monospace;
//   color: #a0aec0;
// `;

// const DisconnectButton = styled.button`
//   background: none;
//   border: 1px solid #4a5568;
//   color: #a0aec0;
//   padding: 0.5rem 0.75rem;
//   border-radius: 0.25rem;
//   cursor: pointer;
//   font-size: 0.875rem;
//   transition: all 0.2s ease;
  
//   &:hover {
//     background-color: #2d3748;
//     color: #fff;
//   }
// `;

// const ActionsContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 2rem;
  
//   @media (max-width: 640px) {
//     flex-direction: column;
//   }
// `;

// const CreateDealButton = styled.a`
//   display: inline-block;
//   background: linear-gradient(to right, #3182ce, #2b6cb0);
//   color: white;
//   padding: 0.75rem 1.5rem;
//   border-radius: 0.5rem;
//   font-weight: 500;
//   cursor: pointer;
//   text-decoration: none;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//   }
// `;

// const FindCreatorsButton = styled.a`
//   display: inline-block;
//   background: #1a202c;
//   color: white;
//   padding: 0.75rem 1.5rem;
//   border-radius: 0.5rem;
//   font-weight: 500;
//   cursor: pointer;
//   border: 1px solid #4a5568;
//   text-decoration: none;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//   }
// `;

// const DashboardSection = styled.div`
//   background-color: #1a202c;
//   border-radius: 1rem;
//   padding: 1.5rem;
//   margin-bottom: 2rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const SectionHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1.5rem;
// `;

// const SectionTitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: 600;
//   margin: 0;
// `;

// const DealsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 1.5rem;
// `;

// const DealCard = styled.div`
//   background-color: #2d3748;
//   border-radius: 0.75rem;
//   overflow: hidden;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
//   }
// `;

// const DealHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
//   border-bottom: 1px solid #4a5568;
// `;

// const DealTitle = styled.h3`
//   font-size: 1.125rem;
//   font-weight: 600;
//   margin: 0;
// `;

// const DealStatus = styled.span`
//   padding: 0.25rem 0.75rem;
//   border-radius: 9999px;
//   font-size: 0.75rem;
//   font-weight: 500;
//   background-color: ${props => 
//     props.status === 'Active' ? 'rgba(72, 187, 120, 0.2)' : 
//     props.status === 'Pending' ? 'rgba(237, 137, 54, 0.2)' : 
//     'rgba(113, 128, 150, 0.2)'};
//   color: ${props => 
//     props.status === 'Active' ? '#48bb78' : 
//     props.status === 'Pending' ? '#ed8936' : 
//     '#a0aec0'};
// `;

// const DealInfo = styled.div`
//   padding: 1rem;
// `;

// const DealInfoItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 0.5rem;
  
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const DealInfoLabel = styled.span`
//   color: #a0aec0;
//   font-size: 0.875rem;
// `;

// const DealInfoValue = styled.span`
//   font-size: 0.875rem;
// `;

// const ViewDetailsButton = styled.a`
//   display: block;
//   text-align: center;
//   background-color: #2b6cb0;
//   color: white;
//   padding: 0.75rem;
//   text-decoration: none;
//   font-size: 0.875rem;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background-color: #2c5282;
//   }
// `;

// const EmptyStateContainer = styled.div`
//   text-align: center;
//   padding: 3rem 1rem;
// `;

// const EmptyStateText = styled.p`
//   color: #a0aec0;
//   margin-bottom: 1.5rem;
// `;

// const CreateFirstDealButton = styled.a`
//   display: inline-block;
//   background: linear-gradient(to right, #3182ce, #2b6cb0);
//   color: white;
//   padding: 0.75rem 1.5rem;
//   border-radius: 0.5rem;
//   font-weight: 500;
//   cursor: pointer;
//   text-decoration: none;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//   }
// `;

// const ActivityContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
// `;

// const ActivityItem = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0.75rem;
//   background-color: #2d3748;
//   border-radius: 0.5rem;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background-color: #4a5568;
//   }
// `;

// const ActivityIcon = styled.div`
//   margin-right: 1rem;
//   font-size: 1.25rem;
// `;

// const ActivityContent = styled.div`
//   flex: 1;
// `;

// const ActivityTitle = styled.div`
//   font-size: 0.875rem;
// `;

// const ActivityTime = styled.div`
//   font-size: 0.75rem;
//   color: #a0aec0;
//   margin-top: 0.25rem;
// `;










import React from 'react';
import styled from 'styled-components';

const BrandView = () => {
  return (
    <Container>
      <Header>
        <Title>Brand Dashboard</Title>
        <Subtitle>Manage your creator partnerships</Subtitle>
      </Header>
      
      <Section>
        <SectionTitle>Active Campaigns</SectionTitle>
        <EmptyState>
          <EmptyStateText>You don't have any active campaigns yet.</EmptyStateText>
          <Button>Create Campaign</Button>
        </EmptyState>
      </Section>
      
      <Section>
        <SectionTitle>Creator Partnerships</SectionTitle>
        <EmptyState>
          <EmptyStateText>You haven't partnered with any creators yet.</EmptyStateText>
          <Button>Find Creators</Button>
        </EmptyState>
      </Section>
    </Container>
  );
};

export default BrandView;

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #a0aec0;
`;

const Section = styled.div`
  background-color: #1a202c;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const EmptyStateText = styled.p`
  color: #a0aec0;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #3182ce;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #2b6cb0;
  }
`;