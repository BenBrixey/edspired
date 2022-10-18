import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import StyledIndexHeroSection from '../components/Backgrounds/Index-Hero';
import StyledServicesSection from '../components/Backgrounds/IndexServices';
import TestimonialList from '../components/Testimonials';
import MailingList from '../components/MailingList';

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 2rem;
`;

const TitleFontTwo = styled.h2`
  font-family: 'Epicursive', 'Roboto', serif;
`;

const TitleWrapper = styled.div`
  padding: 2rem;
  margin: 2rem;
  text-align: center;
  font-family: 'Epicursive', 'Roboto', serif;
`;

export default function HomePage({ data }) {
  const testimonials = data.testimonials.nodes;
  return (
    <>
      <StyledIndexHeroSection />
      <TextWrapper>
        <TitleFontTwo>
          Have a look through the services provided below
        </TitleFontTwo>
      </TextWrapper>
      <TextWrapper>
        <p>
          Please get in contact with us to discuss specific educational
          requirements
        </p>
      </TextWrapper>
      <StyledServicesSection />
      <TitleWrapper>
        <h2>Parent & Student Testimonials</h2>
      </TitleWrapper>
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
