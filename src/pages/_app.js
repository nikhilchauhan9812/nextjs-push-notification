import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
<>
<Head>
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
     

<Component {...pageProps} />
     
</>
  )
  
}
