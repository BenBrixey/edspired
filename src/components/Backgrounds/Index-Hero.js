import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const IndexHeroSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "index-hero.jpg" }) {
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
      <TitleWrapper>
        <TitleFont>Education just for you</TitleFont>
      </TitleWrapper>
      <TitleTwoWrapper>
        <TitleFontTwo>
          Immersing students in learning using methods that work!
        </TitleFontTwo>
      </TitleTwoWrapper>

      <HeroWrapper>
        <div>
          <StaticImage
            src="../../images/circle-logo.png"
            alt="Edspired Tutoring Logo"
            style={{ width: '150px' }}
          />
        </div>

        <TextContainer>
          <TitleDescription>
            Katy is an experienced teacher and educator, having been awarded an
            outstanding teacher award in 2019. Katy is also QTS certified, DBS
            checked and has a passion for guiding and motivating students to
            succeed while inspiring a passion for learning
          </TitleDescription>
        </TextContainer>
        <button type="button">Book a consultation</button>
      </HeroWrapper>
    </BackgroundImage>
  );
};

const StyledIndexHeroSection = styled(IndexHeroSection)`
  margin-top: 2rem;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  @media (max-width: 576px) {
  }
`;

const TitleFont = styled.h1`
  font-family: 'Epicursive', 'Roboto', serif;
`;

const TitleWrapper = styled.div`
  margin-left: 2rem;
`;

const TitleFontTwo = styled.h2`
  font-family: 'Epicursive', 'Roboto', serif;
`;

const TitleTwoWrapper = styled.div`
  margin-top: 8rem;
  margin-left: 2rem;
`;

const TitleDescription = styled.p`
  font-family: 'Epicursive', 'Roboto', serif;
`;

const HeroWrapper = styled.div`
  display: flex;
  background-color: white;
  max-width: 1000px;
  margin: auto auto;
  margin-top: 350px;
  padding: 2rem;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // Small devices (landscape phones, 576px and up)
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
  }
`;

const TextContainer = styled.div`
  padding: 0 2rem;
`;

export default StyledIndexHeroSection;
