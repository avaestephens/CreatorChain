
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useStateContext } from '@/context/StateContext';
// import { useSponsorshipContext } from '../context/useSponsorshipContext';
// import Navbar from '@/components/Dashboard/Navbar';
// // Fix import name to match your file structure
// import BrandView from '@/components/Dashboard/BrandView';
// import CreatorView from '@/components/Dashboard/CreatorView';

// const Dashboard = () => {
//   const { user } = useStateContext();
//   const { isConnected, userRole, connectWallet, selectRole } = useSponsorshipContext();
//   const router = useRouter();
//   // Add debugging state
//   const [debug, setDebug] = useState({ isConnected, userRole });

//   // Add effect to log state changes
//   useEffect(() => {
//     console.log("Dashboard render state:", { isConnected, userRole });
//     setDebug({ isConnected, userRole });
//   }, [isConnected, userRole]);

//   if (isConnected && userRole) {
//     return (
//       <PageContainer>
//         <Navbar />
//         <Container>
//           <DashboardContent>
//             {/* Debug info - remove in production */}
//             <DebugInfo>
//               Connected: {String(isConnected)}, Role: {userRole}
//             </DebugInfo>
            
//             {/* Fix component reference to match import */}
//             {userRole === 'brand' ? <BrandView /> : <CreatorView />}
//           </DashboardContent>
//         </Container>
//       </PageContainer>
//     );
//   }

//   if (isConnected && !userRole) {
//     return (
//       <PageContainer>
//         <Navbar />
//         <Container>
//           <HeroSection>
//             <HeroTitle>
//               Choose Your <GradientText>Role</GradientText>
//             </HeroTitle>
//             <HeroDescription>
//               Tell us who you are to customize your CreatorChain experience
//             </HeroDescription>
//             <RoleButtonsWrapper>
//               <RoleButton 
//                 className="brand-button"
//                 onClick={() => {
//                   console.log("Selected: brand");
//                   selectRole('brand');
//                 }}
//               >
//                 I'm a Brand
//               </RoleButton>
//               <RoleButton 
//                 className="influencer-button"
//                 onClick={() => {
//                   console.log("Selected: creator");
//                   selectRole('influencer');
//                 }}
//               >
//                 I'm a Creator
//               </RoleButton>
//             </RoleButtonsWrapper>
//           </HeroSection>
//         </Container>
//       </PageContainer>
//     );
//   }

//   return (
//     <PageContainer>
//       <Navbar />
//       <Container>
//         <HeroSection>
//           <HeroTitle>
//             Welcome to <GradientText>CreatorChain</GradientText>
//           </HeroTitle>
//           <HeroDescription>
//             Connect your wallet to access the platform and get started
//           </HeroDescription>
//           <PrimaryButton onClick={connectWallet}>
//             Connect Wallet
//           </PrimaryButton>
//         </HeroSection>
//       </Container>
//     </PageContainer>
//   );
// };

// export default Dashboard;

// // Styled components matching your existing design system
// export const PageContainer = styled.div`
//   min-height: 100vh;
//   background-color: #000;
//   color: #fff;
// `;

// export const Container = styled.div`
//   padding: 4rem 2rem;
//   max-width: 1280px;
//   margin: 0 auto;
// `;

// export const DashboardContent = styled.div`
//   margin-top: 2rem;
// `;

// export const HeroSection = styled.div`
//   text-align: center;
//   margin: 6rem 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const HeroTitle = styled.h1`
//   font-size: 2.5rem;
//   font-weight: 700;
// `;

// export const GradientText = styled.span`
//   background: linear-gradient(to right, #63b3ed, #805ad5);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// export const HeroDescription = styled.p`
//   margin-top: 1rem;
//   font-size: 1.125rem;
//   color: #a0aec0;
//   max-width: 600px;
// `;

// export const PrimaryButton = styled.button`
//   margin-top: 2rem;
//   background-color: #3182ce;
//   color: white;
//   padding: 0.75rem 1.5rem;
//   border-radius: 0.5rem;
//   font-weight: 500;
//   cursor: pointer;
  
//   &:hover {
//     background-color: #2b6cb0;
//   }
// `;

// export const RoleButtonsWrapper = styled.div`
//   display: flex;
//   gap: 1.5rem;
//   margin-top: 2rem;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// export const RoleButton = styled.button`
//   padding: 1rem 2rem;
//   font-size: 1rem;
//   font-weight: 500;
//   color: white;
//   border: none;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   min-width: 180px;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
//   }

//   &.brand-button {
//     background: linear-gradient(to right, #3182ce, #2b6cb0);
//   }

//   &.influencer-button {
//     background: linear-gradient(to right, #805ad5, #6b46c1);
//   }
// `;

// // Debug component - remove in production
// const DebugInfo = styled.div`
//   position: absolute;
//   top: 80px;
//   right: 20px;
//   background: rgba(0, 0, 0, 0.7);
//   padding: 10px;
//   border-radius: 5px;
//   font-size: 12px;
//   z-index: 1000;
// `;





// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { useStateContext } from '@/context/StateContext';
// import { useSponsorshipContext } from '../context/useSponsorshipContext';

// // Check if these components exist in your project structure
// // If they don't exist, you'll need to create them
// // See the sample BrandView.js and CreatorView.js I provided
// let BrandView = () => <div>Loading Brand View...</div>;
// let CreatorView = () => <div>Loading Creator View...</div>;
// let Navbar = () => <div>Navbar</div>;

// // Try different import strategies
// try {
//   // Try relative import first
//   const BrandViewModule = require('../components/Dashboard/BrandView').default;
//   const CreatorViewModule = require('../components/Dashboard/CreatorView').default;
//   const NavbarModule = require('../components/Dashboard/Navbar').default;
  
//   BrandView = BrandViewModule;
//   CreatorView = CreatorViewModule;
//   Navbar = NavbarModule;
//   console.log("Components loaded with relative import");
// } catch (error) {
//   console.error("Failed to load components with relative import:", error);
  
//   try {
//     // Try absolute import with @
//     // eslint-disable-next-line
//     BrandView = require('@/components/Dashboard/BrandView').default;
//     // eslint-disable-next-line
//     CreatorView = require('@/components/Dashboard/CreatorView').default;
//     // eslint-disable-next-line
//     Navbar = require('@/components/Dashboard/Navbar').default;
//     console.log("Components loaded with @ import");
//   } catch (secondError) {
//     console.error("Failed to load components with @ import:", secondError);
    
//     // Create fallback components directly in this file
//     console.warn("Using fallback components");
    
//     BrandView = () => (
//       <div style={{ padding: '2rem' }}>
//         <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Brand Dashboard</h1>
//         <div style={{ backgroundColor: '#1a202c', borderRadius: '0.5rem', padding: '1.5rem', marginBottom: '2rem' }}>
//           <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Active Campaigns</h2>
//           <div style={{ textAlign: 'center', padding: '3rem 0' }}>
//             <p style={{ color: '#a0aec0', marginBottom: '1rem' }}>You don't have any active campaigns yet.</p>
//             <button style={{ backgroundColor: '#3182ce', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem' }}>
//               Create Campaign
//             </button>
//           </div>
//         </div>
//       </div>
//     );
    
//     CreatorView = () => (
//       <div style={{ padding: '2rem' }}>
//         <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Creator Dashboard</h1>
//         <div style={{ backgroundColor: '#1a202c', borderRadius: '0.5rem', padding: '1.5rem', marginBottom: '2rem' }}>
//           <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Current Partnerships</h2>
//           <div style={{ textAlign: 'center', padding: '3rem 0' }}>
//             <p style={{ color: '#a0aec0', marginBottom: '1rem' }}>You don't have any active partnerships yet.</p>
//             <button style={{ backgroundColor: '#805ad5', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem' }}>
//               Browse Opportunities
//             </button>
//           </div>
//         </div>
//       </div>
//     );
    
//     Navbar = () => (
//       <div style={{ padding: '1rem 2rem', borderBottom: '1px solid #2d3748' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>CreatorChain</div>
//           <div>
//             <span style={{ marginRight: '1rem' }}>Dashboard</span>
//             <button style={{ backgroundColor: '#3182ce', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem' }}>
//               Sign Out
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const Dashboard = () => {
//   const { user } = useStateContext();
//   const { isConnected, userRole, connectWallet, selectRole } = useSponsorshipContext();
//   const router = useRouter();
  
//   // Debug state
//   const [debug, setDebug] = useState({ isConnected, userRole });

//   // Log state for debugging
//   useEffect(() => {
//     console.log("Dashboard render state:", { isConnected, userRole });
//     setDebug({ isConnected, userRole });
//   }, [isConnected, userRole]);

//   // Render appropriate view based on connection and role status
//   if (isConnected && userRole) {
//     console.log(`Rendering dashboard for ${userRole}`);
//     return (
//       <PageContainer>
//         <Navbar />
//         <Container>
//           <DashboardContent>
//             {/* Debug info */}
//             <DebugInfo>
//               Connected: {String(isConnected)}, Role: {userRole}
//             </DebugInfo>
            
//             {/* Render correct view based on role */}
//             {userRole === 'brand' ? <BrandView /> : <CreatorView />}
//           </DashboardContent>
//         </Container>
//       </PageContainer>
//     );
//   }

//   if (isConnected && !userRole) {
//     console.log("Rendering role selection");
//     return (
//       <PageContainer>
//         <Navbar />
//         <Container>
//           <HeroSection>
//             <HeroTitle>
//               Choose Your <GradientText>Role</GradientText>
//             </HeroTitle>
//             <HeroDescription>
//               Tell us who you are to customize your CreatorChain experience
//             </HeroDescription>
//             <RoleButtonsWrapper>
//               <RoleButton 
//                 className="brand-button"
//                 onClick={() => {
//                   console.log("Selected: brand");
//                   selectRole('brand');
//                 }}
//               >
//                 I'm a Brand
//               </RoleButton>
//               <RoleButton 
//                 className="influencer-button"
//                 onClick={() => {
//                   console.log("Selected: influencer");
//                   selectRole('influencer');
//                 }}
//               >
//                 I'm a Creator
//               </RoleButton>
//             </RoleButtonsWrapper>
            
//             {/* Debug button - remove in production */}
//             <div style={{ marginTop: '2rem' }}>
//               <button onClick={() => console.log({ isConnected, userRole })}>
//                 Log Current State
//               </button>
//             </div>
//           </HeroSection>
//         </Container>
//       </PageContainer>
//     );
//   }

//   console.log("Rendering wallet connection prompt");
//   return (
//     <PageContainer>
//       <Navbar />
//       <Container>
//         <HeroSection>
//           <HeroTitle>
//             Welcome to <GradientText>CreatorChain</GradientText>
//           </HeroTitle>
//           <HeroDescription>
//             Connect your wallet to access the platform and get started
//           </HeroDescription>
//           <PrimaryButton onClick={connectWallet}>
//             Connect Wallet
//           </PrimaryButton>
//         </HeroSection>
//       </Container>
//     </PageContainer>
//   );
// };

// export default Dashboard;

// // Styled components matching your existing design system
// export const PageContainer = styled.div`
//   min-height: 100vh;
//   background-color: #000;
//   color: #fff;
// `;

// export const Container = styled.div`
//   padding: 4rem 2rem;
//   max-width: 1280px;
//   margin: 0 auto;
// `;

// export const DashboardContent = styled.div`
//   margin-top: 2rem;
// `;

// export const HeroSection = styled.div`
//   text-align: center;
//   margin: 6rem 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export const HeroTitle = styled.h1`
//   font-size: 2.5rem;
//   font-weight: 700;
// `;

// export const GradientText = styled.span`
//   background: linear-gradient(to right, #63b3ed, #805ad5);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// export const HeroDescription = styled.p`
//   margin-top: 1rem;
//   font-size: 1.125rem;
//   color: #a0aec0;
//   max-width: 600px;
// `;

// export const PrimaryButton = styled.button`
//   margin-top: 2rem;
//   background-color: #3182ce;
//   color: white;
//   padding: 0.75rem 1.5rem;
//   border-radius: 0.5rem;
//   font-weight: 500;
//   cursor: pointer;
  
//   &:hover {
//     background-color: #2b6cb0;
//   }
// `;

// export const RoleButtonsWrapper = styled.div`
//   display: flex;
//   gap: 1.5rem;
//   margin-top: 2rem;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// export const RoleButton = styled.button`
//   padding: 1rem 2rem;
//   font-size: 1rem;
//   font-weight: 500;
//   color: white;
//   border: none;
//   border-radius: 0.5rem;
//   cursor: pointer;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   min-width: 180px;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
//   }

//   &.brand-button {
//     background: linear-gradient(to right, #3182ce, #2b6cb0);
//   }

//   &.influencer-button {
//     background: linear-gradient(to right, #805ad5, #6b46c1);
//   }
// `;

// // Debug component - remove in production
// const DebugInfo = styled.div`
//   position: absolute;
//   top: 80px;
//   right: 20px;
//   background: rgba(0, 0, 0, 0.7);
//   padding: 10px;
//   border-radius: 5px;
//   font-size: 12px;
//   z-index: 1000;
// `;






import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext } from '@/context/StateContext';
import { useSponsorshipContext } from '../context/useSponsorshipContext';

// Import components using the working import method from your fixed version
// Replace these with your actual import statements if different
import BrandView from '../components/Dashboard/BrandView';
import CreatorView from '../components/Dashboard/CreatorView';
import Navbar from '../components/Dashboard/Navbar';

const Dashboard = () => {
  const { user } = useStateContext();
  const { isConnected, userRole, connectWallet, selectRole } = useSponsorshipContext();
  const router = useRouter();
  
  // Debug state
  const [debug, setDebug] = useState({ isConnected, userRole });

  // Log state for debugging
  useEffect(() => {
    console.log("Dashboard render state:", { isConnected, userRole });
    setDebug({ isConnected, userRole });
  }, [isConnected, userRole]);

  // Function to switch roles
  const handleRoleSwitch = () => {
    const newRole = userRole === 'brand' ? 'influencer' : 'brand';
    console.log(`Switching role from ${userRole} to ${newRole}`);
    selectRole(newRole);
  };

  // Render appropriate view based on connection and role status
  if (isConnected && userRole) {
    console.log(`Rendering dashboard for ${userRole}`);
    return (
      <PageContainer>
        <Navbar />
        <Container>
          <RoleSwitcher>
            <RoleInfo>
              Currently viewing as: <RoleText>{userRole === 'brand' ? 'Brand' : 'Creator'}</RoleText>
            </RoleInfo>
            <SwitchRoleButton onClick={handleRoleSwitch}>
              Switch to {userRole === 'brand' ? 'Creator' : 'Brand'} View
            </SwitchRoleButton>
          </RoleSwitcher>
          
          <DashboardContent>
            {/* Render correct view based on role */}
            {userRole === 'brand' ? <BrandView /> : <CreatorView />}
          </DashboardContent>
        </Container>
      </PageContainer>
    );
  }

  if (isConnected && !userRole) {
    console.log("Rendering role selection");
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
                onClick={() => {
                  console.log("Selected: brand");
                  selectRole('brand');
                }}
              >
                I'm a Brand
              </RoleButton>
              <RoleButton 
                className="influencer-button"
                onClick={() => {
                  console.log("Selected: influencer");
                  selectRole('influencer');
                }}
              >
                I'm a Creator
              </RoleButton>
            </RoleButtonsWrapper>
          </HeroSection>
        </Container>
      </PageContainer>
    );
  }

  console.log("Rendering wallet connection prompt");
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

// New styled components for role switcher
export const RoleSwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: rgba(26, 32, 44, 0.8);
  border-radius: 0.5rem;
`;

export const RoleInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 0.875rem;
  color: #a0aec0;
`;

export const RoleText = styled.span`
  font-weight: 600;
  margin-left: 0.5rem;
  background: linear-gradient(to right, #63b3ed, #805ad5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SwitchRoleButton = styled.button`
  background: linear-gradient(to right, #805ad5, #3182ce);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
  }
`;