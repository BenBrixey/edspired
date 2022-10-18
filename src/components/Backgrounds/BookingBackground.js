import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import BookingForm from '../BookingForm';
import SingleClubPage from '../../templates/Club';

const BookingBackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "scroll-background.jpg" }) {
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
      <ImageWrapper>
        <StaticImage src="../../images/DnDHeader.png" alt="DnD Header" />
      </ImageWrapper>
      <BookingForm />
      <LogoWrapper>
        <Link to="/">
          <StaticImage src="../../images/circle-logo.png" alt="edspired logo" />
        </Link>
      </LogoWrapper>
    </BackgroundImage>
  );
};

const StyledBookingBackgroundSection = styled(BookingBackgroundSection)`
  margin-top: 1rem;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const ImageWrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  max-width: 60rem;
`;

const LogoWrapper = styled.div`
  width: 150px;
  padding: 2rem;
`;

export default StyledBookingBackgroundSection;
