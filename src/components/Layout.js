import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  padding: 0 5vw;
  @media (max-width: 576px) {
    padding: 0;
  }
`;

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Navbar />
        {children}
        <Footer />
      </ContentStyles>
    </Container>
  );
}
