import { graphql, Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const ClubGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const BookingNavItem = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
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
  padding: 1rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  --cast: 2px;
  box-shadow: var(--cast) var(--cast) 0 var(--grey);
  text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
`;

export default function SingleClubPage({ data: { club } }) {
  const image = getImage(club.image.asset);
  return (
    <ClubGrid>
      <GatsbyImage image={image} alt={club.name} />
      <div>
        <h2 className="mark">{club.name}</h2>
        <BookingNavItem to="/club-booking">Book Now</BookingNavItem>
      </div>
    </ClubGrid>
  );
}

export const query = graphql`
  query ($slug: String!) {
    club: sanityClub(slug: { current: { eq: $slug } }) {
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
