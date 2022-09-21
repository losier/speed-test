import Head from 'next/head'

// components
import GetSpeed from '../components/GetSpeed'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='p-[2rem]'>
      <Head>
        <title>Speed Test</title>
        <meta name="description" content="check your internet speed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/*Main Component with tailwind styling.*/}
      <main className='min-h-[100vh] p-[4rem] flex-1 flex-col justify-center items-center '>
        <h1 className='m-0 leading-relaxed text-base text-center'>
          Speed <span>Test</span>
        </h1>
          <GetSpeed />
      </main>
      <Footer />
    </div>
  )
}
