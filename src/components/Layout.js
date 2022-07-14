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
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Navbar />
        {children}
        <Footer />
      </ContentStyles>
    </>
  );
}
