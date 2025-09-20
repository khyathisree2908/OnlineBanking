import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Section = styled.section`
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  padding: 2rem 2rem 2rem 2rem;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
const ServicesGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
const Service = styled.div`
  background: ${theme.colors.white};
  border-radius: 1rem;
  padding: 1.5rem;
  flex: 1 1 200px;
  min-width: 200px;
  box-shadow: 0 2px 8px rgba(80, 227, 194, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.secondary};
`;
const ServiceTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const ServiceDesc = styled.div`
  text-align: center;
  font-size: 1rem;
`;

export default function ServicesSection() {
  return (
    <Section>
      <Title>Our Service Highlights</Title>
      <ServicesGrid>
        <Service>
          <Icon>💻</Icon>
          <ServiceTitle>100% Digital Process</ServiceTitle>
          <ServiceDesc>Experience seamless, paperless banking from registration to transactions.</ServiceDesc>
        </Service>
        <Service>
          <Icon>🧑‍💻</Icon>
          <ServiceTitle>Virtual KYC</ServiceTitle>
          <ServiceDesc>Complete your KYC online with a secure and easy process.</ServiceDesc>
        </Service>
        <Service>
          <Icon>📝</Icon>
          <ServiceTitle>Minimum Documentation</ServiceTitle>
          <ServiceDesc>Get started with just a few essential documents.</ServiceDesc>
        </Service>
        <Service>
          <Icon>🔒</Icon>
          <ServiceTitle>Secure & Reliable</ServiceTitle>
          <ServiceDesc>Your data and transactions are protected with advanced security.</ServiceDesc>
        </Service>
      </ServicesGrid>
    </Section>
  );
}
