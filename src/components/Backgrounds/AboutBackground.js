import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const AboutStarsSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "stars-background.jpg" }) {
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
      <GridWrapper>
        <TextWrapper>
          <TitleFont>Hello I'm Katy</TitleFont>
          <TitleFontTwo>a fully qualified teacher and educator</TitleFontTwo>
        </TextWrapper>
        <LogoWrapper>
          <StaticImage
            src="../../images/logo-white.png"
            alt="Edspired Tutoring Logo"
          />
        </LogoWrapper>
        <TextWrapperTwo>
          <TitleDescription>
            As a teacher, I understand the challenges that students may face in
            learning, and I am able to adapt my lesson plans to fit different
            learning styles. I also have experience working with at-risk
            students, providing them with the positive learning experiences to
            motivate them to succeed not just in school, but also in the
            community.
          </TitleDescription>
        </TextWrapperTwo>
        <ImageWrapper>
          <StaticImage src="../../images/katy.jpg" alt="Katy" />
        </ImageWrapper>
        <TextWrapperTwo>
          <TitleFontTwo>
            “Creating lessons that are challenging, inspirational and creative.
            I believe these are the key ingredients to enjoy and make progress
            in learning!”
          </TitleFontTwo>
        </TextWrapperTwo>
        <TextWrapperThree>
          <TitleDescription>
            I have had many wonderful opportunities to expand my role as an
            educator, providing students with knowledge, creativity and
            motivation to become successful in their own lives. I pride myself
            on challenging students and I hold them to high standards of
            integrity and respect.
          </TitleDescription>
        </TextWrapperThree>
      </GridWrapper>
    </BackgroundImage>
  );
};

const StyledAboutStarsSection = styled(AboutStarsSection)`
  margin-top: 2rem;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
`;

const TextWrapper = styled.div`
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem;
  margin-left: 4rem;
  margin-top: 4rem;
  padding: 4rem;
  background-color: white;
  opacity: 70%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TextWrapperTwo = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 2rem;
  margin-left: 4rem;
  padding: 1rem;
  background-color: white;
  opacity: 70%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TextWrapperThree = styled.div`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  max-width: 850px;
  width: 100%;
  margin: 2rem;
  margin-left: 4rem;
  margin-bottom: 4rem;
  padding: 1rem;
  background-color: white;
  opacity: 70%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TitleFont = styled.h1`
  font-family: 'Epicursive', 'Roboto', serif;
  padding: 0;
  margin: 1rem;
`;

const TitleFontTwo = styled.h2`
  font-family: 'Epicursive', 'Roboto', serif;
  padding: 0;
  margin: 1rem;
`;

const TitleDescription = styled.p`
  'Roboto', serif;
  padding: 0;
  margin: 0;
`;

const LogoWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: 2rem;
  justify-self: end;
`;

const ImageWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  transform: rotate(-15deg);
  width: 100%;
  max-width: 500px;
  margin: 2rem;
  margin-left: 4rem;
`;

export default StyledAboutStarsSection;
