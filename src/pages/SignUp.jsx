import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserPlus, FaEnvelope, FaMobileAlt, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 420px;
  margin: 3rem auto;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(74, 144, 226, 0.10);
  padding: 2.5rem 2rem 2rem 2rem;
`;
const Title = styled.h1`
  color: #4A90E2;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #f5faff;
  border-radius: 1rem;
  padding: 0.7rem 1rem;
  gap: 0.7rem;
`;
const Input = styled.input`
  border: none;
  background: transparent;
  font-size: 1rem;
  flex: 1;
  outline: none;
`;
const SubmitBtn = styled.button`
  background: #4A90E2;
  color: #fff;
  border: none;
  border-radius: 1.2rem;
  padding: 0.9rem 1.8rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #50E3C2; color: #222B45; }
`;
const Note = styled.div`
  color: #888;
  font-size: 0.95rem;
  margin-top: 1.2rem;
`;

export default function SignUp() {
  const [form, setForm] = useState({ username: '', name: '', email: '', mobile: '', password: '', confirm: '' });
  const navigate = useNavigate();
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert('Passwords do not match');
      return;
    }
    // Save credentials to localStorage
    localStorage.setItem('jklbank_user', JSON.stringify({ username: form.username, password: form.password, name: form.name }));
    alert('Sign up successful! Please login.');
    navigate('/login');
  };
  return (
    <Wrapper>
      <Title><FaUserPlus style={{marginRight: '0.5rem'}}/>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <FaUser />
          <Input name="username" type="text" placeholder="Username" value={form.username} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <FaUser />
          <Input name="name" type="text" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <FaEnvelope />
          <Input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <FaMobileAlt />
          <Input name="mobile" type="tel" placeholder="Mobile number" value={form.mobile} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <FaLock />
          <Input name="password" type="password" placeholder="Create password" value={form.password} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <FaLock />
          <Input name="confirm" type="password" placeholder="Confirm password" value={form.confirm} onChange={handleChange} required />
        </InputGroup>
        <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginTop:'0.5rem'}}>
          <input type="checkbox" required id="terms" style={{accentColor:'#4A90E2'}} />
          <label htmlFor="terms" style={{fontSize:'0.97rem',color:'#555'}}>I agree to the <a href="#" style={{color:'#4A90E2'}}>Terms & Conditions</a></label>
        </div>
        <SubmitBtn type="submit">Create Account</SubmitBtn>
      </Form>
      <Note>Already have an account? <a href="/login" style={{color:'#4A90E2'}}>Login</a></Note>
    </Wrapper>
  );
}
