import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const ServicesSectionThree = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "yellow-gradient.png" }) {
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
        <ServiceWrapper>
          <ServiceTextWrapper>
            <SubjectTextWrapper>
              <LogoText>Maths</LogoText>
            </SubjectTextWrapper>
            <SubjectTextWrapper>
              <LogoText>English</LogoText>
            </SubjectTextWrapper>
          </ServiceTextWrapper>
          <ServiceImageWrapper>
            <ImageWrapper>
              <StaticImage
                src="../../images/mature-student-lady.jpg"
                alt="mature student"
              />
            </ImageWrapper>
            <LogoText>Mature Students</LogoText>
          </ServiceImageWrapper>
        </ServiceWrapper>
        <ServiceWrapper>
          <ServiceImageWrapper>
            <ImageWrapper>
              <StaticImage
                src="../../images/exams-reminders.jpg"
                alt="Student working"
              />
            </ImageWrapper>
            <LogoText>Exams and Reminders</LogoText>
          </ServiceImageWrapper>
          <ServiceTextWrapper>
            <SubjectTextWrapper>
              <LogoText>Maths</LogoText>
            </SubjectTextWrapper>
            <SubjectTextWrapper>
              <LogoText>English</LogoText>
            </SubjectTextWrapper>
          </ServiceTextWrapper>
        </ServiceWrapper>
      </GridWrapper>
    </BackgroundImage>
  );
};

const StyledServicesSectionThree = styled(ServicesSectionThree)`
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
  grid-template-columns: 1fr;
  grid-gap: 5rem;
  padding: 2rem;
`;

const ServiceWrapper = styled.div`
  display: flex;
`;

const ServiceTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 2rem;
  padding: 2rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const SubjectTextWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ServiceImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  margin: 2rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  justify-content: center;
`;

const LogoText = styled.h2`
  font-family: 'Epicursive', 'Roboto', serif;
  padding 1rem;
  align-self: center;
`;

export default StyledServicesSectionThree;
