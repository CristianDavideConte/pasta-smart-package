class Allergen {
    private name: string;
    private iconPath: string;

    constructor(name: string, iconPath: string) {
        this.name = name;
        this.iconPath = iconPath;
    }

    getName() : string {
        return this.name;
    }

    getIconPath() : string {
        return this.iconPath;
    }
}

export default Allergen;