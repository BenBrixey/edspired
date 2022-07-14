import { graphql } from 'gatsby';
import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import useClub from '../utils/useClub';

export default function ClubBookingPage({ data }) {
  const clubs = data.clubs.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  const { booking, addToBooking, removeFromBooking } = useClub({
    clubs,
    inputs: values,
  });

  return (
    <div>
      <SEO title="Book a Club!" />
      <OrderStyles>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
        </fieldset>
        <fieldset className="club">
          <legend>Clubs</legend>
          {clubs.map((club) => (
            <div key={club.id}>
              <GatsbyImage
                width="50"
                height="50"
                image={getImage(club.image.asset)}
                alt={club.name}
              />
              <div>
                <h2>{club.name}</h2>
              </div>
              <div>{formatMoney(club.price)}</div>
            </div>
          ))}
        </fieldset>
        <fieldset className="booking">
          <legend>Booking</legend>
        </fieldset>
      </OrderStyles>
    </div>
  );
}

export const query = graphql`
  query {
    clubs: allSanityClub {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
