import Head from 'next/head'
import CustomImage from '../common/components/CustomImage'

import Image from "next/image"
import testImage from "../common/static/pasta.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Pasta Smart Package</title>
        <meta name="description" content="A sample website for an innovative smart packaging for pasta" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      <Image 
        src = {testImage} 
        alt = "picture of pasta"
        width={100} height={100}
      />
    </>
  )
}

/*
 


 */
//<CustomImage imagePath="../common/static/pasta.png" description="Test description"/>