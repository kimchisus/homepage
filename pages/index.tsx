import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Kimchisus homepage" />
        <link rel="icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my homepage!
        </h1>
      </main>
    </div>
  )
}

export default Home
