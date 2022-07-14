import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import moment from 'moment';

const ClubGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const ClubStyles = styled.div`
  display: grid;
  @supports not (grid-templates-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--row, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function SingleClub({ club }) {
  const image = getImage(club.image.asset);
  const date = moment(club.launchAt).format('dddd, MMMM Do YYYY, h:mm:ss a');
  const clubPrice = club.price;
  return (
    <ClubStyles>
      <Link to={`/club/${club.slug.current}`}>
        <h2>
          <span className="mark">{club.name}</span>
        </h2>
      </Link>
      <p>{date}</p>
      <p>{clubPrice}</p>
      <GatsbyImage image={image} alt={club.name} />
    </ClubStyles>
  );
}

export default function ClubList({ clubs }) {
  return (
    <ClubGridStyles>
      {clubs.map((club) => (
        <SingleClub key={club.id} club={club} />
      ))}
    </ClubGridStyles>
  );
}
