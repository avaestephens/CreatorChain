import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Dashboard/Navbar';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <PageContainer style={{ backgroundColor: '#000', color: '#fff' }}>
    <Navbar/>
      <Container>
        <HeroSection>
          <HeroTitle>
            Log In to <GradientText>Your Account</GradientText>
          </HeroTitle>
          <HeroDescription>
            Please enter your credentials to log in.
          </HeroDescription>
        </HeroSection>

        <FormContainer>
          <FormWrapper>
            <form onSubmit={handleLogin}>
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

              <RememberMeWrapper>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <RememberMeText>Remember me</RememberMeText>
              </RememberMeWrapper>

              <Button type="submit">Log In</Button>
            </form>

            <ForgotPasswordLink href="/forgot-password">
              Forgot your password?
            </ForgotPasswordLink>
          </FormWrapper>
        </FormContainer>
      </Container>
    </PageContainer>
  );
};

export default Login;



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

const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const RememberMeText = styled.p`
  color: #e2e8f0;
  font-size: 0.875rem;
`;

const ForgotPasswordLink = styled(Link)`
  color: #63b3ed;
  text-decoration: none;
  font-size: 0.875rem;
  margin-top: 1rem;
  display: block;
  text-align: center;

  &:hover {
    color: #3182ce;
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