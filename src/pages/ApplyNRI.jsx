import React from 'react';
import styled from 'styled-components';

const BtnRow = styled.div`
  display: flex;
  gap: 1.2rem;
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

export default function ApplyNRI() {
  return (
    <div style={{padding:'2rem'}}>
      <h1>Open NRI Account</h1>
      <p>Begin your NRI account application. Fill in your details and submit the required documents online.</p>
      <BtnRow>
        <ActionBtn>Start Application</ActionBtn>
        <ActionBtn>Check Status</ActionBtn>
        <ActionBtn>Contact Support</ActionBtn>
      </BtnRow>
    </div>
  );
}
