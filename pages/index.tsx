/* eslint-disable @next/next/no-sync-scripts */
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

        const popupMainContent = document.createElement("div");
        popupMainContent.classList.add("popup-flags-carousel");
        popupMainContent.addEventListener("wheel", (event) => {
          event.stopPropagation();
          event.preventDefault();
          popupMainContent.scrollLeft += event.deltaX + event.deltaY;
        });

        languageSelector.getAllLanguages().forEach(
          _language => {
            const popupFlagIconContainer = document.createElement("div");
            const popupFlagIcon = document.createElement("img");
            popupFlagIconContainer.className = "custom-image-container";
            popupFlagIcon.classList.add("custom-image");
            popupFlagIcon.classList.add("custom-image");
            popupFlagIcon.src = "/images/flags/" + _language.getFlagIconName();
            popupFlagIcon.alt = _language.getTranslatedSelectLanguageString();
            popupFlagIcon.width = 100;
            popupFlagIcon.height = 100;
            popupFlagIcon.addEventListener("click", (event) => {
              router.replace(
                {
                  pathname: "/",
                  query: {
                    lan: _language.getLanguageId()
                  }
                }
              );
              setShowModal(false)
            });
            
            popupFlagIconContainer.append(popupFlagIcon);
            popupMainContent.append(popupFlagIconContainer);
          }
        )
        const popupSecondaryContent = document.createElement("div");
        popupSecondaryContent.classList.add("popup-secondary-content");
        popupSecondaryContent.classList.add("popup-language-text");
        popupSecondaryContent.innerHTML = "<p>" + languageItem.alt + "</p>";
        
        popupBody.innerHTML = "";
        popupBody.appendChild(popupMainContent);
        popupBody.appendChild(popupSecondaryContent);
      })
    }
  )
  
  const startTimerButton = new NavbarButton(
    new CustomImageProps(
      "/images/timer.png",
      language.getTranslatedStartTimerString(),
      100, 
      100
    ),
    (event) => {
      event.stopPropagation();

      setShowModal(true);

      window.requestAnimationFrame(() => {
        const popupBody = document.getElementsByClassName("popup-body")[0]; 
        const languageItem = event.nativeEvent.target as HTMLImageElement;

        const popupMainContent = document.createElement("div");

        const popupSecondaryContent = document.createElement("div");
        popupSecondaryContent.classList.add("popup-secondary-content");
        popupSecondaryContent.classList.add("popup-language-text");
        popupSecondaryContent.innerHTML = "<p>" + languageItem.alt + "</p>";
        
        popupBody.innerHTML = "";
        popupBody.appendChild(popupMainContent);
        popupBody.appendChild(popupSecondaryContent);
      });
    }
  );

  const navbar = CustomNavbarComponent(
    new CustomNavbarComponentProps(
      [
        languageSelectionButton,
        startTimerButton
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
        <Popup show={showModal} onClose={() => setShowModal(false)}>
        </Popup>
      </div>
    </>
  )
}