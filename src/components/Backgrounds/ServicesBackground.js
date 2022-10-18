import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const ServicesHeroSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "services-hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage Tag="section" className={className} fluid={imageData}>
      <HeroWrapper>
        <StaticImage
          src="../../images/circle-logo.png"
          alt="Edspired Tutoring Logo"
          style={{ width: '150px' }}
        />

        <TitleWrapper>
          <TitleFont>Edspired Services</TitleFont>
        </TitleWrapper>
      </HeroWrapper>
    </BackgroundImage>
  );
};

const StyledServicesHeroSection = styled(ServicesHeroSection)`
  margin-top: 2rem;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const TitleFont = styled.h1`
  font-family: 'Epicursive', 'Roboto', serif;
`;

const TitleWrapper = styled.div`
  margin-left: 2rem;
  margin-top: 150px;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default StyledServicesHeroSection;
