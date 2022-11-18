import CustomImageProps from "./CustomImageProps";

class Allergen {
    private name: string;
    private iconPath: string;

    constructor(name: string, iconPath: string) {
        this.name = name;
        this.iconPath = iconPath;
    }

    createImageProps() {
        return new CustomImageProps(
            this.iconPath,
            this.name,
            100,
            100
        );
    }

    getName() : string {
        return this.name;
    }

    getIconPath() : string {
        return this.iconPath;
    }
}

export default Allergen;