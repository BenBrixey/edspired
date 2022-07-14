import * as React from 'react';
import { graphql } from 'gatsby';
import StyledIndexHeroSection from '../components/Backgrounds/Index-Hero';
import StyledServicesSection from '../components/Backgrounds/IndexServices';
import TestimonialList from '../components/Testimonials';
import MailingList from '../components/MailingList';

export default function HomePage({ data }) {
  const testimonials = data.testimonials.nodes;
  return (
    <>
      <StyledIndexHeroSection />
      <div>
        <h2>Have a look through the services provided below</h2>
      </div>
      <div>
        <p>
          Please get in contact with us to discuss specific educational
          requirements
        </p>
      </div>
      <StyledServicesSection />
      <TestimonialList testimonials={testimonials} />
      <MailingList />
    </>
  );
}

export const query = graphql`
  query Testimonials {
    testimonials: allSanityTestimonials {
      nodes {
        name
        description
      }
    }
  }
`;
