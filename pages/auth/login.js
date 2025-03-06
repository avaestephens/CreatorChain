import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import { login } from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'

const Login = () => {
  const { setUser } = useStateContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin() {
    setError('') // Clear previous errors

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    try {
      await login(email, password, setUser)
      router.push('/members-only')
    } catch (err) {
      console.error('Error logging in:', err)
      
      // More specific error messages based on Firebase error codes
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid email or password.')
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed login attempts. Please try again later.')
      } else {
        setError('Error logging in. Please try again.')
      }
    }
  }

  return (
    <>
      <Navbar />
      <Section>
        <FormContainer>
          <Header>Log In</Header>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <InputGroup>
            <InputLabel>Email</InputLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputGroup>

          <InputGroup>
            <InputLabel>Password</InputLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputGroup>

          <LoginButton onClick={handleLogin}>Log In</LoginButton>

          <SignupRedirect>
            Don't have an account? <Link href="/auth/signup" passHref><SignupLink>Sign up</SignupLink></Link>
          </SignupRedirect>
        </FormContainer>
      </Section>
    </>
  )
}

// STYLED COMPONENTS (Same styling as signup form)
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding-top: 80px;
`

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const Header = styled.h1`
  font-family: 'Fugaz One', sans-serif;
  font-size: 2rem;
  color: #041e42;
  margin-bottom: 20px;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 10px;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 15px;
`

const InputLabel = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  transition: border 0.3s ease;

  &:focus {
    border-color: #041e42;
    outline: none;
  }
`

const LoginButton = styled.button`
  background: #041e42;
  color: white;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: #1a3c7f;
  }
`

const SignupRedirect = styled.p`
  font-size: 0.9rem;
  margin-top: 15px;
`

const SignupLink = styled.a`
  color: #007bff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default Login