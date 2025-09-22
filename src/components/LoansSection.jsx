import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { FaHome, FaCar, FaUserGraduate, FaMoneyBillWave } from 'react-icons/fa';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background: ${theme.colors.background};
  border-radius: 1.2rem;
  padding: 2rem 2.5rem;
  box-shadow: 0 2px 16px rgba(74, 144, 226, 0.07);
  max-width: 700px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 220px;
`;
const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;
const IconBox = styled.div`
  font-size: 1.7rem;
  color: ${theme.colors.primary};
  margin-top: 0.2rem;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;
const Desc = styled.div`
  font-size: 0.98rem;
  color: ${theme.colors.accent};
`;
const RightBox = styled.div`
  background: ${theme.colors.secondary};
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const RightTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const RightDesc = styled.div`
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
`;
const ApplyBtn = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 2rem;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${theme.colors.accent};
  }
`;
const EmiLink = styled.a`
  color: ${theme.colors.primary};
  font-size: 1rem;
  margin-top: 1rem;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.accent};
  }
`;

const loans = [
  {
    icon: <FaHome />,
    title: 'Home Loan',
    desc: 'Low interest rates and flexible repayment.'
  },
  {
    icon: <FaCar />,
    title: 'Car Loan',
    desc: 'Drive your dream car with easy EMIs.'
  },
  {
    icon: <FaUserGraduate />,
    title: 'Education Loan',
    desc: 'Finance your studies with simple terms.'
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Personal Loan',
    desc: 'Quick approval for your personal needs.'
  }
];

export default function LoansSection() {
  return (
    <SectionWrapper>
      <List>
        {loans.map((loan, i) => (
          <ListItem key={i}>
            <IconBox>{loan.icon}</IconBox>
            <Details>
              <Title>{loan.title}</Title>
              <Desc>{loan.desc}</Desc>
            </Details>
          </ListItem>
        ))}
      </List>
      <RightBox>
        <RightTitle>Apply for a Loan</RightTitle>
        <RightDesc>Get the funds you need with flexible options and quick approval.</RightDesc>
        <ApplyBtn>APPLY NOW</ApplyBtn>
        <EmiLink>EMI Calculator</EmiLink>
      </RightBox>
    </SectionWrapper>
  );
}
