import React from 'react';
import { FaGlobe, FaInfoCircle, FaRegFilePdf, FaUserPlus, FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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
export default function NRI() {
  const navigate = useNavigate();
  const handleDownload = () => {
    // Simulate brochure download
    const link = document.createElement('a');
    link.href = '/brochures/nri-brochure.pdf';
    link.download = 'JKL-NRI-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div style={{maxWidth: '900px', margin: '0 auto', padding: '2rem 0'}}>
      <Banner>
        <BannerTitle>NRI Banking</BannerTitle>
        <BannerDesc>
          Seamless banking for Non-Resident Indians. Enjoy global access, easy remittance, and exclusive NRI services with JKL Bank.
        </BannerDesc>
        <BtnRow>
          <ActionBtn onClick={() => navigate('/apply-nri')}><FaUserPlus /> Open NRI Account</ActionBtn>
          <ActionBtn onClick={() => navigate('/nri-info')}><FaInfoCircle /> Know More</ActionBtn>
          <ActionBtn onClick={handleDownload}><FaRegFilePdf /> Download Brochure</ActionBtn>
        </BtnRow>
      </Banner>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon><FaGlobe /></FeatureIcon>
          <FeatureTitle>Global Access</FeatureTitle>
          <FeatureDesc>Access your account from anywhere in the world.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaUserPlus /></FeatureIcon>
          <FeatureTitle>Easy Remittance</FeatureTitle>
          <FeatureDesc>Send money to India quickly and securely.</FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaInfoCircle /></FeatureIcon>
          <FeatureTitle>Dedicated Support</FeatureTitle>
          <FeatureDesc>24x7 NRI helpdesk for all your needs.</FeatureDesc>
        </FeatureCard>
      </FeaturesGrid>
      <FAQSection>
        <FAQTitle><FaQuestionCircle /> Frequently Asked Questions</FAQTitle>
        <FAQList>
          <FAQItem><b>Who can open an NRI account?</b><br />Any Indian citizen residing abroad can open an NRI account.</FAQItem>
          <FAQItem><b>What types of NRI accounts are available?</b><br />NRE, NRO, and FCNR accounts are available.</FAQItem>
        </FAQList>
      </FAQSection>
    </div>
  );
}
