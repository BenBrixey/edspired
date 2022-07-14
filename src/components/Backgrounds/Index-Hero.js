import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
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
      <div>
        <h1>Education just for you</h1>
      </div>
      <div>
        <h2>Immersing students in learning using methods that work!</h2>
      </div>
      <div>
        <StaticImage
          src="../../images/circle-logo.png"
          alt="Edspired Tutoring Logo"
        />
        <div>
          <div>
            <p>
              Katy is an experienced teacher and educator, having been awarded
              an outstanding teacher award in 2019. Katy is also QTS certified,
              DBS checked and has a passion for guiding and motivating students
              to succeed while inspiring a passion for learning
            </p>
            <button type="button">Book a consultation</button>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

const StyledIndexHeroSection = styled(IndexHeroSection)`
  margin-top: 2rem;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const ImageWrapper = styled.div`
  padding-top: 20rem;
  padding-bottom: 1rem;
  max-width: 60rem;
`;

export default StyledIndexHeroSection;
