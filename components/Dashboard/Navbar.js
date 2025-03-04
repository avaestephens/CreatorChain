// // import React from 'react';
// // import styled from 'styled-components';
// // import Link from 'next/link';
// // import { logOut } from '@/backend/Auth';
// // import { useStateContext } from '@/context/StateContext';
// // import Home from '@/components/Dashboard/HomeTemplate';

// // const Navbar = () => {
// //   const { setUser } = useStateContext();

// //   return (
// //     <Nav>
// //       {/* Logo on the left side */}

// //       <LogoContainer>
// //         <LogoImage src="/images/psufs-logo.png" alt="Logo" />
// //         <Link href="/" passHref>
// //           <Logo onClick={() => logOut(setUser)}>PSU Figure Skating </Logo>
// //         </Link>
// //       </LogoContainer>
      
// //       <NavLinks>
        
// //         <Link href="/dashboard" passHref>
// //           <NavItem>Home</NavItem>
// //         </Link>
// //         <Link href="/our-team" passHref>
// //           <NavItem>Our Team</NavItem>
// //         </Link>
// //         <Link href="/schedule" passHref>
// //           <NavItem>Schedule</NavItem>
// //         </Link>
// //         <Link href="/contact" passHref>
// //           <NavItem>Contact</NavItem>
// //         </Link>
// //         <Link href="/social-media" passHref>
// //           <NavItem>Social Media</NavItem>
// //         </Link>
// //         <Link href="/auth/signup" passHref>
// //           <ButtonLink>Sign Up</ButtonLink>
// //         </Link>
// //         <Link href="/auth/login" passHref>
// //           <ButtonLink>Login</ButtonLink>
// //         </Link>
// //       </NavLinks>
// //     </Nav>
// //   );
// // };

// // const Nav = styled.nav`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   padding: 1rem 2rem;
// //   background-color: #041e42; /* PSU Navy Blue */
// //   color: white;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// // `;

// // const LogoContainer = styled.div`
// //   display: flex;
// //   align-items: center;
// // `;

// // const Logo = styled.a`
// //   font-size: 1.5rem;
// //   font-weight: bold;
// //   color: #ffffff; /* white */
// //   cursor: pointer;
// //   text-decoration: none;
// //   &:hover {
// //     color: #ffdd44;
// //   }
// // `;

// // const NavLinks = styled.div`
// //   display: flex;
// //   gap: 1rem;
// // `;

// // const NavItem = styled.a`
// //   color: white;
// //   text-decoration: none;
// //   font-weight: bold;
// //   padding: 0.5rem 1rem;
// //   transition: background-color 0.3s ease;
  
// //   &:hover {
// //     background-color: #6c757d; /* PSU Grey */
// //     border-radius: 5px;
// //   }
// // `;

// // const ButtonLink = styled.a`
// //   padding: 0.5rem 1rem;
// //   background-color: #ffffff; /* white */
// //   color: black;
// //   border-radius: 5px;
// //   text-decoration: none;
// //   font-weight: bold;
// //   transition: background 0.3s ease;
  
// //   &:hover {
// //     background-color: #ffdd44;
// //   }
  
// // `;

// // // Logo image positioned on the left side
// // const LogoImage = styled.img`
// //   height:80px;
// //   width: auto;
// // `;


// // export default Navbar;



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Link from 'next/link';
// import { logOut } from '@/backend/Auth';
// import { useStateContext } from '@/context/StateContext';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close buttons

// const Navbar = () => {
//   const { setUser } = useStateContext();
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger menu toggle

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Nav>
//       <LogoContainer>
//         <LogoImage src="/images/lionhead.png" alt="Logo" />
//         <Link href="/" passHref>
//           <Logo onClick={() => logOut(setUser)}>PSU Figure Skating</Logo>
//         </Link>
//       </LogoContainer>

//       <HamburgerIcon onClick={toggleMenu}>
//         {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Hamburger icon for mobile */}
//       </HamburgerIcon>

//       <NavLinks isOpen={isMenuOpen}>
//         <Link href="/dashboard" passHref>
//           <NavItem>Home</NavItem>
//         </Link>
//         <Link href="/our-team" passHref>
//           <NavItem>Our Team</NavItem>
//         </Link>
//         <Link href="/schedule" passHref>
//           <NavItem>Schedule</NavItem>
//         </Link>
//         <Link href="/contact" passHref>
//           <NavItem>Contact</NavItem>
//         </Link>
//         <Link href="/social-media" passHref>
//           <NavItem>Social Media</NavItem>
//         </Link>
//         <Link href="/auth/signup" passHref>
//           <ButtonLink>Sign Up</ButtonLink>
//         </Link>
//         <Link href="/auth/login" passHref>
//           <ButtonLink>Login</ButtonLink>
//         </Link>
//       </NavLinks>
//     </Nav>
//   );
// };

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   background-color: #041e42; /* PSU Navy Blue */
//   color: white;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 100%; /* Ensure full-width */
//   max-width: 1200px; /* Limit width on large screens */
//   margin: 0 auto; /* Center the navbar */
//   position: relative;
//   box-sizing: border-box; /* Prevent any unwanted margins from overflowing */
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Logo = styled.a`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #ffffff; /* white */
//   cursor: pointer;
//   text-decoration: none;
//   &:hover {
//     color: #ffdd44;
//   }
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 1rem;
//   align-items: center;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     position: absolute;
//     top: 70px;
//     right: 20px;
//     background-color: #041e42;
//     width: 200px;
//     padding: 1rem;
//     border-radius: 5px;
//     display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Add some shadow to make the menu pop */
//   }
// `;

// const NavItem = styled.a`
//   color: white;
//   text-decoration: none;
//   font-weight: bold;
//   padding: 0.5rem 1rem;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #6c757d; /* PSU Grey */
//     border-radius: 5px;
//   }
// `;

// const ButtonLink = styled.a`
//   padding: 0.5rem 1rem;
//   background-color: #ffffff; /* white */
//   color: black;
//   border-radius: 5px;
//   text-decoration: none;
//   font-weight: bold;
//   transition: background 0.3s ease;

//   &:hover {
//     background-color: #ffdd44;
//   }
// `;

// const HamburgerIcon = styled.div`
//   display: none;
//   font-size: 2rem;
//   color: #ffffff;
//   cursor: pointer;
//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const LogoImage = styled.img`
//   height: 80px;
//   width: auto;
// `;

// export default Navbar;


import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close buttons

const Navbar = () => {
  const { setUser } = useStateContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <LogoImage src="/images/lionhead.png" alt="Logo" />
          <Link href="/" passHref>
            <Logo onClick={() => logOut(setUser)}>PSU Figure Skating</Logo>
          </Link>
        </LogoContainer>

        <HamburgerIcon onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Hamburger menu */}
        </HamburgerIcon>

        <NavLinks isOpen={isMenuOpen}>
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

  @media (max-width: 1024px) {
    gap: 10px;
  }
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
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
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
