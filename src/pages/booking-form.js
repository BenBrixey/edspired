import * as React from 'react';
import { graphql } from 'gatsby';
import BookingForm from '../components/BookingForm';

export default function BookingFormPage({ data }) {
  const clubs = data.clubs.nodes;
  return (
    <>
      <BookingForm clubs={clubs} />
    </>
  );
}

export const query = graphql`
  query BookingQuery {
    clubs: allSanityClub {
      nodes {
        name
        id
        launchAt
      }
    }
  }
`;
