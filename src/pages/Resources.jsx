import React from 'react';
import { FaBook, FaInfoCircle, FaRegFilePdf, FaSearch, FaQuestionCircle } from 'react-icons/fa';
import styled from 'styled-components';
// Styled components (reuse from SavingsAccount or define here for demo)
const Banner = styled.div`
  background: linear-gradient(90deg, #4A90E2 60%, #50E3C2 100%);
  color: #fff;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 1.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 16px rgba(74, 144, 226, 0.10);
`;
const BannerTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const BannerDesc = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;
const BtnRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;
const ActionBtn = styled.button`
  background: #fff;
  color: #4A90E2;
  border: none;
  border-radius: 1.2rem;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 1px 6px rgba(74, 144, 226, 0.07);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover { background: #50E3C2; color: #222B45; }
`;
const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;
const FeatureCard = styled.div`
  background: #fff;
  color: #222B45;
  border-radius: 1.2rem;
  box-shadow: 0 1px 8px rgba(74, 144, 226, 0.08);
  padding: 1.5rem 1.2rem;
  min-width: 220px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
`;
const FeatureIcon = styled.div`
  font-size: 1.7rem;
  color: #4A90E2;
`;
const FeatureTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;
const FeatureDesc = styled.div`
  font-size: 1rem;
`;
const FAQSection = styled.div`
  margin-top: 2.5rem;
`;
const FAQTitle = styled.h2`
  font-size: 1.3rem;
  color: #4A90E2;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const FAQList = styled.ul`
  list-style: none;
  padding: 0;
`;
const FAQItem = styled.li`
  margin-bottom: 1.2rem;
  color: #222B45;
`;
export default function Resources() {
  return (
    <div style={{maxWidth: '900px', margin: '0 auto', padding: '2rem 0'}}>
      <Banner>
        <BannerTitle>Resources</BannerTitle>
        <BannerDesc>
          Access a wealth of guides, FAQs, and tools to help you make the most of JKL Bank's services.
        </BannerDesc>
        <BtnRow>
          <ActionBtn><FaSearch /> Search Resources</ActionBtn>
          <ActionBtn><FaInfoCircle /> Guides</ActionBtn>
          <ActionBtn><FaRegFilePdf /> Download Brochure</ActionBtn>
        </BtnRow>
      </Banner>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon><FaBook /></FeatureIcon>
          <FeatureTitle>Comprehensive Guides</FeatureTitle>
          <FeatureDesc>Step-by-step help for all banking needs.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaInfoCircle /></FeatureIcon>
          <FeatureTitle>FAQs</FeatureTitle>
          <FeatureDesc>Find answers to common questions instantly.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaSearch /></FeatureIcon>
          <FeatureTitle>Resource Search</FeatureTitle>
          <FeatureDesc>Quickly locate forms, policies, and more.</FeatureDesc>
        </FeatureCard>
      </FeaturesGrid>
      <FAQSection>
        <FAQTitle><FaQuestionCircle /> Frequently Asked Questions</FAQTitle>
        <FAQList>
          <FAQItem><b>How to find a form?</b><br />Use the search or browse the guides section.</FAQItem>
          <FAQItem><b>Where are the latest policies?</b><br />All updated policies are available in the resources section.</FAQItem>
        </FAQList>
      </FAQSection>
    </div>
  );
}
