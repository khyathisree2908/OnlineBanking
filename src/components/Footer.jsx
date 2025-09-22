import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const FooterBar = styled.footer`
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
`;

export default function Footer() {
  return (
    <FooterBar>
  &copy; {new Date().getFullYear()} JKL Bank. All rights reserved.
    </FooterBar>
  );
}
