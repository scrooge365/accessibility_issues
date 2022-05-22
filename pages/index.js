import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inaccessible components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Inaccessible components</h1>

        <ul>
          <li><Link href="/page-accordion">Accordion</Link></li>
        </ul>
      </Layout>
    </div>
  )
}
