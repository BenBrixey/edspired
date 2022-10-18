import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

export default function Footer() {
  return (
    <FooterWrapper>
      <TextWrapper>
        <p>
          &copy; 2019 - 2022 Edspired Tutoring <br /> All rights reserved
        </p>
      </TextWrapper>

      <LogoLinkWrapper>
        <LogoWrapper>
          <a
            href="https://instagram.com/edspired_tutoring"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              src="../images/instagram-icon.svg"
              alt="Instagram Logo"
            />
          </a>
        </LogoWrapper>
        <LogoWrapperTwo>
          <a
            href="https://youtube.com/channel/UCSNDV6JHJS99o_mb6N5QYaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage src="../images/youtube-icon.svg" alt="YouTube Logo" />
          </a>
        </LogoWrapperTwo>
        <LogoWrapper>
          <a
            href="https://facebook.com/EdspiredTutoring"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              src="../images/facebook-icon.svg"
              alt="Facebook Logo"
            />
          </a>
        </LogoWrapper>
        <LogoWrapper>
          <a
            href="https://tiktok.com/@bugslugg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage src="../images/tiktok-icon.svg" alt="TikTok Logo" />
          </a>
        </LogoWrapper>
      </LogoLinkWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  align-self: center;
`;

const LogoLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
`;

const LogoWrapper = styled.div`
  padding: 1rem;
  align-self: center;
  max-width: 40px;
`;

const LogoWrapperTwo = styled.div`
  padding: 1rem;
  align-self: center;
  max-width: 80px;
`;
