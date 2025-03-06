import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts - Poppins, Fugaz One, Racing Sans One */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Fugaz+One&family=Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
