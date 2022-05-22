import Header from '../Header';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="ACTUM Collection of inaccessible components used for education purposes" />
      </Head>
      <Header />

      <div>
        {children}
      </div>
    </>
  )
}
