import Head from 'next/head';
import '../src/globals.css';
import useWindowSize from '../hooks/useWindowSize'

export default function App({ Component, pageProps }) {

const windowSize = useWindowSize(); 

  return (    
    <>
        <Head>
            <meta name="keywords" content="Enzo Rodriguez, NJ, New Jersey, Web Developer, Software Developer, NY, New York, Programmer" />
            <meta name="author" content="Enzo Rodriguez" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} windowSize={windowSize}/>
    </>
    )
}