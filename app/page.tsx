import Banner from '@/components/Banner/Banner'
import Bottom from '@/components/Bottom/Bottom'
import Commit from '@/components/Commit/Commit'
import Diverse from '@/components/Diverse/Diverse'
import HireAssist from '@/components/HIreAssist/HireAssist'
import HowItWork from '@/components/HowItWork/HowItWork'
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
      <HireAssist />
      <HowItWork />
      <Commit />
      <Diverse />
      <Practice />
      <Bottom />
    </>
  )
}
