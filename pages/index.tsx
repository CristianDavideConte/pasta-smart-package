import Head from 'next/head'

import CustomImageProps from '../common/classes/CustomImageProps'
import Allergen from '../common/classes/Allergen'
import CustomImagesCarouselProps from '../common/classes/CustomImagesCarouselProps'
import CustomImagesCarouselComponent from '../common/components/CustomImagesCarouselComponent'
import AllergensCollectionComponent from '../common/components/AllergensCollectionComponent'
import AllergensCollectionProps from '../common/classes/AllergensCollectionProps'
import Popup from '../common/classes/Popup'
import { useState } from 'react'

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

  const allergens = AllergensCollectionComponent(
    new AllergensCollectionProps(
      [
        new Allergen(
          "eggs",
          "../images/eggs.png"
        ),
        new Allergen(
          "fish",
          "../images/fish.png"
        ),
        new Allergen(
          "shellfish",
          "../images/shellfish.png"
        ),
        new Allergen(
          "gluten",
          "../images/gluten.png"
        ),
        new Allergen(
          "nuts",
          "../images/nuts.png"
        )
      ],
      () => setShowModal(true)
    )
  );

  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <Head key={1234}>
        <title>Pasta Smart Package</title>
        <meta name="description" content="A sample website for an innovative smart packaging for pasta" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      {carousel}
      {allergens}
      
      <div id="popup-root">
        <Popup show={showModal} onClose={() => setShowModal(false)} title={"Default Popup"}>
          <p>Hello from the modal!</p>
        </Popup>
      </div>
    </>
  )
}