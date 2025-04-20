import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Dashboard/Navbar';
import Link from 'next/link';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <PageContainer style={{ backgroundColor: '#000', color: '#fff' }}>
    <Navbar/>
      <Container>
        <HeroSection>
          <HeroTitle>
            Sign Up to <GradientText>Join Us</GradientText>
          </HeroTitle>
          <HeroDescription>
            Create your account to get started.
          </HeroDescription>
        </HeroSection>

        <FormContainer>
          <FormWrapper>
            <form onSubmit={handleSignUp}>
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <TermsWrapper>
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                <TermsText>
                  I agree to the <Link href="/terms">Terms & Conditions</Link>
                </TermsText>
              </TermsWrapper>

              <Button type="submit" disabled={!termsAccepted}>
                Sign Up
              </Button>
            </form>
          </FormWrapper>
        </FormContainer>
      </Container>
    </PageContainer>
  );
};

export default SignUp;





const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const FormWrapper = styled.div`
  background-color: #1a202c;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: #2d3748;
  color: #e2e8f0;
  border: 1px solid #4a5568;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #63b3ed;
    box-shadow: 0 0 5px rgba(99, 179, 237, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #63b3ed;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3182ce;
  }
`;

const TermsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TermsText = styled.p`
  color: #e2e8f0;
  font-size: 0.875rem;
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