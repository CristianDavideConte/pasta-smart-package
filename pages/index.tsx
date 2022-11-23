/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'

import CustomImageProps, { IMAGES_REPO_PATH } from '../common/classes/CustomImageProps'
import CustomImagesCarouselProps from '../common/classes/CustomImagesCarouselProps'
import CustomImagesCarouselComponent from '../common/components/CustomImagesCarouselComponent'
import Popup from '../common/classes/Popup'
import { useState } from 'react'
import LanguageSelector from '../common/languages/LanguageSelector'
import { useRouter } from 'next/router'
import NavbarButton from '../common/classes/NavbarButton'
import CustomNavbarComponentProps from '../common/classes/CustomNavbarComponentProps'
import CustomNavbarComponent from '../common/components/CustomNavbarComponent'
import CustomTimer from '../common/classes/CustomTimer'

const timer = new CustomTimer(
  9, 
  0,
  (remaningTime: number) => {
    const popupBody = document.getElementsByClassName("popup-body")[0];
    const customTimerContainer = document.getElementById("custom-timer-container");

    if(!popupBody || !customTimerContainer) {
      return;
    }
    
    popupBody.removeChild(customTimerContainer);
    popupBody.insertBefore(timer.getDisplayedTime(), popupBody.firstChild);
    
    if(remaningTime <= 0) {
      popupBody.classList.add("custom-timer-finished");
    }
  }
);

export default function Home() {

  const testProps = new Array(2);
  testProps.push(
    new CustomImageProps(
      "/images/carousel/pasta.png", 
      "Pasta",
      150, 
      150
    )
  );

  testProps.push(
    new CustomImageProps(
      "/images/logo/logo_no_bg_2.png", 
      "Packaging Lintes Logo",
      220, 
      220
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
            popupFlagIcon.src = IMAGES_REPO_PATH + "/images/flags/" + _language.getFlagIconName();
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
  
  const timerButton = new NavbarButton(
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

        const popupMainContent = timer.getDisplayedTime();

        const getSecondaryContent = () => {
          const customTimerButtonsContainer = document.createElement("div");
          const resumeTimerButton = document.createElement("button");
          const restartTimerButton = document.createElement("button");
          const resumeTimerButtonIcon = document.createElement("img");
          const restartTimerButtonIcon = document.createElement("img");
          let timeoutID: NodeJS.Timeout;
          
          resumeTimerButton.id = "custom-timer-button-resume";
          restartTimerButton.id = "custom-timer-button-restart";
          
          customTimerButtonsContainer.classList.add("popup-secondary-content");
          customTimerButtonsContainer.classList.add("custom-timer-buttons-container");
          resumeTimerButton.classList.add("custom-timer-button");
          restartTimerButton.classList.add("custom-timer-button");
          
          resumeTimerButtonIcon.src = timer.isRunning() ? IMAGES_REPO_PATH + "/images/timer/pause.png" : 
                                                          IMAGES_REPO_PATH + "/images/timer/play.png";
          restartTimerButtonIcon.src = IMAGES_REPO_PATH + "/images/timer/reset.png";

          resumeTimerButton.addEventListener("click", () => {
            if(timer.isRunning()) {
              timer.pause();
              resumeTimerButtonIcon.src = IMAGES_REPO_PATH + "/images/timer/play.png";
            } else {
              timer.resume();
              resumeTimerButtonIcon.src = IMAGES_REPO_PATH + "/images/timer/pause.png";
            }
          });

          restartTimerButton.addEventListener("touchstart", () => {
            timeoutID = setTimeout(() => {
              timer.activateDemoMode();
              popupBody.classList.remove("custom-timer-finished");
              popupBody.innerHTML = "";
              popupBody.appendChild(timer.getDisplayedTime());
              popupBody.appendChild(getSecondaryContent());
            }, 400);
          });

          restartTimerButton.addEventListener("click", () => {
            timer.reset();
            
            clearTimeout(timeoutID);
            popupBody.classList.remove("custom-timer-finished");
            popupBody.innerHTML = "";
            popupBody.appendChild(timer.getDisplayedTime());
            popupBody.appendChild(getSecondaryContent());
          });

          restartTimerButton.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            
            clearTimeout(timeoutID);
            timer.activateDemoMode();
            popupBody.classList.remove("custom-timer-finished");
            popupBody.innerHTML = "";
            popupBody.appendChild(timer.getDisplayedTime());
            popupBody.appendChild(getSecondaryContent());
          });

          resumeTimerButton.appendChild(resumeTimerButtonIcon);
          restartTimerButton.appendChild(restartTimerButtonIcon);
          
          if(timer.getRemaningTime() > 0) {
            customTimerButtonsContainer.appendChild(resumeTimerButton);
          } 
          customTimerButtonsContainer.appendChild(restartTimerButton);
          
          return customTimerButtonsContainer;
        }

        const popupSecondaryContent = getSecondaryContent();
        popupBody.innerHTML = "";
        popupBody.appendChild(popupMainContent);
        popupBody.appendChild(popupSecondaryContent);
        
        if(timer.getRemaningTime() <= 0) {
          popupBody.classList.add("custom-timer-finished");
        }
      });
    }
  );

  const navbar = CustomNavbarComponent(
    new CustomNavbarComponentProps(
      [
        languageSelectionButton,
        timerButton
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