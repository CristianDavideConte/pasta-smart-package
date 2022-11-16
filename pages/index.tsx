import Head from 'next/head'
import CustomLabel from '../common/components/CustomLabelComponent'

//import testImage from "../public/images/pasta.png"
import CustomImageProps from '../common/classes/CustomImageProps'
import CustomLabelProps from '../common/classes/CustomLabelProps'
import Allergen from '../common/classes/Allergen'
import CustomImagesCarouselProps from '../common/classes/CustomImagesCarouselProps'
import CustomImagesCarouselComponent from '../common/components/CustomImagesCarouselComponent'

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

  const customLabel = CustomLabel(
    new CustomLabelProps(
      "10-08-2022",
      ["farina", "uova"],
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
      ]
    )
  );

  return (
    <>
      <Head key={1234}>
        <title>Pasta Smart Package</title>
        <meta name="description" content="A sample website for an innovative smart packaging for pasta" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`} />
      </Head>

      {carousel}
      {customLabel}
    </>
  )
}