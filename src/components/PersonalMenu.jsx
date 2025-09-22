import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 10;
`;
const MenuContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  background: ${theme.colors.white};
  box-shadow: 0 4px 24px rgba(74, 144, 226, 0.08);
  border-radius: 0 0 1.5rem 1.5rem;
  display: flex;
  justify-content: center;
  padding: 2.5rem 0 2rem 0;
  z-index: 20;
`;
const MenuContent = styled.div`
  display: flex;
  gap: 3rem;
  max-width: 1100px;
  width: 100%;
`;
const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 180px;
`;
const SectionTitle = styled.li`
  color: ${theme.colors.primary};
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
`;
const SectionItem = styled.li`
  color: ${theme.colors.text};
  font-size: 1.08rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`;
const AccountList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const AccountItem = styled.li`
  color: ${theme.colors.text};
  font-size: 1.08rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`;
const RightBox = styled.div`
  background: ${theme.colors.secondary};
  color: ${theme.colors.text};
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const RightTitle = styled.div`
  font-size: 1.3rem;
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
const CloseBtn = styled.button`
  background: none;
  border: none;
  color: #b0b8c1;
  font-size: 2rem;
  position: absolute;
  bottom: 1.5rem;
  right: 2.5rem;
  cursor: pointer;
`;

export default function PersonalMenu({ onClose }) {
  const navigate = useNavigate();
  const handleNav = (path) => {
    navigate(path);
    onClose();
  };
  return (
    <>
      <Overlay onClick={onClose} />
      <MenuContainer>
        <MenuContent>
          <SectionList>
            <SectionTitle>Accounts</SectionTitle>
            <AccountList>
              <AccountItem onClick={() => handleNav('/savings-account')}>Savings Account</AccountItem>
              <AccountItem onClick={() => handleNav('/salary-account')}>Salary Account</AccountItem>
              <AccountItem onClick={() => handleNav('/private-banking-savings-account')}>Private Banking Savings Account</AccountItem>
              <AccountItem onClick={() => handleNav('/wealth-management-savings-account')}>Wealth Management Savings Account</AccountItem>
              <AccountItem onClick={() => handleNav('/select-banking-savings-account')}>Select Banking Savings Account</AccountItem>
              <AccountItem onClick={() => handleNav('/savings-account-for-students')}>Savings Account for Students</AccountItem>
              <AccountItem onClick={() => handleNav('/savings-account-for-seniors')}>Savings Account for Seniors</AccountItem>
            </AccountList>
          </SectionList>
          <SectionList>
            <SectionTitle style={{ color: theme.colors.accent }}>Deposits</SectionTitle>
            <SectionItem onClick={() => handleNav('/payments')}>Payments</SectionItem>
            <SectionItem onClick={() => handleNav('/cards')}>Cards</SectionItem>
            <SectionItem onClick={() => handleNav('/loans')}>Loans</SectionItem>
            <SectionItem onClick={() => handleNav('/investments')}>Investments</SectionItem>
            <SectionItem onClick={() => handleNav('/insurance')}>Insurance</SectionItem>
            <SectionItem onClick={() => handleNav('/special-services')}>Special Services</SectionItem>
          </SectionList>
          <RightBox>
            <RightTitle>Get the best from CalmBank.</RightTitle>
            <RightDesc>Open a Savings Account for seamless payments</RightDesc>
            <ApplyBtn>APPLY NOW</ApplyBtn>
          </RightBox>
        </MenuContent>
        <CloseBtn onClick={onClose} title="Close">×</CloseBtn>
      </MenuContainer>
    </>
  );
}
