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
            Discover how you can easily get started and connect with top creators. Follow these simple steps to begin your journey!
          </HeroDescription>
          <PrimaryButton>Get Started</PrimaryButton>
        </HeroSection>

        {/* Steps Section */}
        <StepsSection>
          <StepCard>
            <StepIcon>🚀</StepIcon> {/* Replace with your own icons or images */}
            <StepTitle>Sign Up</StepTitle>
            <StepDescription>Join our platform with a simple registration process and create your profile.</StepDescription>
          </StepCard>

          <StepCard>
            <StepIcon>🔍</StepIcon>
            <StepTitle>Explore Creators</StepTitle>
            <StepDescription>Browse through various creators in different niches and find your perfect match.</StepDescription>
          </StepCard>

          <StepCard>
            <StepIcon>💬</StepIcon>
            <StepTitle>Connect</StepTitle>
            <StepDescription>Start engaging with your selected creators through direct messaging or collaborations.</StepDescription>
          </StepCard>
        </StepsSection>
      </Container>
    </PageContainer>
  );
};

export default HowItWorks;

const StepsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StepCard = styled.div`
  background-color: #1a202c;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;
  padding: 1.5rem;
  text-align: center;

  &:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  }
`;

const StepIcon = styled.div`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #63b3ed;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

const StepDescription = styled.p`
  margin-top: 1rem;
  color: #a0aec0;
  font-size: 1rem;
`;



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
  margin-bottom: 3rem;
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