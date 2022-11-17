import Allergen from "../classes/Allergen";
import AllergensCollectionProps from "../classes/AllergensCollectionProps";
import CustomLabelProps from "../classes/CustomLabelProps";
import AllergensCollectionComponent from "../components/AllergensCollectionComponent";
import CustomLabelComponent from "../components/CustomLabelComponent";
import ILanguage from "./ILanguage";

class English implements ILanguage {
    constructor() {}
    
    getTranslatedLabel = () => CustomLabelComponent(
        new CustomLabelProps(
            "Fusilli N.98",
            500,
            "10-08-2023",
            [
                "Ingrédients",
                "farine de blé dur",
                "eau",
            ],
            [
                "VALEURS NUTRITIONNELLES MOYENNES, , 100g, 85g, %AR/85g",
                "ÉNERGIE, kJ/kcal, 1521/359, 1293/305, 15%",
                "GRAISSES, g, 2.0, 1.7, 2%",
                "dont ACIDES GRAS SATURÉS, g, 0.5, 0.4, 2%",
                "GLUCIDES, g, 71.2, 60.5, 23%",
                "dont SUCRES, g, 3.5, 3.0, 3%",
                "FIBRES, g, 3.0, 2.6, -",
                "PROTÉINES, g, 12.5, 10.6, 21%",
                "SEL, g, 0.013, 0.011, 0%"
            ]
        )
    );

    getTranslatedAllergens = (setShowModal) => AllergensCollectionComponent(
        new AllergensCollectionProps(
            [
                new Allergen(
                    "Oeufs",
                    "../images/eggs.png"
                ),
                new Allergen(
                    "Poinsson",
                    "../images/fish.png"
                ),
                new Allergen(
                    "Palourdes",
                    "../images/shellfish.png"
                ),
                new Allergen(
                    "Gluten",
                    "../images/gluten.png"
                ),
                new Allergen(
                    "Noisettes",
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

export default English;