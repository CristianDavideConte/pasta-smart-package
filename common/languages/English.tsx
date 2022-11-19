import Allergen from "../classes/Allergen";
import AllergensCollectionProps from "../classes/AllergensCollectionProps";
import CustomLabelProps from "../classes/CustomLabelProps";
import AllergensCollectionComponent from "../components/AllergensCollectionComponent";
import CustomLabelComponent from "../components/CustomLabelComponent";
import ILanguage from "./ILanguage";

class English implements ILanguage {
    constructor() {}
    
    getLanguageId() : string {
        return "eng";
    }

    getFlagIconName = () => {
        return this.getLanguageId() + ".png";
    }
    
    getTranslatedSelectLanguageString = () => {
        return "Select a language";
    }

    getTranslatedStartTimerString = () => {
        return "Start";
    }

    getTranslatedLabel = () => CustomLabelComponent(
        new CustomLabelProps(
            "Fusilli N.98",
            500,
            "10-08-2023",
            [
                "Ingredients",
                "durum wheat semolina",
                "water",
            ],
            [
                "AVERAGE NUTRITIONAL VALUES, , 100g, 85g, %AR/85g",
                "ENERGY, kJ/kcal, 1521/359, 1293/305, 15%",
                "FATS, g, 2.0, 1.7, 2%",
                "of which SATURATED FATTY ACIDS, g, 0.5, 0.4, 2%",
                "CARBOHYDRATES, g, 71.2, 60.5, 23%",
                "of which SUGAR, g, 3.5, 3.0, 3%",
                "FIBERS, g, 3.0, 2.6, -",
                "PROTEINS, g, 12.5, 10.6, 21%",
                "SALT, g, 0.013, 0.011, 0%"
            ]
        )
    );

    getTranslatedAllergens = (setShowModal) => AllergensCollectionComponent(
        new AllergensCollectionProps(
            [
                new Allergen(
                    "Gluten",
                    "/images/gluten.png"
                ),
                new Allergen(
                    "Soy",
                    "/images/soy.png"
                ),
                new Allergen(
                    "Mustard",
                    "/images/mustard.png"
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

export default English;