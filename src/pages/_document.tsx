import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Richmond West Dental" />
        <link rel="shortcut icon" href="/richmond-logo.svg" type="image/svg" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Halant:wght@300;400&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
