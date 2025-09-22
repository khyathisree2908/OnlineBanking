import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import PersonalMenu from './PersonalMenu';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Nav = styled.nav`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  position: relative;
`;
const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export default function Navbar() {
  const [showPersonal, setShowPersonal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const isLogged = localStorage.getItem('jklbank_loggedin') === 'true';
    const user = localStorage.getItem('jklbank_loggedin_user') || '';
    setLoggedIn(isLogged);
    setUsername(user);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('jklbank_loggedin');
    localStorage.removeItem('jklbank_loggedin_user');
    setLoggedIn(false);
    setUsername('');
    navigate('/login');
  };
  const [showDropdown, setShowDropdown] = useState(false);
  // Show menu on hover (desktop) or click (mobile)
  const handlePersonalEnter = () => setShowPersonal(true);
  const handlePersonalLeave = () => setShowPersonal(false);
  return (
    <Nav>
      <Logo>JKL Bank</Logo>
      <NavLinks>
        <div
          onMouseEnter={handlePersonalEnter}
          onMouseLeave={handlePersonalLeave}
          onClick={() => setShowPersonal(v => !v)}
          style={{ position: 'relative', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Personal
          {showPersonal && <PersonalMenu onClose={() => setShowPersonal(false)} />}
        </div>
        <Link to="/home" style={{fontWeight:'bold'}}>Home</Link>
        <Link to="/nri">NRI</Link>
        <Link to="/business">Business</Link>
        {/* <Link to="/ishop">iShop</Link> */}
        <Link to="/resources">Resources</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
        <Link to="/complaints">Complaints</Link>
        {loggedIn ? (
          <div style={{display:'flex',alignItems:'center',gap:'0.5rem',position:'relative'}}>
            <FaUserCircle size={28} style={{cursor:'pointer'}} onClick={() => setShowDropdown(v => !v)} />
            <span style={{fontWeight:'bold',color:'#fff',fontSize:'1.05rem'}}>{username}</span>
            {showDropdown && (
              <div style={{position:'absolute',top:'2.2rem',right:0,background:'#fff',color:'#222',borderRadius:'1rem',boxShadow:'0 2px 12px rgba(0,0,0,0.10)',padding:'1rem 1.5rem',minWidth:'180px',zIndex:10}}>
                <button onClick={handleLogout} style={{background:'#4A90E2',color:'#fff',border:'none',borderRadius:'1rem',padding:'0.5rem 1.2rem',width:'100%',cursor:'pointer'}}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" style={{fontWeight:'bold'}}>Login</Link>
            <Link to="/signup" style={{fontWeight:'bold'}}>Sign Up</Link>
          </>
        )}
      </NavLinks>
    </Nav>
  );
}
