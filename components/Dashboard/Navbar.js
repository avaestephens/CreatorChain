
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { logOut } from '@/backend/Auth'; // Assuming logOut is imported from Auth
import { useStateContext } from '@/context/StateContext';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close buttons
import Link from 'next/link'; // Correct Link import
import Dashboard from "@/components/LandingPage/Home"

const Navbar = () => {
  const { setUser } = useStateContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger menu toggle
  const router = useRouter(); // Using Next.js router to handle navigation

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    logOut(setUser); 
    router.push('/'); // Redirect to home page after logout
  };

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <LogoImage src="/images/lionhead.png" alt="Logo" />
          <Logo onClick={handleLogoClick}>PSU Figure Skating</Logo>
        </LogoContainer>

        <HamburgerIcon onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Hamburger menu */}
        </HamburgerIcon>

        <NavLinks $isOpen={isMenuOpen}>
          <Link href="/" passHref>
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
          <Link href="/members-only" passHref>
            <NavItem>Members</NavItem>
          </Link>
          <Link href="/auth/signup" passHref>
            <ButtonLink>Sign Up</ButtonLink>
          </Link>
          <Link href="/auth/login" passHref>
            <ButtonLink>Login</ButtonLink>
          </Link>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #041e42; /* PSU Navy Blue */
  color: white;
  width: 100%; /* Ensures full width */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; /* Adds space between logo and text */
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #dddddd;
  }
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    width: 250px;
    background-color: #041e42;
    box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 5px;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')}; /* Fix isOpen prop */
    align-items: center;
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a3c7f; /* Slight blue hover */
    border-radius: 5px;
  }

  &:active {
    background-color: transparent;
  }
`;

const ButtonLink = styled.a`
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  color: black;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background-color: #cccccc;
  }

  &:active {
    background-color: transparent;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export default Navbar;
