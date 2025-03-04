// // import React from 'react'; 
// // import Head from 'next/head'
// // import { StateContext } from "@/context/StateContext"
// // import { createGlobalStyle } from 'styled-components'
// // import { useEffect, useState } from 'react'
// // import '../styles/global.css';

// // export const GlobalStyle = createGlobalStyle`
// //   * {
// //     box-sizing: border-box;
// //     margin: 0;
// //     padding: 0;
// //   }
// // `

// // export default function App({ Component, pageProps }) {
// //   const [mounted, setMounted] = useState(false);

// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   return (
// //     <>
// //       <Head>
// //         <title>PSU Figure Skatingr</title>
// //         <meta name='description' content='Put a description here about your app'/>
// //         <meta name='robots' content='index, follow'/>
// //         <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png"/>
// //         <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png"/>
// //         <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png"/>
// //         <link rel="manifest" href="/favicon_package/site.webmanifest"/>
// //         <meta name="msapplication-TileColor" content="#da532c"/>
// //         <meta name="theme-color" content="#ffffff"/>
// //       </Head>

// //       {mounted && <GlobalStyle />} {/* Only render styles after mounting */}

// //       <StateContext>
// //         <Component {...pageProps} />
// //       </StateContext>
// //     </>
// //   )
// // }

// import React, { useEffect, useState } from 'react'; 
// import Head from 'next/head'
// import { StateContext } from "@/context/StateContext"
// import { createGlobalStyle } from 'styled-components'
// import '../styles/global.css';

// export const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif; /* Apply Poppins font site-wide */
//   }

//   body {
//     background-color: #f4f4f4; /* Light background */
//     color: #333; /* Darker text for readability */
//     line-height: 1.6;
//   }

//   h1, h2, h3, h4, h5, h6 {
//     font-family: 'Poppins', sans-serif;
//     font-weight: 600; /* Slightly bolder headings */
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//   }
// `

// export default function App({ Component, pageProps }) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>PSU Figure Skating</title>
//         <meta name='description' content='Official website for Penn State Figure Skating'/>
//         <meta name='robots' content='index, follow'/>
        
//         {/* Favicon Links */}
//         <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png"/>
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png"/>
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png"/>
//         <link rel="manifest" href="/favicon_package/site.webmanifest"/>
//         <meta name="msapplication-TileColor" content="#da532c"/>
//         <meta name="theme-color" content="#ffffff"/>

//         {/* Google Fonts - Poppins */}
//         <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"/>
//       </Head>

//       {mounted && <GlobalStyle />} {/* Ensures styles apply only after mounting */}

//       <StateContext>
//         <Component {...pageProps} />
//       </StateContext>
//     </>
//   )
// }


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
    font-family: 'Racing Sans One', sans-serif;
    font-weight: 400;
    
  }

  h3, h4, h5, h6 {
    font-family: 'Racing Sans One', sans-serif;
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
        <link rel="manifest" href="/favicon_package/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* Google Fonts - Poppins, Fugaz One, Racing Sans One */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Fugaz+One&family=Racing+Sans+One&display=swap" rel="stylesheet"/>
      </Head>

      {mounted && <GlobalStyle />} {/* Ensures styles apply only after mounting */}

      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}
