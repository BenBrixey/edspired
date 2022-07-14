import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const ClubmasterGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(autofill, minmax(250px, 1fr));
`;

const ClubmastersStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    transfrom: rotate(1deg);
    text-align: center;
  }
`;

export default function AboutPage({ data }) {
  const clubmasters = data.clubmasters.nodes;
  return (
    <ClubmasterGrid>
      {clubmasters.map((person) => (
        <ClubmastersStyles>
          <Link to={`/clubmaster/${person.slug.current}`}>
            <h2>
              <span className="mark">{person.name}</span>
            </h2>
          </Link>
          <GatsbyImage image={getImage(person.image.asset)} alt={person.name} />
          <p className="description">{person.description}</p>
        </ClubmastersStyles>
      ))}
    </ClubmasterGrid>
  );
}
export const query = graphql`
  query {
    clubmasters: allSanityPerson {
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
