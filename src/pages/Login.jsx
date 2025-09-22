import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSignInAlt, FaUser, FaLock } from 'react-icons/fa';
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

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('jklbank_user'));
    if (user && user.username === form.username && user.password === form.password) {
      localStorage.setItem('jklbank_loggedin', 'true');
      localStorage.setItem('jklbank_loggedin_user', user.username);
      setError('');
      alert('Login successful!');
      navigate('/home');
    } else {
      setError('Login failed: Invalid username or password');
    }
  };
  return (
    <Wrapper>
      <Title><FaSignInAlt style={{marginRight: '0.5rem'}}/>Login</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <FaUser />
          <Input name="username" type="text" placeholder="Username" value={form.username} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <FaLock />
          <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        </InputGroup>
        <SubmitBtn type="submit">Login</SubmitBtn>
      </Form>
      {error && <div style={{color:'#e74c3c',marginTop:'1rem',fontWeight:'bold'}}>{error}</div>}
      <Note>Don't have an account? <a href="/signup" style={{color:'#4A90E2'}}>Sign Up</a></Note>
    </Wrapper>
  );
}
