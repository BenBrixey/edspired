import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const QualificationSection = ({ className }) => {
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
      <TitleFontWrapper>
        <TitleFont>My Qualifications</TitleFont>
      </TitleFontWrapper>

      <GridWrapper>
        <QualificationWrapper>
          <ImageWrapper>
            <StaticImage
              src="../../images/QTS-logo.png"
              alt="Qualified Teacher Status"
            />
          </ImageWrapper>
          <LogoText>QTS Certified</LogoText>
        </QualificationWrapper>
        <QualificationWrapper>
          <ImageWrapper>
            <StaticImage src="../../images/DBS-logo.png" alt="DBS checked" />
          </ImageWrapper>
          <LogoText>DBS Checked</LogoText>
        </QualificationWrapper>
        <QualificationWrapper>
          <ImageWrapper>
            <StaticImage src="../../images/Olevi-logo.png" alt="Olevi Logo" />
          </ImageWrapper>
          <LogoText>Outstanding Teacher Award</LogoText>
        </QualificationWrapper>
        <QualificationWrapper>
          <ImageWrapper>
            <StaticImage src="../../images/Olevi-logo.png" alt="Olevi Logo" />
          </ImageWrapper>
          <LogoText>Coaching</LogoText>
        </QualificationWrapper>
        <QualificationWrapper>
          <ImageWrapper>
            <StaticImage src="../../images/TEFL-logo.png" alt="TEFL Logo" />
          </ImageWrapper>
          <LogoText>TEFL-C Certified</LogoText>
        </QualificationWrapper>
        <QualificationWrapper>
          <ImageWrapper>
            <StaticImage src="../../images/PGCE-logo.png" alt="PGCE Logo" />
          </ImageWrapper>
          <LogoText>PGCE Oustanding</LogoText>
        </QualificationWrapper>
      </GridWrapper>
    </BackgroundImage>
  );
};

const StyledQualificationSection = styled(QualificationSection)`
  margin-top: 2rem;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TitleFontWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TitleFont = styled.h1`
  font-family: 'Epicursive', 'Roboto', serif;
  margin: 2rem;
  padding-top: 2rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 2rem;
  padding: 2rem;
`;

const QualificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-end;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 250px;
  padding: 1rem;
`;

const LogoText = styled.h2`
  font-family: 'Epicursive', 'Roboto', serif;
  padding 1rem;
  align-self: flex-end;
  margin-left: auto;
`;

export default StyledQualificationSection;
