import React, { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';
import Header from 'components/Header';
import Footer from 'components/Footer';

ReactGA.initialize('G-TG6XPV9ZGL');

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    ReactGA.set({ page: router.asPath });
    ReactGA.pageview(router.asPath);
  }, [router.pathname]);

  return (
    <div className="container">
      <Head>
        <title key="title">L2now.info</title>
        <link rel="icon" href="/favicon.png" />
        <link href="https://use.typekit.net/jrq0bbf.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <PlausibleProvider domain="L2now.info">
        <Header />

        <Component {...pageProps} />

        <Footer />
      </PlausibleProvider>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        footer {
          width: 100%;
          height: auto;
          border-top: 1px solid lightGray;
          text-align: center;
          padding: 2rem 0;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'sofia-pro', sans-serif;
          background: #f9fafc;
          color: #091636;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: #091636;
          text-decoration: underline;
        }
        a:hover {
          color: #666666;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default App;
