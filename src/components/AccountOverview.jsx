import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import TransferFunds from './TransferFunds';
import ViewStatements from './ViewStatements';
import PayBills from './PayBills';

const OverviewSection = styled.section`
  background: ${theme.colors.white};
  color: ${theme.colors.text};
  padding: 2rem;
  border-radius: 1.5rem;
  margin: 2rem auto;
  max-width: 700px;
  box-shadow: 0 2px 12px rgba(74, 144, 226, 0.08);
`;
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
const Balance = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
`;
const QuickActions = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;
const ActionButton = styled.button`
  background: ${theme.colors.secondary};
  color: ${theme.colors.text};
  border: none;
  border-radius: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
const Transactions = styled.div`
  margin-top: 1.5rem;
`;
const TxnTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const TxnList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const TxnItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${theme.colors.background};
  font-size: 1rem;
`;

const mockTransactions = [
  { id: 1, date: '2025-09-18', desc: 'Grocery Store', amount: '-₹1,200.00' },
  { id: 2, date: '2025-09-17', desc: 'Salary Credit', amount: '+₹50,000.00' },
  { id: 3, date: '2025-09-16', desc: 'Electricity Bill', amount: '-₹2,300.00' },
  { id: 4, date: '2025-09-15', desc: 'Online Shopping', amount: '-₹3,499.00' },
];


export default function AccountOverview() {
  const [showTransfer, setShowTransfer] = useState(false);
  const [showBills, setShowBills] = useState(false);
  const [showStatements, setShowStatements] = useState(false);
  return (
    <>
      <OverviewSection>
        <Title>Account Overview</Title>
        <Balance>₹1,23,456.78</Balance>
        <QuickActions>
          <ActionButton onClick={() => setShowTransfer(true)}>Transfer Funds</ActionButton>
          <ActionButton onClick={() => setShowBills(true)}>Pay Bills</ActionButton>
          <ActionButton onClick={() => setShowStatements(true)}>View Statements</ActionButton>
        </QuickActions>
        <Transactions>
          <TxnTitle>Recent Transactions</TxnTitle>
          <TxnList>
            {mockTransactions.map(txn => (
              <TxnItem key={txn.id}>
                <span>{txn.date} - {txn.desc}</span>
                <span>{txn.amount}</span>
              </TxnItem>
            ))}
          </TxnList>
        </Transactions>
      </OverviewSection>
      <TransferFunds open={showTransfer} onClose={() => setShowTransfer(false)} />
      <PayBills open={showBills} onClose={() => setShowBills(false)} />
      <ViewStatements open={showStatements} onClose={() => setShowStatements(false)} />
    </>
  );
}
