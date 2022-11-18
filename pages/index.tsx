import Head from 'next/head'

import CustomImageProps from '../common/classes/CustomImageProps'
import CustomImagesCarouselProps from '../common/classes/CustomImagesCarouselProps'
import CustomImagesCarouselComponent from '../common/components/CustomImagesCarouselComponent'
import Popup from '../common/classes/Popup'
import { useState } from 'react'
import LanguageSelector from '../common/languages/LanguageSelector'
import { useRouter } from 'next/router'
import NavbarButton from '../common/classes/NavbarButton'
import CustomNavbarComponentProps from '../common/classes/CustomNavbarComponentProps'
import CustomNavbarComponent from '../common/components/CustomNavbarComponent'
import CustomImage from '../common/components/CustomImageComponent'

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
  
  const languageSelector = new LanguageSelector(languageURLString);
  const language = languageSelector.getLanguage();
  const translatedLabel = language.getTranslatedLabel();
  const translatedAllergens = language.getTranslatedAllergens(setShowModal);

  const languageSelectionButton = new NavbarButton(
    new CustomImageProps(
      "/images/flags/" + language.getFlagIconName(),
      language.getTranslatedSelectLanguageString(),
      100, 
      100
    ),
    (event) => {
      event.stopPropagation();

      setShowModal(true);

      window.requestAnimationFrame(() => {
          const popupBody = document.getElementsByClassName("popup-body")[0]; 
          const languageItem = event.nativeEvent.target as HTMLImageElement;
          const languageSelectorCarousel = 
          <div>
            {
              languageSelector.getAllLanguages().map(
                _language => {
                  return(
                    CustomImage(
                      new CustomImageProps(
                        "/images/flags/" + _language.getFlagIconName(),
                        _language.getTranslatedSelectLanguageString(),
                        100,
                        100
                      )
                    )         
                  )
                }
              )
            }
          </div>

          const popupMainContent = document.createElement("div");
          popupMainContent.innerHTML = "";

          const popupSecondaryContent = document.createElement("div");
          popupSecondaryContent.className = "popup-secondary-content";
          popupSecondaryContent.innerHTML = "<p>" + languageItem.alt + "</p>";
          
          popupBody.innerHTML = "";
          popupBody.appendChild(popupMainContent);
          popupBody.appendChild(popupSecondaryContent);
      })
    }
  )

  const navbar = CustomNavbarComponent(
    new CustomNavbarComponentProps(
      [
        languageSelectionButton
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

      {navbar}
      {carousel}
      {translatedLabel}
      {translatedAllergens}

      <div id="popup-root">
        <Popup show={showModal} onClose={() => setShowModal(false)}/>
      </div>
    </>
  )
}