import Arabic from "./Arabic";
import English from "./English";
import French from "./French";
import German from "./German";
import ILanguage from "./ILanguage";
import Italian from "./Italian";
import Japanese from "./Japanese";
import Spanish from "./Spanish";

class LanguageSelector {
    private language: ILanguage;

    constructor(languageSelector: string) {
        if(languageSelector === "ita") {
            this.language = new Italian();
            return;
        } 

        if(languageSelector === "eng") {
            this.language = new English();
            return;
        } 

        if(languageSelector === "fr") {
            this.language = new French();
            return;
        } 

        if(languageSelector === "de") {
            this.language = new German();
            return;
        } 

        if(languageSelector === "esp") {
            this.language = new Spanish();
            return;
        } 

        if(languageSelector === "jp") {
            this.language = new Japanese();
            return;
        }    
        
        if(languageSelector === "arb") {
            this.language = new Arabic();
            return;
        } 

        this.language = new Italian();
    }

    getLanguage() : ILanguage {
        return this.language;
    }
}

export default LanguageSelector;