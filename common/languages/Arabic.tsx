import Allergen from "../classes/Allergen";
import AllergensCollectionProps from "../classes/AllergensCollectionProps";
import CustomLabelProps from "../classes/CustomLabelProps";
import AllergensCollectionComponent from "../components/AllergensCollectionComponent";
import CustomLabelComponent from "../components/CustomLabelComponent";
import ILanguage from "./ILanguage";

class Arabic implements ILanguage {
    constructor() {}
    
    getLanguageId() : string {
        return "arb";
    }

    getFlagIconName = () => {
        return this.getLanguageId() + ".png";
    }

    getTranslatedSelectLanguageString = () => {
        return "اختر لغة";
    }

    getTranslatedStartTimerString = () => {
        return "بداية";
    }

    getTranslatedLabel = () => CustomLabelComponent(
        new CustomLabelProps(
            "فوسيلي N.98",
            500,
            "10-08-2023",
            [
                "مكونات",
                "دقيق القمح القاسي",
                "ماء",
            ],
            [
                "متوسط ​​القيم الغذائية, , 100g, 85g, %AR/85g",
                "قوة, kJ/kcal, 1521/359, 1293/305, 15%",
                "الدهون, g, 2.0, 1.7, 2%",
                "منها الأحماض الدهنية المشبعة, g, 0.5, 0.4, 2%",
                "الكربوهيدرات, g, 71.2, 60.5, 23%",
                "من أي أنواع السكريات, g, 3.5, 3.0, 3%",
                "ألياف, g, 3.0, 2.6, -",
                "البروتينات, g, 12.5, 10.6, 21%",
                "ملح, g, 0.013, 0.011, 0%"
            ]
        )
    );

    getTranslatedAllergens = (setShowModal) => AllergensCollectionComponent(
        new AllergensCollectionProps(
            [
                new Allergen(
                    "بيضة",
                    "../images/eggs.png"
                ),
                new Allergen(
                    "سمك",
                    "../images/fish.png"
                ),
                new Allergen(
                    "الرخويات",
                    "../images/shellfish.png"
                ),
                new Allergen(
                    "الغولتين",
                    "../images/gluten.png"
                ),
                new Allergen(
                    "المكسرات",
                    "../images/nuts.png"
                )
            ],
            (event) => {
                setShowModal(true);

                window.requestAnimationFrame(() => {
                    const popupBody = document.getElementsByClassName("popup-body")[0]; 
                    const selectedAllergen = event.nativeEvent.target as HTMLImageElement;

                    const popupMainContent = (selectedAllergen).cloneNode(true);

                    const popupSecondaryContent = document.createElement("div");
                    popupSecondaryContent.className = "popup-secondary-content";
                    popupSecondaryContent.innerHTML = "<p>" + selectedAllergen.alt + "</p>";
                    
                    popupBody.innerHTML = "";
                    popupBody.appendChild(popupMainContent);
                    popupBody.appendChild(popupSecondaryContent);
                })
            }
        )
    );
}

export default Arabic;