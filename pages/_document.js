
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Google Fonts - Poppins, Fugaz One, Racing Sans One */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Fugaz+One&family=Racing+Sans+One&display=swap"
          rel="stylesheet"
        />

        {/* Google Fonts - Bodoni Moda */}
        <link
          // href="https://fonts.googleapis.com/css2?family=Lora:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap"
          // rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"

        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


