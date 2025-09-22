import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const BtnRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;
const ActionBtn = styled.button`
  background: #4A90E2;
  color: #fff;
  border: none;
  border-radius: 1.2rem;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #50E3C2; color: #222B45; }
`;
export default function Cards() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Cards</h1>
      <BtnRow>
        <ActionBtn onClick={() => navigate('/apply-card')}>Apply for Card</ActionBtn>
        <ActionBtn onClick={() => navigate('/manage-cards')}>Manage Cards</ActionBtn>
        <ActionBtn onClick={() => navigate('/card-offers')}>View Offers</ActionBtn>
      </BtnRow>
    </div>
  );
}
