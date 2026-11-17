import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Head>
        <meta name="google-site-verification" content="TU_CODIGO_DE_GOOGLE_AQUI" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;