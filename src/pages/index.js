import Head from 'next/head'

// components
import GetSpeed from '../components/GetSpeed'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='m-0 p-0 outline-none box-border no-underline w-screen h-screen text-white bg-black'>
      <Head>
        <title>Speed Test</title>
        <meta name="description" content="check your internet speed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/*Main Component with tailwind styling.*/}
      <main className='flex-initial min-h-screen p-16 flex flex-col justify-center items-center'>
        <h1 className='m-0 text-6xl text-center'>
          Speed <span className='text-blue-600 no-underline'>Test</span>
        </h1>
          <GetSpeed />
      </main>
      <Footer />
    </div>
  )
}
