import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Meta tags */}
        <meta name="description" content="Custom cabinetry and fine woodwork by Oak & Iron Carpentry. Kitchens, built-ins, stair details, and one-off pieces." />
        <meta name="keywords" content="custom carpentry, cabinetry, woodwork, kitchens, furniture, built-ins" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

