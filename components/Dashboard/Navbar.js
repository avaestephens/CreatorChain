import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home';

const Navbar = () => {
  const { setUser } = useStateContext();

  return (
    <Nav>
      {/* Logo on the left side */}

      <LogoContainer>
        <LogoImage src="/images/psufs-logo.png" alt="Logo" />
        <Link href="/" passHref>
          <Logo onClick={() => logOut(setUser)}>PSU Figure Skating </Logo>
        </Link>
      </LogoContainer>
      
      <NavLinks>
        
        <Link href="/dashboard" passHref>
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/our-team" passHref>
          <NavItem>Our Team</NavItem>
        </Link>
        <Link href="/schedule" passHref>
          <NavItem>Schedule</NavItem>
        </Link>
        <Link href="/contact" passHref>
          <NavItem>Contact</NavItem>
        </Link>
        <Link href="/social-media" passHref>
          <NavItem>Social Media</NavItem>
        </Link>
        <Link href="/auth/signup" passHref>
          <ButtonLink>Sign Up</ButtonLink>
        </Link>
        <Link href="/auth/login" passHref>
          <ButtonLink>Login</ButtonLink>
        </Link>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #041e42; /* PSU Navy Blue */
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff; /* white */
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #ffdd44;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #6c757d; /* PSU Grey */
    border-radius: 5px;
  }
`;

const ButtonLink = styled.a`
  padding: 0.5rem 1rem;
  background-color: #ffffff; /* white */
  color: black;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
  
  &:hover {
    background-color: #ffdd44;
  }
  
`;

// Logo image positioned on the left side
const LogoImage = styled.img`
  height:80px;
  width: auto;
`;


export default Navbar;