import Head from 'next/head'
import styles from '../styles/Home.module.css'

// components
import GetSpeed from '../components/GetSpeed'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Speed Test</title>
        <meta name="description" content="check your internet speed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Speed <span>Test</span>
        </h1>
          <GetSpeed />
      </main>
      <Footer />
    </div>
  )
}
