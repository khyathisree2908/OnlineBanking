import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Section = styled.section`
  background: ${theme.colors.white};
  color: ${theme.colors.text};
  padding: 2rem 2rem 1rem 2rem;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
const StepsGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
const Step = styled.div`
  background: ${theme.colors.background};
  border-radius: 1rem;
  padding: 1.5rem;
  flex: 1 1 200px;
  min-width: 200px;
  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.07);
`;
const StepNum = styled.div`
  font-size: 2rem;
  color: ${theme.colors.primary};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const StepText = styled.div`
  font-size: 1.1rem;
`;

export default function StepsSection() {
  return (
    <Section>
      <Title>World Class Internet Banking in Just 4 Steps</Title>
      <StepsGrid>
        <Step>
          <StepNum>1</StepNum>
          <StepText>Call Customer Care or visit our website</StepText>
        </Step>
        <Step>
          <StepNum>2</StepNum>
          <StepText>Choose 'Self Banking' or click the 'Login' button</StepText>
        </Step>
        <Step>
          <StepNum>3</StepNum>
          <StepText>Register with your account details and set a secure password</StepText>
        </Step>
        <Step>
          <StepNum>4</StepNum>
          <StepText>Start using CalmBank Internet Banking instantly</StepText>
        </Step>
      </StepsGrid>
    </Section>
  );
}
