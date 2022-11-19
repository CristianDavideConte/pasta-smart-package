import Allergen from "../classes/Allergen";
import AllergensCollectionProps from "../classes/AllergensCollectionProps";
import CustomLabelProps from "../classes/CustomLabelProps";
import AllergensCollectionComponent from "../components/AllergensCollectionComponent";
import CustomLabelComponent from "../components/CustomLabelComponent";
import ILanguage from "./ILanguage";

class Italian implements ILanguage {
    constructor() {}
    
    getLanguageId() : string {
        return "ita";
    }

    getFlagIconName = () => {
        return this.getLanguageId() + ".png";
    }
    
    getTranslatedSelectLanguageString = () => {
        return "Seleziona una lingua";
    }

    getTranslatedStartTimerString = () => {
        return "Avvia";
    }
    
    getTranslatedLabel = () => CustomLabelComponent(
        new CustomLabelProps(
            "Fusilli N.98",
            500,
            "10-08-2023",
            [
                "Ingredienti",
                "semola di grano duro",
                "acqua",
            ],
            [
                "VALORI NUTRIZIONALI MEDI, , 100g, 85g, %AR/85g",
                "ENERGIA, kJ/kcal, 1521/359, 1293/305, 15%",
                "GRASSI, g, 2.0, 1.7, 2%",
                "di cui ACIDI GRASSI SATURI, g, 0.5, 0.4, 2%",
                "CARBOIDRATI, g, 71.2, 60.5, 23%",
                "di cui ZUCCHERI, g, 3.5, 3.0, 3%",
                "FIBRE, g, 3.0, 2.6, -",
                "PROTEINE, g, 12.5, 10.6, 21%",
                "SALE, g, 0.013, 0.011, 0%"
            ]
        )
    );

    getTranslatedAllergens = (setShowModal) => AllergensCollectionComponent(
        new AllergensCollectionProps(
            [
                new Allergen(
                    "Glutine",
                    "/images/gluten.png"
                ),
                new Allergen(
                    "Soia",
                    "/images/soy.png"
                ),
                new Allergen(
                    "Senape",
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

export default Italian;