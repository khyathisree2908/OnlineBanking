import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const Modal = styled.div`
  background: ${theme.colors.white};
  border-radius: 1rem;
  padding: 2rem;
  min-width: 320px;
  box-shadow: 0 2px 16px rgba(74, 144, 226, 0.12);
`;
const Title = styled.h3`
  margin-top: 0;
  color: ${theme.colors.primary};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.background};
  font-size: 1rem;
`;
const Button = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  &:hover {
    background: ${theme.colors.secondary};
    color: ${theme.colors.text};
  }
`;
const CloseBtn = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
`;
const SuccessMsg = styled.div`
  color: ${theme.colors.secondary};
  font-weight: bold;
  margin-top: 1rem;
`;

export default function TransferFunds({ open, onClose }) {
  const [form, setForm] = useState({ to: '', amount: '' });
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <ModalOverlay>
      <Modal>
        <CloseBtn onClick={onClose} title="Close">×</CloseBtn>
        <Title>Transfer Funds</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="to" placeholder="Recipient Account Number" value={form.to} onChange={handleChange} required />
          <Input name="amount" placeholder="Amount (₹)" type="number" min="1" value={form.amount} onChange={handleChange} required />
          <Button type="submit">Transfer</Button>
        </Form>
        {success && <SuccessMsg>Transfer Successful!</SuccessMsg>}
      </Modal>
    </ModalOverlay>
  );
}
