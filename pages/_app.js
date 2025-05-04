
import React, { useEffect, useState } from 'react'; 
import Head from 'next/head';
import { StateContext } from "@/context/StateContext";
import { createGlobalStyle } from 'styled-components';
import '../styles/global.css';
import { SponsorshipProvider } from '../context/useSponsorshipContext';


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif; /* Default font for body text */
  }

  body {
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lora', serif; /* Corrected font name */
    font-weight: 400;
    font-style: normal;
    font-weight: 400;
    font-style: normal;
    font-optical-sizing: auto;
    font-variation-settings: "wght" 400; /* Keeps it consistent with Google Fonts preview */
  }

 

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
    <SponsorshipProvider>
      <Head>
        <title>CreatorChain</title>
        <meta name="description" content="Official website for Penn State Figure Skating" />
        <meta name="robots" content="index, follow" />

        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {mounted && <GlobalStyle />}

      <StateContext>
        <Component {...pageProps} />
      </StateContext>
      </SponsorshipProvider>
    </>
  );
}
