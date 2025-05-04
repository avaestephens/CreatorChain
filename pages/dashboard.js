// // pages/dashboard.js - New combined dashboard
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useSponsorshipContext } from '../context/useSponsorshipContext';
// import BrandView from '../components/Dashboard/BrandView';
// import InfluencerView from '../components/Dashboard/CreatorView';

// export default function Dashboard() {
//   const { isConnected, userRole, connectWallet, selectRole } = useSponsorshipContext();
//   const router = useRouter();

//   // If user has a role and is connected, show their dashboard
//   if (isConnected && userRole) {
//     return (
//       <div className="dashboard-container">
//         {userRole === 'brand' ? <BrandView /> : <InfluencerView />}
//       </div>
//     );
//   }

//   // If user is connected but hasn't selected a role
//   if (isConnected && !userRole) {
//     return (
//       <div className="role-selection-container">
//         <h2>What best describes you?</h2>
//         <div className="role-buttons">
//           <button 
//             className="role-button brand-button"
//             onClick={() => selectRole('brand')}
//           >
//             I'm a Brand
//           </button>
//           <button 
//             className="role-button influencer-button"
//             onClick={() => selectRole('influencer')}
//           >
//             I'm an Influencer
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // If user is not connected, show connect wallet button
//   return (
//     <div className="connect-wallet-container">
//       <h2>Welcome to CreatorChain</h2>
//       <p>Connect your wallet to get started</p>
//       <button 
//         className="connect-wallet-button"
//         onClick={connectWallet}
//       >
//         Connect Wallet
//       </button>
//     </div>
//   );
// }


// // pages/dashboard.js
// import { useEffect } from 'react';
// import styled from 'styled-components';
// import { useRouter } from 'next/router';
// import { useSponsorshipContext } from '../context/useSponsorshipContext';
// import BrandView from '../components/Dashboard/BrandView';
// import InfluencerView from '../components/Dashboard/CreatorView';


// export default function Dashboard() {
//   const { isConnected, userRole, connectWallet, selectRole } = useSponsorshipContext();
//   const router = useRouter();

//   if (isConnected && userRole) {
//     return (
//       <div className="min-h-screen p-6 bg-muted/50">
//         {userRole === 'brand' ? <BrandView /> : <InfluencerView />}
//       </div>
//     );
//   }

//   if (isConnected && !userRole) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-muted/50">
//         <Card className="max-w-md w-full rounded-2xl shadow-xl">
//           <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//             <h2 className="text-2xl font-semibold">Who are you?</h2>
//             <p className="text-muted-foreground">Choose your role to continue</p>
//             <div className="w-full flex flex-col space-y-3">
//               <Button
//                 variant="default"
//                 size="lg"
//                 className="w-full"
//                 onClick={() => selectRole('brand')}
//               >
//                 I’m a Brand
//               </Button>
//               <Button
//                 variant="secondary"
//                 size="lg"
//                 className="w-full"
//                 onClick={() => selectRole('influencer')}
//               >
//                 I’m an Influencer
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-muted/50">
//       <Card className="max-w-md w-full rounded-2xl shadow-xl">
//         <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//           <h2 className="text-2xl font-semibold">Welcome to CreatorChain</h2>
//           <p className="text-muted-foreground">Connect your wallet to get started</p>
//           <Button
//             variant="default"
//             size="lg"
//             onClick={connectWallet}
//             className="w-full"
//           >
//             Connect Wallet
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




// // Styled components for the Dashboard page

// export const DashboardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-color: #f8fafc;
//   padding: 2rem;
// `;

// export const RoleSelectionContainer = styled.div`
//   text-align: center;
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 2rem;
//   background-color: #fff;
//   border-radius: 1rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// export const RoleSelectionTitle = styled.h2`
//   font-size: 1.75rem;
//   font-weight: 600;
//   margin-bottom: 1.5rem;
// `;

// export const RoleButtonsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 1rem;
// `;

// export const RoleButton = styled.button`
//   padding: 1rem 2rem;
//   font-size: 1rem;
//   font-weight: 500;
//   background-color: #3182ce;
//   color: white;
//   border: none;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2b6cb0;
//   }

//   &.brand-button {
//     background-color: #2b6cb0;
//   }

//   &.influencer-button {
//     background-color: #4c51bf;
//   }
// `;

// export const ConnectWalletContainer = styled.div`
//   text-align: center;
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 2rem;
//   background-color: #fff;
//   border-radius: 1rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// export const ConnectWalletTitle = styled.h2`
//   font-size: 1.75rem;
//   font-weight: 600;
//   margin-bottom: 1rem;
// `;

// export const ConnectWalletDescription = styled.p`
//   font-size: 1.125rem;
//   color: #718096;
//   margin-bottom: 1.5rem;
// `;

// export const ConnectWalletButton = styled.button`
//   padding: 1rem 2rem;
//   font-size: 1rem;
//   font-weight: 500;
//   background-color: #3182ce;
//   color: white;
//   border: none;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2b6cb0;
//   }
// `;

// // Now defining the Button and Card components used below for UI consistency

// export const Button = styled.button`
//   padding: 1rem 2rem;
//   font-size: 1rem;
//   font-weight: 500;
//   background-color: #3182ce;
//   color: white;
//   border: none;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2b6cb0;
//   }
// `;

// export const Card = styled.div`
//   background-color: #fff;
//   border-radius: 1rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
// `;

// export const CardContent = styled.div`
//   padding: 1.5rem;
// `;



import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext } from '@/context/StateContext';
import { useSponsorshipContext } from '../context/useSponsorshipContext';
import Navbar from '@/components/Dashboard/Navbar';
import BrandView from '../components/Dashboard/BrandView';
import InfluencerView from '../components/Dashboard/CreatorView';

const Dashboard = () => {
  const { user } = useStateContext();
  const { isConnected, userRole, connectWallet, selectRole } = useSponsorshipContext();
  const router = useRouter();

  if (isConnected && userRole) {
    return (
      <PageContainer>
        <Navbar />
        <Container>
          <DashboardContent>
            {userRole === 'brand' ? <BrandView /> : <InfluencerView />}
          </DashboardContent>
        </Container>
      </PageContainer>
    );
  }

  if (isConnected && !userRole) {
    return (
      <PageContainer>
        <Navbar />
        <Container>
          <HeroSection>
            <HeroTitle>
              Choose Your <GradientText>Role</GradientText>
            </HeroTitle>
            <HeroDescription>
              Tell us who you are to customize your CreatorChain experience
            </HeroDescription>
            <RoleButtonsWrapper>
              <RoleButton 
                className="brand-button"
                onClick={() => selectRole('brand')}
              >
                I'm a Brand
              </RoleButton>
              <RoleButton 
                className="influencer-button"
                onClick={() => selectRole('influencer')}
              >
                I'm a Creator
              </RoleButton>
            </RoleButtonsWrapper>
          </HeroSection>
        </Container>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Navbar />
      <Container>
        <HeroSection>
          <HeroTitle>
            Welcome to <GradientText>CreatorChain</GradientText>
          </HeroTitle>
          <HeroDescription>
            Connect your wallet to access the platform and get started
          </HeroDescription>
          <PrimaryButton onClick={connectWallet}>
            Connect Wallet
          </PrimaryButton>
        </HeroSection>
      </Container>
    </PageContainer>
  );
};

export default Dashboard;

// Styled components matching your existing design system
export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
`;

export const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

export const DashboardContent = styled.div`
  margin-top: 2rem;
`;

export const HeroSection = styled.div`
  text-align: center;
  margin: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const GradientText = styled.span`
  background: linear-gradient(to right, #63b3ed, #805ad5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #a0aec0;
  max-width: 600px;
`;

export const PrimaryButton = styled.button`
  margin-top: 2rem;
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #2b6cb0;
  }
`;

export const RoleButtonsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const RoleButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 180px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }

  &.brand-button {
    background: linear-gradient(to right, #3182ce, #2b6cb0);
  }

  &.influencer-button {
    background: linear-gradient(to right, #805ad5, #6b46c1);
  }
`;