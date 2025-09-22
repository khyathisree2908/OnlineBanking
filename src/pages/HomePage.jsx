import React from 'react';
import styled from 'styled-components';
import { FaHome, FaPiggyBank, FaCreditCard, FaMobileAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1rem 2rem 1rem;
`;
const Banner = styled.div`
  background: linear-gradient(90deg, #4A90E2 60%, #50E3C2 100%);
  color: #fff;
  border-radius: 1.5rem;
  padding: 2.5rem 2rem 2rem 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 16px rgba(74, 144, 226, 0.10);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BannerTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const BannerDesc = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;
const ActionBtn = styled.a`
  background: #fff;
  color: #4A90E2;
  border: none;
  border-radius: 1.2rem;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  box-shadow: 0 1px 6px rgba(74, 144, 226, 0.07);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  &:hover { background: #50E3C2; color: #222B45; }
`;
const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2.5rem;
`;
const FeatureCard = styled(Link)`
  background: #fff;
  color: #222B45;
  border-radius: 1.2rem;
  box-shadow: 0 1px 8px rgba(74, 144, 226, 0.08);
  padding: 2rem 1.5rem;
  min-width: 240px;
  flex: 1 1 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
const FeatureIcon = styled.div`
  font-size: 2.2rem;
  color: #4A90E2;
`;
const FeatureTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;
const FeatureDesc = styled.div`
  font-size: 1.05rem;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Banner>
        <BannerTitle><FaHome style={{marginRight:'0.7rem'}}/>Welcome to JKL Bank</BannerTitle>
        <BannerDesc>
          Experience world-class digital banking with JKL Bank. Manage your accounts, make payments, invest, and more—all in one secure, user-friendly platform.
        </BannerDesc>
        <ActionBtn href="/signup"><FaArrowRight /> Get Started</ActionBtn>
      </Banner>
      <FeaturesGrid>
        <FeatureCard to="/savings-account">
          <FeatureIcon><FaPiggyBank /></FeatureIcon>
          <FeatureTitle>Savings & Deposits</FeatureTitle>
          <FeatureDesc>Open savings accounts, manage deposits, and grow your wealth with attractive interest rates.</FeatureDesc>
        </FeatureCard>
        <FeatureCard to="/cards">
          <FeatureIcon><FaCreditCard /></FeatureIcon>
          <FeatureTitle>Cards & Payments</FeatureTitle>
          <FeatureDesc>Enjoy seamless payments, credit/debit cards, and exclusive offers for every transaction.</FeatureDesc>
        </FeatureCard>
        <FeatureCard to="/help">
          <FeatureIcon><FaMobileAlt /></FeatureIcon>
          <FeatureTitle>Mobile Banking</FeatureTitle>
          <FeatureDesc>Bank on the go with our secure and intuitive mobile app for all your needs.</FeatureDesc>
        </FeatureCard>
      </FeaturesGrid>
    </Wrapper>
  );
}
