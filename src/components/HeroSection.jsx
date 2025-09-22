import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const Hero = styled.section`
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  padding: 3rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;
const HeroText = styled.div`
  max-width: 600px;
`;
const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
const HeroDesc = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
const Button = styled.a`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
  &:hover {
    background: ${theme.colors.secondary};
  }
`;
const HeroImage = styled.div`
  min-width: 300px;
  min-height: 200px;
  background: ${theme.colors.secondary};
  border-radius: 1.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${theme.colors.white};
  @media (max-width: 900px) {
    margin: 2rem 0 0 0;
  }
`;

export default function HeroSection() {
  const navigate = useNavigate();
  const handleServicesScroll = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Hero>
      <HeroText>
        <HeroTitle>Internet Banking</HeroTitle>
        <HeroDesc>
          JKL Bank Internet Banking is simple, convenient, secure, and lets you carry out a wide range of banking transactions and access numerous features in just a few clicks. Enjoy banking anytime, anywhere.
        </HeroDesc>
        <ButtonGroup>
          <Button as="button" onClick={() => navigate('/login')}>Login Now</Button>
          <Button as="button" onClick={handleServicesScroll} style={{background: theme.colors.secondary, color: theme.colors.text}}>Know About Our Services</Button>
        </ButtonGroup>
      </HeroText>
      <HeroImage>
        {/* Placeholder for hero image or illustration */}
        Your dreams, our support.
      </HeroImage>
    </Hero>
  );
}
