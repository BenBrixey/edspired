import { graphql, Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import moment from 'moment';

const ClubWrapper = styled.div`
  display: flex;
`;

const BookingNavItem = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  margin-bottom: 14rem;
  transition: all 200ms ease-in;
  position: relative;

  :hover {
    color: white;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
  background: var(--blue);

  border: 1px solid black;
  padding: 1rem 3rem;
  border-radius: 5px;
  cursor: pointer;
  --cast: 2px;
  text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding-top: 20rem;
  padding-left: 20rem;
  padding-right: 20rem;
`;

export default function SingleClubPage({ data: { club } }) {
  return (
    <>
      <ClubWrapper>
        <ImageWrapper>
          <StaticImage
            style={{ position: 'absolute', width: '100%', top: '3rem' }}
            src="../images/scroll-background.jpg"
          />
          <Content>
            <h2 className="mark">{club.title}</h2>
            <p>{club.paragraphOne}</p>
            <p>{club.paragraphTwo}</p>
            <p>{club.paragraphThree}</p>
            <p>{club.paragraphFour}</p>
            <p>{club.paragraphFive}</p>
            <p>{club.smallPrintOne}</p>
            <p>{club.smallPrintTwo}</p>
            <BookingNavItem to="/booking-form">Book Now</BookingNavItem>
          </Content>
        </ImageWrapper>
      </ClubWrapper>
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    club: sanityClub(slug: { current: { eq: $slug } }) {
      launchAt
      paragraphOne
      paragraphTwo
      paragraphThree
      paragraphFour
      paragraphFive
      smallPrintOne
      smallPrintTwo
      title
      name
      id
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;
