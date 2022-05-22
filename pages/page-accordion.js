import Head from 'next/head'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'

export default function PageAccordion() {
  return (
    <div>
      <Head>
        <title>Accordion | Inaccessible components</title>
      </Head>

      <Layout>
        <h1>Accordion</h1>

        <Accordion />
      </Layout>
    </div>
  )
}
