import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Gaming Site Prototype</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the craziest free game website!" />
        <p className="description">
          Play the best free browser-based games at <a href="https://hahagames.com">HahaGames.com</a>. Crazy games from all kinds of categories!
        </p>
      </main>

      <Footer />
    </div>
  )
}
