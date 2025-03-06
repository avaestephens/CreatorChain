

import React, { useEffect, useState } from 'react'; 
import Head from 'next/head'
import { StateContext } from "@/context/StateContext"
import { createGlobalStyle } from 'styled-components'
import '../styles/global.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif; /* Default font for body text */
  }

  body {
    background-color: #f4f4f4; /* Light background */
    color: #333; /* Darker text for readability */
    line-height: 1.6;
  }

  h1, h2 {
    font-family: 'Fugaz One', sans-serif; /* Main headers use Fugaz One */
    font-weight: 400;
  }

  h3, h4, h5, h6 {
    font-family: 'Racing Sans One', sans-serif; /* Subheaders use Racing Sans One */
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>PSU Figure Skating</title>
        <meta name='description' content='Official website for Penn State Figure Skating'/>
        <meta name='robots' content='index, follow'/>

        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      {mounted && <GlobalStyle />} {/* Ensures styles apply only after mounting */}

      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}

// import React from 'react';
// import PrivateRoute from '@/backend/PrivateRoute';
// import Navbar from '@/components/Dashboard/Navbar';
// import { useStateContext } from '@/context/StateContext';
// import { logOut } from '@/backend/Auth';
// import { useRouter } from 'next/router';
// import styled from 'styled-components';

// const Dashboard = () => {
//   const { user, setUser } = useStateContext();
//   const router = useRouter();

//   const handleLogout = async () => {
//     await logOut(setUser);
//     router.push('/auth/login');
//   };

//   return (
//     <PrivateRoute>
//       <Navbar />
//       <Container>
//         <Header>Dashboard</Header>
//         <WelcomeMessage>Welcome, {user?.email}!</WelcomeMessage>
//         <Content>
//           <p>This is a protected page that only logged-in users can access.</p>
//           {/* Add your dashboard content here */}
//         </Content>
//         <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
//       </Container>
//     </PrivateRoute>
//   );
// };

// // Styled components
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 100px auto 0;
//   padding: 0 20px;
// `;

// const Header = styled.h1`
//   font-family: 'Fugaz One', sans-serif;
//   font-size: 2.5rem;
//   color: #041e42;
//   margin-bottom: 20px;
// `;

// const WelcomeMessage = styled.h2`
//   font-size: 1.5rem;
//   color: #333;
//   margin-bottom: 30px;
// `;

// const Content = styled.div`
//   background: white;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   margin-bottom: 30px;
// `;

// const LogoutButton = styled.button`
//   background: #041e42;
//   color: white;
//   padding: 10px 20px;
//   font-size: 1rem;
//   font-weight: bold;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background: #1a3c7f;
//   }
// `;

// export default Dashboard;