import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
      <GatsbyImage image={image} alt={service.name} />
      <TitleWrapper>
        <Link to={`/service/${service.slug.current}`}>
          <h2>
            <span className="mark">{service.name}</span>
          </h2>
        </Link>
      </TitleWrapper>
    </ClubStyles>
  );
}

const StyledServicesSection = styled(ServicesSection)`
  margin-top: 2rem;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  padding: 2rem;
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
`;

const ClubGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
  padding: 1rem;
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const ClubStyles = styled.div`
  display: grid;
  background-color: white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @supports not (grid-templates-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--row, subgrid);
  grid-gap: 1rem;

  h2,
  p {
    margin: 0;
  }
`;

const TitleWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  font-family: 'Epicursive', 'Roboto', serif;
`;

export default StyledServicesSection;
