import Head from 'next/head'

import CustomImageProps from '../common/classes/CustomImageProps'
import CustomImagesCarouselProps from '../common/classes/CustomImagesCarouselProps'
import CustomImagesCarouselComponent from '../common/components/CustomImagesCarouselComponent'
import Popup from '../common/classes/Popup'
import { useState } from 'react'
import LanguageSelector from '../common/languages/LanguageSelector'
import { useRouter } from 'next/router'

export default function Home() {

  const testProps = new Array(4);
  testProps.fill(
    new CustomImageProps(
      "/images/pasta.png", 
      "Test description",
      100, 
      100
    )
  );

  const carousel = CustomImagesCarouselComponent(
    new CustomImagesCarouselProps(
      testProps
    )
  );

  const [showModal, setShowModal] = useState(false);
  
  const router = useRouter();
  const languageURLIdentifier = "lan";
  const languageURLString = typeof router.query[languageURLIdentifier] === "string" ? router.query[languageURLIdentifier] :
                            router.query[languageURLIdentifier]?.length ? router.query[languageURLIdentifier][0] : 
                            "ita"; 
  const language = new LanguageSelector(languageURLString).getLanguage();
  const translatedLabel = language.getTranslatedLabel();
  const translatedAllergens = language.getTranslatedAllergens(setShowModal);
  
  
  //TODO: insert a fixed header to show the pasta logo

  return (
    <>
      <Head key={1234}>
        <title>Pasta Smart Package</title>
        <meta name="description" content="A sample website for an innovative smart packaging for pasta" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      {carousel}
      {translatedLabel}
      {translatedAllergens}

      <div id="popup-root">
        <Popup show={showModal} onClose={() => setShowModal(false)}/>
      </div>
    </>
  )
}