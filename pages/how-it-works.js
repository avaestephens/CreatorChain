// import React from 'react';
// import { useStateContext } from '@/context/StateContext';
// import Navbar from '@/components/Dashboard/Navbar';
// import styled from 'styled-components';


// const HowItWorks = () => {
//   return (
//     <PageContainer style={{ backgroundColor: '#000', color: '#fff' }}>
//       <Navbar />
//       <Container>
//         {/* Hero Section */}
//         <HeroSection>
//           <HeroTitle>
//             How <GradientText>It Works</GradientText>
//           </HeroTitle>
//           <HeroDescription>
//             Discover how you can easily get started and connect with top creators. Follow these simple steps to begin your journey!
//           </HeroDescription>
//           <PrimaryButton>Get Started</PrimaryButton>
//         </HeroSection>

//         {/* Steps Section */}
//         <StepsSection>
//           <StepCard>
//             <StepIcon>🚀</StepIcon> {/* Replace with your own icons or images */}
//             <StepTitle>Sign Up</StepTitle>
//             <StepDescription>Join our platform with a simple registration process and create your profile.</StepDescription>
//           </StepCard>

//           <StepCard>
//             <StepIcon>🔍</StepIcon>
//             <StepTitle>Explore Creators</StepTitle>
//             <StepDescription>Browse through various creators in different niches and find your perfect match.</StepDescription>
//           </StepCard>

//           <StepCard>
//             <StepIcon>💬</StepIcon>
//             <StepTitle>Connect</StepTitle>
//             <StepDescription>Start engaging with your selected creators through direct messaging or collaborations.</StepDescription>
//           </StepCard>
//         </StepsSection>
//       </Container>
//     </PageContainer>
//   );
// };

// export default HowItWorks;

// const StepsSection = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//   gap: 2rem;
//   margin-top: 4rem;
// `;

// const StepCard = styled.div`
//   background-color: #1a202c;
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
//   transition: box-shadow 0.3s ease;
//   padding: 1.5rem;
//   text-align: center;

//   &:hover {
//     box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
//   }
// `;

// const StepIcon = styled.div`
//   margin-bottom: 1rem;
//   font-size: 2.5rem;
//   color: #63b3ed;
// `;

// const StepTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 600;
// `;

// const StepDescription = styled.p`
//   margin-top: 1rem;
//   color: #a0aec0;
//   font-size: 1rem;
// `;



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

// export const HeroSection = styled.div`
//   text-align: center;
//   margin-bottom: 3rem;
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





import React from 'react';
import { useStateContext } from '@/context/StateContext';
import Navbar from '@/components/Dashboard/Navbar';
import styled from 'styled-components';

const HowItWorks = () => {
  return (
    <PageContainer style={{ backgroundColor: '#000', color: '#fff' }}>
      <Navbar />
      <Container>
        {/* Hero Section */}
        <HeroSection>
          <HeroTitle>
            How <GradientText>It Works</GradientText>
          </HeroTitle>
          <HeroDescription>
            Our decentralized platform connects brands with creators through transparent, 
            blockchain-powered smart contracts. Experience secure partnerships, automatic 
            payments, and verifiable results—all built on Web3 technology.
          </HeroDescription>
          <PrimaryButton>Connect Wallet</PrimaryButton>
        </HeroSection>

        {/* Main Steps Section */}
        <MainStepsSection>
          <SectionTitle>For <GradientText>Brands</GradientText></SectionTitle>
          
          <StepsSection>
            <StepCard>
              <StepNumber>1</StepNumber>
              <StepIcon>🔐</StepIcon>
              <StepTitle>Connect Your Wallet</StepTitle>
              <StepDescription>
                Link your Web3 wallet (MetaMask, WalletConnect, or Coinbase Wallet) to access your brand dashboard. All transactions are secured by blockchain technology.
              </StepDescription>
            </StepCard>

            <StepCard>
              <StepNumber>2</StepNumber>
              <StepIcon>📝</StepIcon>
              <StepTitle>Create Smart Contracts</StepTitle>
              <StepDescription>
                Design partnership offers with specific terms, deliverables, and compensation. Set campaign parameters and deploy them as smart contracts on the blockchain.
              </StepDescription>
            </StepCard>

            <StepCard>
              <StepNumber>3</StepNumber>
              <StepIcon>🤝</StepIcon>
              <StepTitle>Manage Partnerships</StepTitle>
              <StepDescription>
                Review creator applications, approve partnerships, and track campaign performance in real-time. Funds are held in escrow until contract terms are fulfilled.
              </StepDescription>
            </StepCard>
          </StepsSection>

          <SectionTitle>For <GradientText>Creators</GradientText></SectionTitle>
          
          <StepsSection>
            <StepCard>
              <StepNumber>1</StepNumber>
              <StepIcon>👛</StepIcon>
              <StepTitle>Connect Your Wallet</StepTitle>
              <StepDescription>
                Link your Web3 wallet to establish your creator identity on the platform. Your wallet acts as your secure identity and payment destination.
              </StepDescription>
            </StepCard>

            <StepCard>
              <StepNumber>2</StepNumber>
              <StepIcon>🔍</StepIcon>
              <StepTitle>Browse Opportunities</StepTitle>
              <StepDescription>
                Explore available brand deals and review contract terms, compensation, and campaign requirements. Filter opportunities by industry, payment, and more.
              </StepDescription>
            </StepCard>

            <StepCard>
              <StepNumber>3</StepNumber>
              <StepIcon>✍️</StepIcon>
              <StepTitle>Sign Smart Contracts</StepTitle>
              <StepDescription>
                Sign on to brand contracts with a simple wallet transaction. Once you complete the required deliverables, payment is automatically released to your wallet.
              </StepDescription>
            </StepCard>
          </StepsSection>
        </MainStepsSection>

        {/* Technology Section */}
        <TechnologySection>
          <SectionTitle>Our <GradientText>Technology</GradientText></SectionTitle>
          
          <TechGrid>
            <TechCard>
              <TechIcon>⛓️</TechIcon>
              <TechTitle>Smart Contracts</TechTitle>
              <TechDescription>
                Self-executing contracts with terms directly written into code. Ensures automatic payment upon completion and verification of deliverables.
              </TechDescription>
            </TechCard>
            
            <TechCard>
              <TechIcon>🛡️</TechIcon>
              <TechTitle>Escrow System</TechTitle>
              <TechDescription>
                Brand funds are securely held in escrow contracts until campaign requirements are met, providing security for both parties.
              </TechDescription>
            </TechCard>
            
            <TechCard>
              <TechIcon>📊</TechIcon>
              <TechTitle>On-Chain Analytics</TechTitle>
              <TechDescription>
                Transparent performance metrics recorded on the blockchain, offering verifiable data on campaign results and engagement.
              </TechDescription>
            </TechCard>
            
            <TechCard>
              <TechIcon>💸</TechIcon>
              <TechTitle>Crypto Payments</TechTitle>
              <TechDescription>
                Instant payments in cryptocurrency with no intermediaries, reduced fees, and cross-border capabilities.
              </TechDescription>
            </TechCard>
          </TechGrid>
        </TechnologySection>

        {/* FAQ Section */}
        <FAQSection>
          <SectionTitle>Frequently Asked <GradientText>Questions</GradientText></SectionTitle>
          
          <FAQItem>
            <FAQQuestion>What cryptocurrencies can I use?</FAQQuestion>
            <FAQAnswer>
              Our platform currently supports Ethereum (ETH), USDC, and USDT. We plan to add support for additional networks and tokens in the future.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>How are disputes resolved?</FAQQuestion>
            <FAQAnswer>
              Our governance system allows for dispute resolution through a decentralized arbitration process. Both parties can present evidence, and community voting determines the outcome.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>Are the smart contracts audited?</FAQQuestion>
            <FAQAnswer>
              Yes, all our smart contracts undergo rigorous security audits by leading blockchain security firms to ensure the safety of your funds and data.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>What are the platform fees?</FAQQuestion>
            <FAQAnswer>
              We charge a 5% fee on successful campaigns. Gas fees for contract interactions are paid by the initiating party (usually the brand for contract creation and the creator for contract signing).
            </FAQAnswer>
          </FAQItem>
        </FAQSection>

        {/* CTA Section */}
        <CTASection>
          <CTATitle>Ready to revolutionize your creator partnerships?</CTATitle>
          <CTADescription>
            Join the future of brand-creator collaborations with our decentralized platform.
          </CTADescription>
          <CTAButtonGroup>
            <PrimaryButton>Connect Wallet</PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </CTAButtonGroup>
        </CTASection>
      </Container>
    </PageContainer>
  );
};

export default HowItWorks;

// Existing styled components
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

export const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export const GradientText = styled.span`
  background: linear-gradient(to right, #63b3ed, #805ad5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroDescription = styled.p`
  margin: 1.5rem auto 0;
  font-size: 1.25rem;
  color: #a0aec0;
  max-width: 800px;
  line-height: 1.7;
`;

export const PrimaryButton = styled.button`
  margin-top: 2rem;
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2b6cb0;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(49, 130, 206, 0.4);
  }
`;

// New styled components
export const MainStepsSection = styled.div`
  margin: 5rem 0;
`;

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

export const StepsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

export const StepCard = styled.div`
  background-color: #1a202c;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  padding: 2rem;
  text-align: center;
  position: relative;

  &:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
`;

export const StepNumber = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(to right, #63b3ed, #805ad5);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const StepIcon = styled.div`
  margin-bottom: 1.5rem;
  font-size: 3rem;
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const StepDescription = styled.p`
  color: #a0aec0;
  font-size: 1rem;
  line-height: 1.6;
`;

export const TechnologySection = styled.div`
  margin: 5rem 0;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

export const TechCard = styled.div`
  background-color: #1a202c;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const TechTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

export const TechDescription = styled.p`
  color: #a0aec0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const FAQSection = styled.div`
  margin: 5rem 0;
`;

export const FAQItem = styled.div`
  background-color: #1a202c;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const FAQQuestion = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #63b3ed;
`;

export const FAQAnswer = styled.p`
  color: #a0aec0;
  font-size: 1rem;
  line-height: 1.6;
`;

export const CTASection = styled.div`
  text-align: center;
  background-color: #1a202c;
  border-radius: 1rem;
  padding: 3rem 2rem;
  margin: 5rem 0 2rem;
`;

export const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const CTADescription = styled.p`
  color: #a0aec0;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTAButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SecondaryButton = styled.button`
  margin-top: 2rem;
  background-color: transparent;
  color: #3182ce;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #3182ce;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(49, 130, 206, 0.1);
    transform: translateY(-2px);
  }
`;