import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import { isEmailInUse, register } from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'

const Signup = () => {
  const { setUser } = useStateContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function validateEmail() {
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!emailRegex.test(email)) {
      setError('Invalid email format.')
      return false
    }

    try {
      const isInUse = await isEmailInUse(email)
      if (isInUse) {
        setError('This email is already in use.')
        return false
      }
    } catch (err) {
      console.error('Error checking email:', err)
      setError('Error checking email. Please try again.')
      return false
    }

    setError('')
    return true
  }

  function validatePassword() {
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return false
    }
    return true
  }

  // async function handleSignup() {
  //   setError('') // Clear previous errors
  //   setIsLoading(true)
    
  //   try {
  //     const isValidEmail = await validateEmail()
  //     if (!isValidEmail) {
  //       setIsLoading(false)
  //       return
  //     }
      
  //     const isValidPassword = validatePassword()
  //     if (!isValidPassword) {
  //       setIsLoading(false)
  //       return
  //     }

  //     await register(email, password, setUser)
  //     router.push('/members-only')
  //   } catch (err) {
  //     console.error('Error Signing Up', err)
      
  //     // More specific error messages based on Firebase error codes
  //     if (err.code === 'auth/email-already-in-use') {
  //       setError('This email is already in use.')
  //     } else if (err.code === 'auth/weak-password') {
  //       setError('Password is too weak. Please use at least 6 characters.')
  //     } else if (err.code === 'auth/invalid-email') {
  //       setError('Invalid email format.')
  //     } else if (err.code?.includes('api-key-not-valid')) {
  //       setError('Firebase configuration error. Please contact support.')
  //       console.error('Firebase API Key not valid. Check your environment variables.')
  //     } else {
  //       setError('Error signing up. Please try again.')
  //     }
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }


  async function handleSignup() {
    setError('') // Clear previous errors
    setIsLoading(true)
    
    try {
      const isValidEmail = await validateEmail()
      if (!isValidEmail) {
        setIsLoading(false)
        return
      }
      
      const isValidPassword = validatePassword()
      if (!isValidPassword) {
        setIsLoading(false)
        return
      }
  
      // Register the user
      const user = await register(email, password, setUser)
      console.log("User registered successfully:", user.uid)
      
      // Use a short timeout to ensure state updates complete
      setTimeout(() => {
        router.push('/members-only')
      }, 500)
    } catch (err) {
      console.error('Error Signing Up', err)
      
      // More specific error messages based on Firebase error codes
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use.')
      } else if (err.code === 'auth/weak-password') {
        setError('Password is too weak. Please use at least 6 characters.')
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email format.')
      } else if (err.code?.includes('api-key-not-valid')) {
        setError('Firebase configuration error. Please contact support.')
        console.error('Firebase API Key not valid. Check your environment variables.')
      } else {
        setError('Error signing up. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }




  return (
    <>
      <Navbar />
      <Section>
        <FormContainer>
          <Header>Sign Up</Header>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <InputGroup>
            <InputLabel>Email</InputLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputGroup>

          <InputGroup>
            <InputLabel>Password</InputLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <PasswordHint>Password must be at least 6 characters long</PasswordHint>
          </InputGroup>

          <AgreementText>
            By signing up, you agree to our{' '}
            <AgreementLink href='https://www.psu.edu/legal-statements' target="_blank">Terms of Use</AgreementLink> and{' '}
            <AgreementLink href='https://www.psu.edu/web-privacy-statement' target="_blank">Privacy Policy</AgreementLink>.
          </AgreementText>

          <SignupButton onClick={handleSignup} disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </SignupButton>

          <LoginRedirect>
            Already have an account? <Link href="/auth/login" passHref><LoginLink>Log in</LoginLink></Link>
          </LoginRedirect>
        </FormContainer>
      </Section>
    </>
  )
}

// STYLED COMPONENTS

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 80px 20px;
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

const PasswordHint = styled.span`
  font-size: 0.75rem;
  color: #666;
  margin-top: 4px;
`

const AgreementText = styled.p`
  font-size: 0.8rem;
  color: #555;
  margin-top: 10px;
`

const AgreementLink = styled.a`
  color: #041e42;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const SignupButton = styled.button`
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
  opacity: ${props => props.disabled ? 0.7 : 1};

  &:hover {
    background: ${props => props.disabled ? '#041e42' : '#1a3c7f'};
  }
`

const LoginRedirect = styled.p`
  font-size: 0.9rem;
  margin-top: 15px;
`

const LoginLink = styled.a`
  color: #007bff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default Signup