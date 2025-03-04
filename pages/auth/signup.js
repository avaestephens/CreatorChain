// import React, { useState } from 'react'
// import styled from 'styled-components'
// import { useRouter } from 'next/router'
// import { useStateContext } from '@/context/StateContext'
// import { isEmailInUse, register} from '@/backend/Auth'
// import Link from 'next/link'
// import Navbar from '@/components/Dashboard/Navbar'
// const Signup = () => {

//   const { user, setUser } = useStateContext()
//   const [ email, setEmail ] = useState('')
//   const [ password, setPassword ] = useState('')

//   const router = useRouter()

//   async function validateEmail(){
//     const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//     if(emailRegex.test(email) == false ){
//         return false;
//     }
//     console.log('so far so good...')
//     const emailResponse = await isEmailInUse(email)
//     console.log('email response', emailResponse)
//     if(emailResponse.length == 0 ){
//         return false;
//     }

//     return true;
// }

//   async function handleSignup(){
//     const isValidEmail = await validateEmail()
//     // console.log('isValidEmail', isValidEmail)
//     // if(!isValidEmail){ return; }
    
//     try{
//         await register(email, password, setUser)
//         router.push('/dashboard')
//     }catch(err){
//         console.log('Error Signing Up', err)
//     }
//   }


//   return (
//     <>
//     <Navbar/>
//     <Section>
//         <Header>Signup</Header>
//         <InputTitle>Email</InputTitle>
//         <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//         <InputTitle>Password</InputTitle>
//         <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

//         <UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer" target="_blank"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer" target="_blank">Privacy Policy.</UserAgreementSpan></UserAgreementText>

//         <MainButton onClick={handleSignup}>Signup</MainButton>

//     </Section>
//     </>
//   )
// }

// const Section = styled.section`
//   display: flex;
// `;

// const Header = styled.h1`
//   font-size: 24px; /* Adjusted for better scalability */
// `;

// const Input = styled.input`
//   font-size: 16px;

// `;

// const InputTitle = styled.label` /* Changed to label for semantics */
//   font-size: 14px;
// `;

// const MainButton = styled.button`
//   font-size: 16px;

// `;

// const UserAgreementText = styled.p`
//   font-size: 12px;
// `;

// const UserAgreementSpan = styled(Link)` 
//   color: #007bff;

// `;


// export default Signup


import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
import { isEmailInUse, register } from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
//import { register } from '@/backend/Auth'; // Import from backend/Auth.js


const Signup = () => {
  const { setUser } = useStateContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function validateEmail() {
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!emailRegex.test(email)) {
      setError('Invalid email format.')
      return false
    }

    const emailResponse = await isEmailInUse(email)
    if (emailResponse.length === 0) {
      setError('This email is already in use.')
      return false
    }

    setError('')
    return true
  }

  async function handleSignup() {
    setError('') // Clear previous errors
    const isValidEmail = await validateEmail()
    if (!isValidEmail) return

    try {
      await register(email, password, setUser)
      router.push('/dashboard')
    } catch (err) {
      console.log('Error Signing Up', err)
      setError('Error signing up. Please try again.')
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
          </InputGroup>

          <AgreementText>
            By signing up, you agree to our{' '}
            <AgreementLink href='https://www.psu.edu/legal-statements' target="_blank">Terms of Use</AgreementLink> and{' '}
            <AgreementLink href='https://www.psu.edu/web-privacy-statement' target="_blank">Privacy Policy</AgreementLink>.
          </AgreementText>

          <SignupButton onClick={handleSignup}>Create Account</SignupButton>

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
  height: 100vh; /* Full height */
  background-color: #f4f4f4; /* Light background */
  padding-top: 80px; /* Adjust based on navbar height */
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
  color: #041e42; /* PSU Navy */
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

  &:hover {
    background: #1a3c7f;
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
