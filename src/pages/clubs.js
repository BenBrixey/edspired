import * as React from 'react';
import { graphql } from 'gatsby';
import ClubList from '../components/ClubList';

export default function ClubsPage({ data }) {
  const clubs = data.clubs.nodes;
  return (
    <>
      <ClubList clubs={clubs} />
    </>
  );
}

export const query = graphql`
  query ClubsQuery {
    clubs: allSanityClub {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        launchAt
      }
    }
  }
`;
