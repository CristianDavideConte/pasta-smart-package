import Allergen from "../classes/Allergen";
import AllergensCollectionProps from "../classes/AllergensCollectionProps";
import CustomLabelProps from "../classes/CustomLabelProps";
import AllergensCollectionComponent from "../components/AllergensCollectionComponent";
import CustomLabelComponent from "../components/CustomLabelComponent";
import ILanguage from "./ILanguage";

class Italian implements ILanguage {
    constructor() {}
    
    getFlagIconName = () => {
        return "esp.png";
    }

    getTranslatedSelectLanguageString = () => {
        return "Selecciona un idioma";
    }

    getTranslatedLabel = () => CustomLabelComponent(
        new CustomLabelProps(
            "Fusilli N.98",
            500,
            "10-08-2023",
            [
                "Ingredientes",
                "harina de trigo duro",
                "agua",
            ],
            [
                "VALORES NUTRICIONALES MEDIOS, , 100g, 85g, %AR/85g",
                "ENERGÍA, kJ/kcal, 1521/359, 1293/305, 15%",
                "GRASAS, g, 2.0, 1.7, 2%",
                "de los cuales ÁCIDOS GRASOS SATURADOS, g, 0.5, 0.4, 2%",
                "CARBOHIDRATOS, g, 71.2, 60.5, 23%",
                "de los AZÚCARES, g, 3.5, 3.0, 3%",
                "FIBRAS, g, 3.0, 2.6, -",
                "PROTEÍNAS, g, 12.5, 10.6, 21%",
                "SAL, g, 0.013, 0.011, 0%"
            ]
        )
    );

    getTranslatedAllergens = (setShowModal) => AllergensCollectionComponent(
        new AllergensCollectionProps(
            [
                new Allergen(
                    "Huevo",
                    "../images/eggs.png"
                ),
                new Allergen(
                    "Pez",
                    "../images/fish.png"
                ),
                new Allergen(
                    "Almejas",
                    "../images/shellfish.png"
                ),
                new Allergen(
                    "Gluten",
                    "../images/gluten.png"
                ),
                new Allergen(
                    "Nueces",
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

export default Italian;