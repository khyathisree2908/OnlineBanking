import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { FaPiggyBank, FaBriefcase, FaUserTie, FaChartLine, FaUserGraduate, FaUserShield, FaUser } from 'react-icons/fa';

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

const accounts = [
  {
    icon: <FaPiggyBank />,
    title: 'Savings Account',
    desc: 'Earn interest and enjoy easy access to your funds.'
  },
  {
    icon: <FaBriefcase />,
    title: 'Salary Account',
    desc: 'Zero balance account for salaried professionals.'
  },
  {
    icon: <FaUserTie />,
    title: 'Private Banking Savings Account',
    desc: 'Premium banking experience with exclusive benefits.'
  },
  {
    icon: <FaChartLine />,
    title: 'Wealth Management Savings Account',
    desc: 'Grow your wealth with expert guidance.'
  },
  {
    icon: <FaUser />,
    title: 'Select Banking Savings Account',
    desc: 'Tailored solutions for select customers.'
  },
  {
    icon: <FaUserGraduate />,
    title: 'Savings Account for Students',
    desc: 'Special features for students and young adults.'
  },
  {
    icon: <FaUserShield />,
    title: 'Savings Account for Seniors',
    desc: 'Extra benefits and care for senior citizens.'
  }
];

export default function AccountsSection() {
  return (
    <SectionWrapper>
      <List>
        {accounts.map((acc, i) => (
          <ListItem key={i}>
            <IconBox>{acc.icon}</IconBox>
            <Details>
              <Title>{acc.title}</Title>
              <Desc>{acc.desc}</Desc>
            </Details>
          </ListItem>
        ))}
      </List>
      <RightBox>
        <RightTitle>Open a Savings Account</RightTitle>
        <RightDesc>Start your journey with CalmBank for seamless payments and exclusive benefits.</RightDesc>
        <ApplyBtn>APPLY NOW</ApplyBtn>
      </RightBox>
    </SectionWrapper>
  );
}
