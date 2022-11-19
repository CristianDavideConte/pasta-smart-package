import Allergen from "../classes/Allergen";
import AllergensCollectionProps from "../classes/AllergensCollectionProps";
import CustomLabelProps from "../classes/CustomLabelProps";
import AllergensCollectionComponent from "../components/AllergensCollectionComponent";
import CustomLabelComponent from "../components/CustomLabelComponent";
import ILanguage from "./ILanguage";

class Japanese implements ILanguage {
    constructor() {}
    
    getLanguageId() : string {
        return "jp";
    }

    getFlagIconName = () => {
        return this.getLanguageId() + ".png";
    }
    

    getTranslatedSelectLanguageString = () => {
        return "言語を選択";
    }

    getTranslatedStartTimerString = () => {
        return "始める";
    }
    
    getTranslatedLabel = () => CustomLabelComponent(
        new CustomLabelProps(
            "フジッリ N.98",
            500,
            "10-08-2023",
            [
                "材料",
                "デュラム小麦粉",
                "水",
            ],
            [
                "平均栄養価, , 100g, 85g, %AR/85g",
                "パワー, kJ/kcal, 1521/359, 1293/305, 15%",
                "太い, g, 2.0, 1.7, 2%",
                "飽和脂肪酸, g, 0.5, 0.4, 2%",
                "炭水化物, g, 71.2, 60.5, 23%",
                "うち糖質, g, 3.5, 3.0, 3%",
                "繊維, g, 3.0, 2.6, -",
                "タンパク質, g, 12.5, 10.6, 21%",
                "塩, g, 0.013, 0.011, 0%"
            ]
        )
    );

    getTranslatedAllergens = (setShowModal) => AllergensCollectionComponent(
        new AllergensCollectionProps(
            [
                new Allergen(
                    "グルテン",
                    "../images/gluten.png"
                ),
                new Allergen(
                    "大豆",
                    "../images/soy.png"
                ),
                new Allergen(
                    "マスタード",
                    "../images/mustard.png"
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

export default Japanese;