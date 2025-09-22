
import React, { useState } from 'react';
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
const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const ModalBox = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  padding: 2rem 2.5rem;
  box-shadow: 0 2px 16px rgba(74, 144, 226, 0.15);
  min-width: 320px;
  text-align: center;
`;
const CloseBtn = styled.button`
  background: #4A90E2;
  color: #fff;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
  &:hover { background: #50E3C2; color: #222B45; }
`;

export default function SpecialServices() {
  const [modal, setModal] = useState('');
  const navigate = useNavigate();

  const handleRequest = () => setModal('request');
  const handleDetails = () => navigate('/special-services-details');
  const handleSupport = () => setModal('support');
  const handleCloseModal = () => setModal('');

  return (
    <div>
      <h1>Special Services</h1>
      <BtnRow>
        <ActionBtn onClick={handleRequest}>Request Service</ActionBtn>
        <ActionBtn onClick={handleDetails}>View Details</ActionBtn>
        <ActionBtn onClick={handleSupport}>Contact Support</ActionBtn>
      </BtnRow>
      {modal === 'request' && (
        <ModalOverlay>
          <ModalBox>
            <h2>Request Service</h2>
            <p>Your special service request has been received. Our team will contact you soon.</p>
            <CloseBtn onClick={handleCloseModal}>Close</CloseBtn>
          </ModalBox>
        </ModalOverlay>
      )}
      {modal === 'support' && (
        <ModalOverlay>
          <ModalBox>
            <h2>Contact Support</h2>
            <p>Our support team will reach out to you soon to assist with your special service needs.</p>
            <CloseBtn onClick={handleCloseModal}>Close</CloseBtn>
          </ModalBox>
        </ModalOverlay>
      )}
    </div>
  );
}
