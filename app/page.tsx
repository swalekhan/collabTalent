import Banner from '@/components/Banner/Banner'
import Commit from '@/components/Commit/Commit'
import Diverse from '@/components/Diverse/Diverse'
import Practice from '@/components/Practice/Practice'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Collab Talent</title>
        <meta name="description" content="Prepare the smart way and get objective feedback on how you present yourself using AI technology." />
      </Head>

      <Banner />
      <Commit />
      <Diverse />
      <Practice />
    </>
  )
}
