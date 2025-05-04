import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useStateContext } from '@/context/StateContext';

const Navbar = () => {
  const { setUser } = useStateContext();
  const router = useRouter();

  const handleLogoClick = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push('/auth/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Nav>
      <NavContent>
      <Logo>CreatorChain</Logo>
        
        <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/how-it-works">How It Works</NavLink>
          <NavLink href="/explore">Explore</NavLink>
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/about">About</NavLink>
        </NavLinks>
        
        <AuthLinks>
          <SignUpLink href="/dashboard">Connect Wallet</SignUpLink>
        </AuthLinks>
      </NavContent>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #041e42;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #805ad5, #3182ce);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const NavLinks = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: #cbd5e0;
  transition: color 0.2s;
  
  &:hover {
    color: #a78bfa;
  }
`;

const AuthLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const LogInLink = styled(Link)`
  padding: 0.5rem 1rem;
  color: #cbd5e0;
  border-radius: 0.375rem;
  transition: color 0.2s;
  
  &:hover {
    color: white;
  }
`;

const SignUpLink = styled(Link)`
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #805ad5, #3182ce);
  border-radius: 0.375rem;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`;

export default Navbar;
