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
  min-width: 350px;
  box-shadow: 0 2px 16px rgba(74, 144, 226, 0.12);
`;
const Title = styled.h3`
  margin-top: 0;
  color: ${theme.colors.primary};
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
const StatementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`;
const StatementItem = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid ${theme.colors.background};
  display: flex;
  justify-content: space-between;
`;
const DownloadBtn = styled.button`
  background: ${theme.colors.secondary};
  color: ${theme.colors.text};
  border: none;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const mockStatements = [
  { id: 1, period: 'Sep 2025', file: 'statement-sep-2025.pdf' },
  { id: 2, period: 'Aug 2025', file: 'statement-aug-2025.pdf' },
  { id: 3, period: 'Jul 2025', file: 'statement-jul-2025.pdf' },
];

export default function ViewStatements({ open, onClose }) {
  const [downloading, setDownloading] = useState(null);
  if (!open) return null;

  const handleDownload = (id) => {
    setDownloading(id);
    setTimeout(() => setDownloading(null), 1000); // Simulate download
  };

  return (
    <ModalOverlay>
      <Modal>
        <CloseBtn onClick={onClose} title="Close">×</CloseBtn>
        <Title>Account Statements</Title>
        <StatementList>
          {mockStatements.map(stmt => (
            <StatementItem key={stmt.id}>
              <span>{stmt.period}</span>
              <DownloadBtn onClick={() => handleDownload(stmt.id)}>
                {downloading === stmt.id ? 'Downloading...' : 'Download'}
              </DownloadBtn>
            </StatementItem>
          ))}
        </StatementList>
      </Modal>
    </ModalOverlay>
  );
}
