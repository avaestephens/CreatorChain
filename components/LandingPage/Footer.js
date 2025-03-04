import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Using react-icons for social media icons

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LeftContainer>
          © {new Date().getFullYear()} PSUFS
        </LeftContainer>
        <CenterContainer>
          <Link href="https://www.psu.edu/web-privacy-statement">Privacy Policy</Link> | <Link href="https://www.psu.edu/legal-statements">Terms of Service</Link>
        </CenterContainer>
        <RightContainer>
          <SocialIcon href="https://www.facebook.com/PSUFigureSkating/" aria-label="Facebook">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="https://x.com/pennstatefs" aria-label="Twitter">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/psufigureskating/" aria-label="Instagram">
            <FaInstagram />
          </SocialIcon>
        </RightContainer>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: #041e42; /* PSU Navy Blue */
  color: #fff;
  padding: 20px 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1); /* subtle shadow */
  width: 100%; /* Ensure it spans the entire width of the screen */
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Keep footer container aligned with the page content */
  flex-wrap: wrap; /* Allows items to wrap when space is tight */
  gap: 20px; /* Adds some space between sections */
`;

const LeftContainer = styled.div`
  font-size: 0.9rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    flex: 1 1 100%; /* Allow it to take full width on smaller screens */
  }
`;

const CenterContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #bbb;
  text-align: center;

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Allow it to take full width on smaller screens */
    justify-content: center;
  }
`;

const RightContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    flex: 1 1 100%; /* Allow it to take full width on smaller screens */
  }
`;

const Link = styled.a`
  color: #bbb;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #cccccc; /* PSU Blue */
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    color: #cccccc; /* PSU Blue */
  }
`;

export default Footer;
