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
        <p className="description">HahaGames is an online game portal where you can play hundreds of free browser games. We have categories like action games, puzzle games, sports games, racing games, shooting games, strategy games, RPG games, MMORPG games, and many more! Play your favorite games anytime, anywhere.  Our selection of fun games is always growing, so you can enjoy hours of entertainment without ever having to download or install anything. Plus, we never have intrusive ads or pop-ups, so you can just focus on playing your favorite games. So why wait? Start playing today!
  
          Play the best free browser-based games at <a href="https://hahagames.com">HahaGames.com</a>. Crazy games from all kinds of categories!
        </p>
      </main>

      <Footer />
    </div>
  )
}
