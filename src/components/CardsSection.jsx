import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { FaCreditCard, FaIdCard, FaWallet } from 'react-icons/fa';

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
const CompareLink = styled.a`
  color: ${theme.colors.primary};
  font-size: 1rem;
  margin-top: 1rem;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.accent};
  }
`;

const cards = [
  {
    icon: <FaCreditCard />,
    title: 'Credit Card',
    desc: 'Enjoy rewards, cashback, and easy EMI options.'
  },
  {
    icon: <FaIdCard />,
    title: 'Debit Card',
    desc: 'Access your funds anytime, anywhere.'
  },
  {
    icon: <FaWallet />,
    title: 'Prepaid Card',
    desc: 'Safe and convenient for online and travel use.'
  }
];

export default function CardsSection() {
  return (
    <SectionWrapper>
      <List>
        {cards.map((card, i) => (
          <ListItem key={i}>
            <IconBox>{card.icon}</IconBox>
            <Details>
              <Title>{card.title}</Title>
              <Desc>{card.desc}</Desc>
            </Details>
          </ListItem>
        ))}
      </List>
      <RightBox>
        <RightTitle>Apply for a Card</RightTitle>
        <RightDesc>Choose the right card for your needs and enjoy exclusive benefits.</RightDesc>
        <ApplyBtn>APPLY NOW</ApplyBtn>
        <CompareLink>Compare Cards</CompareLink>
      </RightBox>
    </SectionWrapper>
  );
}
