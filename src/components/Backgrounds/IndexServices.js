import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const ServicesSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        services: allSanityServices {
          nodes {
            name
            description
            slug {
              current
            }
            image {
              asset {
                gatsbyImageData
              }
            }
          }
        }
        desktop: file(relativePath: { eq: "blue-gradient.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;
  const services = data.services.nodes;
  return (
    <BackgroundImage Tag="section" className={className} fluid={imageData}>
      <div>
        <h1>Education just for you</h1>
      </div>
      <ClubGridStyles>
        {services.map((service) => (
          <SingleService key={service.id} service={service} />
        ))}
      </ClubGridStyles>
    </BackgroundImage>
  );
};

function SingleService({ service }) {
  const image = getImage(service.image.asset);
  return (
    <ClubStyles>
      <Link to={`/service/${service.slug.current}`}>
        <h2>
          <span className="mark">{service.name}</span>
        </h2>
      </Link>
      <GatsbyImage image={image} alt={service.name} />
    </ClubStyles>
  );
}

const StyledServicesSection = styled(ServicesSection)`
  margin-top: 2rem;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

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

export default StyledServicesSection;
