import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Nav = styled.nav`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo>CalmBank</Logo>
      <NavLinks>
        <a href="#">Personal</a>
        <a href="#">NRI</a>
        <a href="#">Business</a>
        <a href="#">iShop</a>
        <a href="#">Resources</a>
        <a href="#">About</a>
        <a href="#">Help</a>
        <a href="#">Complaints</a>
        <a href="#" style={{fontWeight:'bold'}}>Login</a>
      </NavLinks>
    </Nav>
  );
}
