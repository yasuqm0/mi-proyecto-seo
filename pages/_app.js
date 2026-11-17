import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <meta name="google-site-verification" content="WWiasA5Etmr4fZ0XUFkVerMKV4Cb8373MC2VV2gfXnk" />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;