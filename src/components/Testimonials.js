import React from 'react';
import styled from 'styled-components';

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

function Testimonial({ testimonial }) {
  console.log(testimonial);
  return (
    <ClubStyles>
      <h2>
        <span className="mark">{testimonial.name}</span>
      </h2>

      <p>{testimonial.description}</p>
    </ClubStyles>
  );
}

export default function TestimonialList({ testimonials }) {
  return (
    <ClubGridStyles>
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.id} testimonial={testimonial} />
      ))}
    </ClubGridStyles>
  );
}
