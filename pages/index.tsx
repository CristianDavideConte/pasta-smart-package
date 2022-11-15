import Head from 'next/head'
import CustomImage from '../common/components/CustomImage'

import Image from "next/image"
import testImage from "../public/images/pasta.png"
import CustomImageProps from '../common/classes/CustomImageProps'

export default function Home() {
  const customImage = CustomImage(
    new CustomImageProps(
      "/images/pasta.png", 
      100, 
      100,
      "Test description"
    )
  );

  return (
    <>
      <Head>
        <title>Pasta Smart Package</title>
        <meta name="description" content="A sample website for an innovative smart packaging for pasta" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      {customImage}
    </>
  )
}