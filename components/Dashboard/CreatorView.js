// // components/Dashboard/creatorview.js
// import { useState } from 'react';
// import { useSponsorshipContext } from '../../context/useSponsorshipContext';
// import Link from 'next/link';
// import HomeTemplate from './HomeTemplate';

// export default function InfluencerView() {
//   const { walletAddress, logout } = useSponsorshipContext();
//   const [availableDeals, setAvailableDeals] = useState([]);
//   const [myDeals, setMyDeals] = useState([]);
//   // In a real implementation, you would fetch deals from the blockchain
  
//   return (
//     <HomeTemplate>
//       <div className="influencer-dashboard">
//         <div className="dashboard-header">
//           <h1>Influencer Dashboard</h1>
//           <div className="wallet-info">
//             <span className="wallet-address">{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
//             <button onClick={logout} className="logout-button">Disconnect</button>
//           </div>
//         </div>
        
//         <div className="dashboard-section">
//           <h2>Available Sponsorship Opportunities</h2>
//           {availableDeals.length > 0 ? (
//             <div className="deals-list">
//               {availableDeals.map(deal => (
//                 <div key={deal.id} className="deal-card">
//                   <h3>{deal.title}</h3>
//                   <p>Brand: {deal.brand}</p>
//                   <p>Payment: {deal.payment} ETH</p>
//                   <Link href={`/deals/${deal.id}`}>View Details</Link>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No available deals at the moment. Check back later!</p>
//           )}
//         </div>
        
//         <div className="dashboard-section">
//           <h2>Your Active Deals</h2>
//           {myDeals.length > 0 ? (
//             <div className="deals-list">
//               {myDeals.map(deal => (
//                 <div key={deal.id} className="deal-card">
//                   <h3>{deal.title}</h3>
//                   <p>Status: {deal.status}</p>
//                   <Link href={`/deals/${deal.id}`}>View Details</Link>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>You haven't accepted any deals yet.</p>
//           )}
//         </div>
//       </div>
//     </HomeTemplate>
//   );
// }



// // components/Dashboard/CreatorView.js
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Link from 'next/link';
// import { useSponsorshipContext } from '../../context/useSponsorshipContext';
// import HomeTemplate from './HomeTemplate';

// export default function CreatorView() {
//   const { walletAddress, logout } = useSponsorshipContext();
  
//   // Sample data - remove in production
//   const [availableDeals, setAvailableDeals] = useState([
//     {
//       id: '1',
//       title: 'Summer Fashion Promotion',
//       brand: 'StyleTrend',
//       payment: '1.5',
//       requirements: '2 Instagram posts, 1 TikTok video',
//       deadline: 'June 30, 2025'
//     },
//     {
//       id: '2',
//       title: 'Gaming Headset Review',
//       brand: 'AudioTech',
//       payment: '2.2',
//       requirements: '1 YouTube review, 3 Instagram stories',
//       deadline: 'May 25, 2025'
//     },
//     {
//       id: '3',
//       title: 'Fitness App Promotion',
//       brand: 'FitLife',
//       payment: '1.8',
//       requirements: '4 Instagram posts over 30 days',
//       deadline: 'July 15, 2025'
//     }
//   ]);
  
//   const [myDeals, setMyDeals] = useState([
//     {
//       id: '4',
//       title: 'Beauty Product Review',
//       brand: 'GlowUp',
//       payment: '1.2',
//       status: 'In Progress',
//       deadline: 'May 20, 2025',
//       completed: '1/3 deliverables'
//     }
//   ]);
  
//   return (
//     <HomeTemplate>
//       <DashboardContainer>
//         <DashboardHeader>
//           <div>
//             <DashboardTitle>
//               Creator <GradientText>Dashboard</GradientText>
//             </DashboardTitle>
//             <DashboardSubtitle>
//               Manage your brand partnerships and sponsored content
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
        
//         <StatsContainer>
//           <StatCard>
//             <StatValue>3</StatValue>
//             <StatLabel>Available Opportunities</StatLabel>
//           </StatCard>
//           <StatCard>
//             <StatValue>1</StatValue>
//             <StatLabel>Active Campaigns</StatLabel>
//           </StatCard>
//           <StatCard>
//             <StatValue>1.2 ETH</StatValue>
//             <StatLabel>Current Earnings</StatLabel>
//           </StatCard>
//           <StatCard>
//             <StatValue>5.8 ETH</StatValue>
//             <StatLabel>Total Earned</StatLabel>
//           </StatCard>
//         </StatsContainer>
        
//         <DashboardSection>
//           <SectionHeader>
//             <SectionTitle>Available Opportunities</SectionTitle>
//             <FilterButton>
//               Filter <span>▼</span>
//             </FilterButton>
//           </SectionHeader>
          
//           {availableDeals.length > 0 ? (
//             <DealsGrid>
//               {availableDeals.map(deal => (
//                 <DealCard key={deal.id}>
//                   <DealHeader>
//                     <DealTitle>{deal.title}</DealTitle>
//                     <PaymentBadge>{deal.payment} ETH</PaymentBadge>
//                   </DealHeader>
//                   <DealInfo>
//                     <DealInfoItem>
//                       <DealInfoLabel>Brand:</DealInfoLabel>
//                       <DealInfoValue>{deal.brand}</DealInfoValue>
//                     </DealInfoItem>
//                     <DealInfoItem>
//                       <DealInfoLabel>Requirements:</DealInfoLabel>
//                       <DealInfoValue>{deal.requirements}</DealInfoValue>
//                     </DealInfoItem>
//                     <DealInfoItem>
//                       <DealInfoLabel>Deadline:</DealInfoLabel>
//                       <DealInfoValue>{deal.deadline}</DealInfoValue>
//                     </DealInfoItem>
//                   </DealInfo>
//                   <DealActions>
//                     <Link href={`/deals/${deal.id}`} passHref>
//                       <ViewDetailsButton>View Details</ViewDetailsButton>
//                     </Link>
//                     <ApplyButton>Apply Now</ApplyButton>
//                   </DealActions>
//                 </DealCard>
//               ))}
//             </DealsGrid>
//           ) : (
//             <EmptyStateContainer>
//               <EmptyStateText>
//                 No available deals at the moment. Check back later!
//               </EmptyStateText>
//             </EmptyStateContainer>
//           )}
//         </DashboardSection>
        
//         <DashboardSection>
//           <SectionHeader>
//             <SectionTitle>Your Active Campaigns</SectionTitle>
//           </SectionHeader>
          
//           {myDeals.length > 0 ? (
//             <DealsGrid>
//               {myDeals.map(deal => (
//                 <ActiveDealCard key={deal.id}>
//                   <DealHeader>
//                     <DealTitle>{deal.title}</DealTitle>
//                     <DealStatus status={deal.status}>{deal.status}</DealStatus>
//                   </DealHeader>
//                   <DealInfo>
//                     <DealInfoItem>
//                       <DealInfoLabel>Brand:</DealInfoLabel>
//                       <DealInfoValue>{deal.brand}</DealInfoValue>
//                     </DealInfoItem>
//                     <DealInfoItem>
//                       <DealInfoLabel>Payment:</DealInfoLabel>
//                       <DealInfoValue>{deal.payment} ETH</DealInfoValue>
//                     </DealInfoItem>
//                     <DealInfoItem>
//                       <DealInfoLabel>Deadline:</DealInfoLabel>
//                       <DealInfoValue>{deal.deadline}</DealInfoValue>
//                     </DealInfoItem>
//                     <DealInfoItem>
//                       <DealInfoLabel>Progress:</DealInfoLabel>
//                       <DealInfoValue>{deal.completed}</DealInfoValue>
//                     </DealInfoItem>
//                   </DealInfo>
//                   <ProgressBarContainer>
//                     <ProgressBar width="33%" />
//                   </ProgressBarContainer>
//                   <DealActions>
//                     <Link href={`/deals/${deal.id}`} passHref>
//                       <ViewDetailsButton>Manage Campaign</ViewDetailsButton>
//                     </Link>
//                     <SubmitDeliverableButton>Submit Deliverable</SubmitDeliverableButton>
//                   </DealActions>
//                 </ActiveDealCard>
//               ))}
//             </DealsGrid>
//           ) : (
//             <EmptyStateContainer>
//               <EmptyStateText>
//                 You haven't accepted any deals yet.
//               </EmptyStateText>
//               <BrowseDealsButton href="/explore">
//                 Browse Available Deals
//               </BrowseDealsButton>
//             </EmptyStateContainer>
//           )}
//         </DashboardSection>
        
//         <DashboardSection>
//           <SectionHeader>
//             <SectionTitle>Recent Activity</SectionTitle>
//           </SectionHeader>
//           <ActivityContainer>
//             <ActivityItem>
//               <ActivityIcon>📋</ActivityIcon>
//               <ActivityContent>
//                 <ActivityTitle>New deal opportunity from FitLife</ActivityTitle>
//                 <ActivityTime>1 hour ago</ActivityTime>
//               </ActivityContent>
//             </ActivityItem>
//             <ActivityItem>
//               <ActivityIcon>✅</ActivityIcon>
//               <ActivityContent>
//                 <ActivityTitle>Deliverable approved by GlowUp</ActivityTitle>
//                 <ActivityTime>Yesterday</ActivityTime>
//               </ActivityContent>
//             </ActivityItem>
//             <ActivityItem>
//               <ActivityIcon>💰</ActivityIcon>
//               <ActivityContent>
//                 <ActivityTitle>Payment of 1.2 ETH received</ActivityTitle>
//                 <ActivityTime>2 days ago</ActivityTime>
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

// const StatsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 1rem;
//   margin-bottom: 2rem;
// `;

// const StatCard = styled.div`
//   background-color: #1a202c;
//   border-radius: 0.75rem;
//   padding: 1.5rem;
//   text-align: center;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
//   }
// `;

// const StatValue = styled.div`
//   font-size: 1.75rem;
//   font-weight: 700;
//   background: linear-gradient(to right, #63b3ed, #805ad5);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin-bottom: 0.5rem;
// `;

// const StatLabel = styled.div`
//   color: #a0aec0;
//   font-size: 0.875rem;
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

// const FilterButton = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   background-color: #2d3748;
//   border: none;
//   color: #a0aec0;
//   padding: 0.5rem 1rem;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   font-size: 0.875rem;
  
//   &:hover {
//     background-color: #4a5568;
//     color: #fff;
//   }
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

// const ActiveDealCard = styled(DealCard)`
//   border-left: 4px solid #4299e1;
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

// const PaymentBadge = styled.span`
//   padding: 0.25rem 0.75rem;
//   border-radius: 9999px;
//   font-size: 0.875rem;
//   font-weight: 500;
//   background: linear-gradient(to right, #3182ce, #2b6cb0);
//   color: white;
// `;

// const DealStatus = styled.span`
//   padding: 0.25rem 0.75rem;
//   border-radius: 9999px;
//   font-size: 0.75rem;
//   font-weight: 500;
//   background-color: ${props => 
//     props.status === 'Active' || props.status === 'In Progress' ? 'rgba(72, 187, 120, 0.2)' : 
//     props.status === 'Pending' ? 'rgba(237, 137, 54, 0.2)' : 
//     'rgba(113, 128, 150, 0.2)'};
//   color: ${props => 
//     props.status === 'Active' || props.status === 'In Progress' ? '#48bb78' : 
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

// const ProgressBarContainer = styled.div`
//   height: 0.5rem;
//   background-color: #4a5568;
//   margin: 0 1rem 1rem 1rem;
//   border-radius: 9999px;
//   overflow: hidden;
// `;

// const ProgressBar = styled.div`
//   height: 100%;
//   width: ${props => props.width || '0%'};
//   background: linear-gradient(to right, #3182ce, #2b6cb0);
//   border-radius: 9999px;
// `;

// const DealActions = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 0.5rem;
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

// const ApplyButton = styled.button`
//   display: block;
//   width: 100%;
//   text-align: center;
//   background: linear-gradient(to right, #4c51bf, #6b46c1);
//   color: white;
//   padding: 0.75rem;
//   border: none;
//   font-size: 0.875rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background: linear-gradient(to right, #434190, #553c9a);
//   }
// `;

// const SubmitDeliverableButton = styled(ApplyButton)`
//   background: linear-gradient(to right, #48bb78, #38a169);
  
//   &:hover {
//     background: linear-gradient(to right, #38a169, #2f855a);
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

// const BrowseDealsButton = styled.a`
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




// import React from 'react';
// import styled from 'styled-components';

// const CreatorView = () => {
//   return (
//     <Container>
//       <Header>
//         <Title>Creator Dashboard</Title>
//         <Subtitle>Manage your brand partnerships and campaigns</Subtitle>
//       </Header>
      
//       <Section>
//         <SectionTitle>Current Partnerships</SectionTitle>
//         <EmptyState>
//           <EmptyStateText>You don't have any active partnerships yet.</EmptyStateText>
//           <Button>Browse Opportunities</Button>
//         </EmptyState>
//       </Section>
      
//       <Section>
//         <SectionTitle>Campaign Performance</SectionTitle>
//         <EmptyState>
//           <EmptyStateText>No campaign data to display.</EmptyStateText>
//           <Button>View Analytics</Button>
//         </EmptyState>
//       </Section>
      
//       <Section>
//         <SectionTitle>Payouts</SectionTitle>
//         <EmptyState>
//           <EmptyStateText>No pending or completed payouts.</EmptyStateText>
//           <Button>Setup Payout Preferences</Button>
//         </EmptyState>
//       </Section>
//     </Container>
//   );
// };

// export default CreatorView;

// // Styled components
// const Container = styled.div`
//   padding: 2rem;
// `;

// const Header = styled.div`
//   margin-bottom: 2rem;
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: 700;
//   margin-bottom: 0.5rem;
// `;

// const Subtitle = styled.p`
//   font-size: 1rem;
//   color: #a0aec0;
// `;

// const Section = styled.div`
//   background-color: #1a202c;
//   border-radius: 0.5rem;
//   padding: 1.5rem;
//   margin-bottom: 2rem;
// `;

// const SectionTitle = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 600;
//   margin-bottom: 1rem;
// `;

// const EmptyState = styled.div`
//   text-align: center;
//   padding: 3rem 0;
// `;

// const EmptyStateText = styled.p`
//   color: #a0aec0;
//   margin-bottom: 1rem;
// `;

// const Button = styled.button`
//   background-color: #805ad5;
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 0.375rem;
//   font-weight: 500;
//   cursor: pointer;
  
//   &:hover {
//     background-color: #6b46c1;
//   }
// `;




import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSponsorshipContext } from '../../context/useSponsorshipContext';

const CreatorView = () => {
  const { walletAddress, logout, getAvailableContracts, signContract } = useSponsorshipContext();
  const [availableContracts, setAvailableContracts] = useState([]);
  const [activePartnerships, setActivePartnerships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Fetch available contracts when component mounts
    const fetchContracts = async () => {
      setIsLoading(true);
      try {
        const contracts = await getAvailableContracts();
        setAvailableContracts(contracts || []);
      } catch (error) {
        console.error("Error fetching available contracts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContracts();
  }, [getAvailableContracts]);
  
  const handleSignContract = async (contractId) => {
    setIsLoading(true);
    try {
      await signContract(contractId);
      // Refresh contracts after signing
      const contracts = await getAvailableContracts();
      setAvailableContracts(contracts || []);
      // Update active partnerships
      setActivePartnerships([...activePartnerships, contracts.find(c => c.id === contractId)]);
    } catch (error) {
      console.error("Error signing contract:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Creator Dashboard</Title>
        <Subtitle>Manage your brand partnerships and campaigns</Subtitle>
        <WalletInfo>
          <WalletAddress>
            {walletAddress?.substring(0, 6)}...{walletAddress?.substring(walletAddress.length - 4)}
          </WalletAddress>
          <LogoutButton onClick={logout}>Disconnect</LogoutButton>
        </WalletInfo>
      </Header>
      
      <Section>
        <SectionTitle>Available Opportunities</SectionTitle>
        {isLoading ? (
          <LoadingText>Loading available contracts...</LoadingText>
        ) : availableContracts.length > 0 ? (
          <ContractList>
            {availableContracts.map(contract => (
              <ContractCard key={contract.id}>
                <ContractTitle>{contract.title}</ContractTitle>
                <ContractDetail>Brand: {contract.brandName}</ContractDetail>
                <ContractDetail>Offer: {contract.payment} {contract.tokenSymbol}</ContractDetail>
                <ContractDetail>Duration: {contract.duration} days</ContractDetail>
                <ContractActions>
                  <ViewDetailsButton href={`/contracts/${contract.id}`}>View Details</ViewDetailsButton>
                  <SignButton onClick={() => handleSignContract(contract.id)}>Sign Contract</SignButton>
                </ContractActions>
              </ContractCard>
            ))}
          </ContractList>
        ) : (
          <EmptyState>
            <EmptyStateText>No available opportunities at the moment.</EmptyStateText>
            <Button href="/explore">Browse Marketplace</Button>
          </EmptyState>
        )}
      </Section>
      
      <Section>
        <SectionTitle>Current Partnerships</SectionTitle>
        {activePartnerships.length > 0 ? (
          <PartnershipList>
            {activePartnerships.map(partnership => (
              <PartnershipCard key={partnership.id}>
                <PartnershipTitle>{partnership.title}</PartnershipTitle>
                <PartnershipDetail>Brand: {partnership.brandName}</PartnershipDetail>
                <PartnershipDetail>Status: {partnership.status}</PartnershipDetail>
                <PartnershipDetail>Earnings: {partnership.payment} {partnership.tokenSymbol}</PartnershipDetail>
                <ViewDetailsButton href={`/partnerships/${partnership.id}`}>View Details</ViewDetailsButton>
              </PartnershipCard>
            ))}
          </PartnershipList>
        ) : (
          <EmptyState>
            <EmptyStateText>You don't have any active partnerships yet.</EmptyStateText>
            <Button>Browse Opportunities</Button>
          </EmptyState>
        )}
      </Section>
      
      <Section>
        <SectionTitle>Campaign Performance</SectionTitle>
        <EmptyState>
          <EmptyStateText>No campaign data to display.</EmptyStateText>
          <Button>View Analytics</Button>
        </EmptyState>
      </Section>
      
      <Section>
        <SectionTitle>Payouts</SectionTitle>
        <EmptyState>
          <EmptyStateText>No pending or completed payouts.</EmptyStateText>
          <Button>Setup Payout Preferences</Button>
        </EmptyState>
      </Section>
    </Container>
  );
};

export default CreatorView;

// Styled components
const Container = styled.div`
  padding: 2rem;
  color: #fff;
  background-color: #000;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #a0aec0;
  margin-bottom: 1rem;
`;

const WalletInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

const WalletAddress = styled.span`
  font-family: monospace;
  background: #1a202c;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
`;

const LogoutButton = styled.button`
  background-color: #e53e3e;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #c53030;
  }
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

const Button = styled.a`
  background-color: #805ad5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  
  &:hover {
    background-color: #6b46c1;
  }
`;

const LoadingText = styled.p`
  text-align: center;
  color: #a0aec0;
  padding: 2rem 0;
`;

const ContractList = styled.div`
  display: grid;
  gap: 1rem;
`;

const ContractCard = styled.div`
  background-color: #2d3748;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const ContractTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ContractDetail = styled.p`
  color: #cbd5e0;
  margin-bottom: 0.5rem;
`;

const ContractActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ViewDetailsButton = styled.a`
  background-color: transparent;
  border: 1px solid #805ad5;
  color: #805ad5;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: rgba(128, 90, 213, 0.1);
  }
`;

const SignButton = styled.button`
  background-color: #805ad5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #6b46c1;
  }
`;

const PartnershipList = styled.div`
  display: grid;
  gap: 1rem;
`;

const PartnershipCard = styled.div`
  background-color: #2d3748;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const PartnershipTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const PartnershipDetail = styled.p`
  color: #cbd5e0;
  margin-bottom: 0.5rem;
`;