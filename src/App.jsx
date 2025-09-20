import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StepsSection from './components/StepsSection';
import ServicesSection from './components/ServicesSection';
import AccountOverview from './components/AccountOverview';
import Footer from './components/Footer';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
  <HeroSection />
  <AccountOverview />
  <StepsSection />
  <ServicesSection />
  <Footer />
    </ThemeProvider>
  );
}

export default App;
