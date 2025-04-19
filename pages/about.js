import React from 'react';
import Navbar from '@/components/Dashboard/Navbar';
import styled from 'styled-components';


const About = () => {
  return (
    <PageContainer style={{ backgroundColor: '#000', color: '#fff' }}>
      <Navbar />
      <Container>
        {/* Hero Section */}
        <HeroSection>
          <HeroTitle>
            About <GradientText>Us</GradientText>
          </HeroTitle>
          <HeroDescription>
            Learn more about our mission and the team behind the platform.
          </HeroDescription>
        </HeroSection>

        {/* About the Platform Section */}
        <AboutSection>
          <AboutText>
            Our platform connects creators and enthusiasts across various niches. We provide a space where users can explore, connect, and collaborate with top creators around the world. Our goal is to make discovering new content easier and more personalized, giving creators the tools they need to succeed and grow their audiences.
          </AboutText>
        </AboutSection>

        {/* Team Section */}
        <TeamSection>
          <TeamTitle>Meet the Team</TeamTitle>
          <TeamGrid>
            <TeamMemberCard>
              <TeamMemberImage src="/api/placeholder/300/300" alt="Team Member" />
              <TeamMemberName>Ava Stephens</TeamMemberName>
              <TeamMemberRole>Founder & CEO</TeamMemberRole>
            </TeamMemberCard>
          </TeamGrid>
        </TeamSection>

        {/* Call to Action Section */}
        <CallToAction>
          <p>Ready to get started? Join our community today!</p>
          <ActionButton>Get Started</ActionButton>
        </CallToAction>
      </Container>
    </PageContainer>
  );
};

export default About;




const TeamSection = styled.section`
  margin-top: 4rem;
  text-align: center;
`;

const TeamTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
`;

const TeamMemberCard = styled.div`
  background-color: #1a202c;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  }
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const TeamMemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  font-size: 1rem;
  color: #a0aec0;
`;

const AboutSection = styled.section`
  margin-top: 4rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #e2e8f0;
`;

const CallToAction = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const ActionButton = styled.button`
  background-color: #63b3ed;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3182ce;
  }
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

