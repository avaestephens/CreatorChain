

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'
import styled, { keyframes, css } from 'styled-components'
import Navbar from '@/components/Dashboard/Navbar'

const Dashboard = () => {
  const { user } = useStateContext()
  const [activeCreators, setActiveCreators] = useState(5467)
  const [brandsOnPlatform, setBrandsOnPlatform] = useState(1289)
  const [contractsCompleted, setContractsCompleted] = useState(8745)

  useEffect(() => {
    if (!user) {
      // Handle not logged in state
    } else {
      // Handle logged in state
    }
  }, [user])
  
  // SVG Icon Components
  const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  )
  
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
  
  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  )
  
  const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  )
  
  const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  )
  
  const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  )
  
  const CoffeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
      <line x1="6" y1="1" x2="6" y2="4"></line>
      <line x1="10" y1="1" x2="10" y2="4"></line>
      <line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>
  )
  
  const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  )

  return (
    <PageContainer>
      <Navbar/>

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContainer>
            <HeroContent>
              <HeroTitle>
                Connect Creators and Brands on the <GradientText>Blockchain</GradientText>
              </HeroTitle>
              <HeroDescription>
                A decentralized marketplace for influencers to secure sponsorships with brands through smart contract-based deals. Protect your content ownership and ensure transparent payments.
              </HeroDescription>
              <ButtonGroup>
                <PrimaryButton href="/creators">I'm a Creator</PrimaryButton>
                <SecondaryButton href="/brands">I'm a Brand</SecondaryButton>
              </ButtonGroup>
            </HeroContent>
            
            <HeroImageSection>
              <CardWrapper>
                <CardGlow />
                <FeaturedCard>
                  <CardHeader>
                    <CardTitle>FEATURED DEAL</CardTitle>
                    <StatusBadge>COMPLETED</StatusBadge>
                  </CardHeader>
                  
                  <CreatorProfile>
                    <ProfileImage>
                      <img src="/api/placeholder/100/100" alt="Creator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </ProfileImage>
                    <div>
                      <CreatorName>ava.sk8</CreatorName>
                      <CreatorStats>200k Followers</CreatorStats>
                    </div>
                  </CreatorProfile>
                  
                  <ContractBox>
                    <ContractTitle>Contract with <BrandName>SkateCo</BrandName></ContractTitle>
                    <VerificationTag>
                      <CheckCircleIcon /> <span style={{ marginLeft: '4px' }}>Verified on blockchain</span>
                    </VerificationTag>
                  </ContractBox>
                  
                  <PaymentInfo>
                    3.4 ETH Payment • Content Rights Protected
                  </PaymentInfo>
                </FeaturedCard>
              </CardWrapper>
            </HeroImageSection>
          </HeroContainer>
        </Container>
      </HeroSection>

      {/* Stats Section */}
      <StatsSection>
        <Container>
          <StatsGrid>
            <StatCard>
              <StatNumber>{activeCreators.toLocaleString()}</StatNumber>
              <StatLabel>Active Creators</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>{brandsOnPlatform.toLocaleString()}</StatNumber>
              <StatLabel>Brands on Platform</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>{contractsCompleted.toLocaleString()}</StatNumber>
              <StatLabel>Contracts Completed</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>

      {/* How It Works Section */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <SectionTitle>
            How <GradientText>CreatorChain</GradientText> Works
          </SectionTitle>
          
          <FeaturesGrid>
            <FeatureCard>
              <IconWrapper>
                <ShieldIcon />
              </IconWrapper>
              <FeatureTitle>Secure Smart Contracts</FeatureTitle>
              <FeatureDescription>
                Our blockchain-based contracts ensure fair terms and automatic payments when deliverables are met.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <IconWrapper>
                <CoffeeIcon />
              </IconWrapper>
              <FeatureTitle>No Middlemen</FeatureTitle>
              <FeatureDescription>
                Direct creator-to-brand deals mean no agencies taking cuts from your earnings.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <IconWrapper>
                <ZapIcon />
              </IconWrapper>
              <FeatureTitle>Content Ownership</FeatureTitle>
              <FeatureDescription>
                NFT-based licensing protects creators' content rights while providing brands with clear usage terms.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </section>

      {/* Featured Creators Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        <Container>
          <CreatorsHeader>
            <SectionTitle style={{ margin: 0 }}>Featured Creators</SectionTitle>
            <ViewAllLink href="/explore">
              View all <ChevronRightIcon />
            </ViewAllLink>
          </CreatorsHeader>
          
          <CreatorsGrid>
            {[
              { name: "Ava.sk8", followers: "200k", niche: "Figure Skating", img: "/api/placeholder/300/300" },
              { name: "TechGuru", followers: "845K", niche: "Technology", img: "/api/placeholder/300/300" },
              { name: "FitWithJamie", followers: "2.3M", niche: "Fitness", img: "/api/placeholder/300/300" },
              { name: "CookingWithAlex", followers: "962K", niche: "Cooking", img: "/api/placeholder/300/300" }
            ].map((creator, index) => (
              <CreatorCard key={index}>
                <CreatorImageContainer>
                  <img src={creator.img} alt={creator.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </CreatorImageContainer>
                
                <CreatorCardContent>
                  <CreatorCardHeader>
                    <CreatorCardName>{creator.name}</CreatorCardName>
                    <CreatorCardBadge>{creator.niche}</CreatorCardBadge>
                  </CreatorCardHeader>
                  
                  <CreatorCardStats>
                    {creator.followers} followers
                  </CreatorCardStats>
                  
                  <ViewProfileButton href={`/creator/${creator.name}`}>
                    View Profile
                  </ViewProfileButton>
                </CreatorCardContent>
              </CreatorCard>
            ))}
          </CreatorsGrid>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <SectionTitle>
            What People Are <GradientText>Saying</GradientText>
          </SectionTitle>
          
          <TestimonialsGrid>
            <TestimonialCard>
              <QuoteMark>"</QuoteMark>
              <TestimonialText>
                CreatorChain has completely transformed how I approach brand deals. With smart contracts, I know exactly when I'll get paid, and the terms are crystal clear.
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorImage>
                  <img src="/api/placeholder/100/100" alt="Author" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </AuthorImage>
                <AuthorInfo>
                  <AuthorName>Jamie Lee</AuthorName>
                  <AuthorRole>Travel Content Creator</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <QuoteMark>"</QuoteMark>
              <TestimonialText>
                As a brand manager, I love how transparent the whole process is. We can verify all creator metrics before finalizing deals, and content usage rights are clearly defined via NFTs.
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorImage>
                  <img src="/api/placeholder/100/100" alt="Author" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </AuthorImage>
                <AuthorInfo>
                  <AuthorName>Michael Chen</AuthorName>
                  <AuthorRole>Marketing Director, EcoGear</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection>
        <CTAContainer>
          <CTATitle>Ready to Transform Your Creator Business?</CTATitle>
          <CTADescription>
            Join thousands of creators and brands who are building profitable partnerships on CreatorChain.
          </CTADescription>
          <CTAButtons>
            <WhiteButton href="/signup">Create Account</WhiteButton>
            <OutlineButton href="/how-it-works">Learn More</OutlineButton>
          </CTAButtons>
        </CTAContainer>
      </CTASection>

      {/* Footer */}
      <Footer>
        <Container>
          <FooterGrid>
            <FooterColumn>
              <FooterLogo>CreatorChain</FooterLogo>
              <FooterDescription>
                Connecting creators and brands with blockchain-powered partnerships.
              </FooterDescription>
              <SocialLinks>
                <SocialLink href="#"><InstagramIcon /></SocialLink>
                <SocialLink href="#"><TwitterIcon /></SocialLink>
                <SocialLink href="#"><GlobeIcon /></SocialLink>
              </SocialLinks>
            </FooterColumn>
            
            <FooterColumn>
              <FooterHeading>Platform</FooterHeading>
              <FooterLinks>
                <FooterLinkItem><FooterLink href="/explore">Explore</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="/marketplace">Marketplace</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="/how-it-works">How It Works</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="/pricing">Pricing</FooterLink></FooterLinkItem>
              </FooterLinks>
            </FooterColumn>
            
            <FooterColumn>
              <FooterHeading>Resources</FooterHeading>
              <FooterLinks>
                <FooterLinkItem><FooterLink href="/blog">Blog</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="/guides">Guides</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="/documentation">Documentation</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="/support">Support</FooterLink></FooterLinkItem>
              </FooterLinks>
            </FooterColumn>
            
            <FooterColumn>
              <FooterHeading>Company</FooterHeading>
              <FooterLinks>
                <FooterLinkItem><FooterLink href="/about">About</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="/careers">Careers</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="/privacy">Privacy</FooterLink></FooterLinkItem>
                <FooterLinkItem><FooterLink href="/terms">Terms</FooterLink></FooterLinkItem>
              </FooterLinks>
            </FooterColumn>
          </FooterGrid>
          
          <FooterDivider>
            © {new Date().getFullYear()} CreatorChain. All rights reserved.
          </FooterDivider>
        </Container>
      </Footer>
    </PageContainer>
  )
}

export default Dashboard
                    


// Keyframes
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Layout Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #121826;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;


// Hero Section
const HeroSection = styled.section`
  padding-top: 8rem;
  padding-bottom: 5rem;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding-right: 3rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #805ad5, #3182ce);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const HeroDescription = styled.p`
  color: #cbd5e0;
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(to right, #805ad5, #3182ce);
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-align: center;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: #2d3748;
  border: 1px solid #4a5568;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #4a5568;
  }
`;

// Featured Deal Card
const HeroImageSection = styled.div`
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-top: 0;
  }
`;

const CardWrapper = styled.div`
  position: relative;
`;

const CardGlow = styled.div`
  position: absolute;
  inset: -0.25rem;
  background: linear-gradient(to right, #805ad5, #3182ce);
  border-radius: 0.5rem;
  opacity: 0.75;
  filter: blur(15px);
`;

const FeaturedCard = styled.div`
  position: relative;
  background-color: #2d3748;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 2rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #a0aec0;
`;

const StatusBadge = styled.div`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: #805ad5;
  border-radius: 9999px;
`;

const CreatorProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  overflow: hidden;
  background-color: #4a5568;
  margin-right: 1rem;
`;

const CreatorName = styled.div`
  font-weight: 500;
`;

const CreatorStats = styled.div`
  font-size: 0.875rem;
  color: #a0aec0;
`;

const ContractBox = styled.div`
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: #1a202c;
  border-radius: 0.375rem;
`;

const ContractTitle = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const BrandName = styled.span`
  font-weight: 600;
  color: #63b3ed;
`;

const VerificationTag = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #a0aec0;
`;

const PaymentInfo = styled.div`
  text-align: center;
  background: linear-gradient(to right, #805ad5, #3182ce);
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

// Stats Section
const StatsSection = styled.section`
  padding: 4rem 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: #2d3748;
  border-radius: 0.5rem;
  border: 1px solid #4a5568;
`;

const StatNumber = styled.div`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #805ad5, #3182ce);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const StatLabel = styled.div`
  color: #cbd5e0;
`;

// How It Works Section
const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  padding: 1.5rem;
  background-color: #2d3748;
  border-radius: 0.5rem;
  border: 1px solid #4a5568;
  transition: border-color 0.3s;
  
  &:hover {
    border-color: #805ad5;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 0.375rem;
  background: linear-gradient(to right, #805ad5, #3182ce);
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  color: #cbd5e0;
`;

// Featured Creators Section
const CreatorsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #a78bfa;
  
  &:hover {
    color: #9f7aea;
  }
`;

const CreatorsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CreatorCard = styled.div`
  background-color: #2d3748;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #4a5568;
  transition: border-color 0.3s;
  
  &:hover {
    border-color: #805ad5;
  }
`;

const CreatorImageContainer = styled.div`
  height: 12rem;
  background-color: #4a5568;
`;

const CreatorCardContent = styled.div`
  padding: 1rem;
`;

const CreatorCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CreatorCardName = styled.h3`
  font-weight: 600;
`;

const CreatorCardBadge = styled.span`
  font-size: 0.75rem;
  background-color: #4a5568;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const CreatorCardStats = styled.div`
  font-size: 0.875rem;
  color: #a0aec0;
  margin-bottom: 0.75rem;
`;

const ViewProfileButton = styled(Link)`
  display: block;
  text-align: center;
  padding: 0.5rem;
  background: linear-gradient(to right, #805ad5, #3182ce);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

// Testimonials Section
const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TestimonialCard = styled.div`
  padding: 1.5rem;
  background-color: #2d3748;
  border-radius: 0.5rem;
  border: 1px solid #4a5568;
`;

const QuoteMark = styled.div`
  color: #a78bfa;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  color: #cbd5e0;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 9999px;
  background-color: #4a5568;
  margin-right: 0.75rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 500;
`;

const AuthorRole = styled.div`
  font-size: 0.875rem;
  color: #a0aec0;
`;

// CTA Section
const CTASection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(to right, #4c1d95, #1e3a8a);
`;

const CTAContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem;
`;

const CTATitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  color: #cbd5e0;
  margin-bottom: 2rem;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const WhiteButton = styled(Link)`
  background-color: white;
  color: #1a202c;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f7fafc;
  }
`;

const OutlineButton = styled(Link)`
  background-color: transparent;
  border: 1px solid white;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// Footer
const Footer = styled.footer`
  background-color: black;
  padding: 3rem 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #805ad5, #3182ce);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const FooterDescription = styled.p`
  color: #a0aec0;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #a0aec0;
  transition: color 0.2s;
  
  &:hover {
    color: white;
  }
`;

const FooterHeading = styled.h4`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: #a0aec0;
  transition: color 0.2s;
  
  &:hover {
    color: white;
  }
`;

const FooterDivider = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #2d3748;
  text-align: center;
  color: #a0aec0;
  font-size: 0.875rem;
`;


