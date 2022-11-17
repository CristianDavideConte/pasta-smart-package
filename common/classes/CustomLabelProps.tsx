class CustomLabelProps {
    private title: string;
    private weight: number;
    private expirationDate: string;
    private ingredients: string[]; //The first ingredient is always the word "ingredients" translated
    private nutritionalValues: string[]; 

    constructor(
        title: string,
        weight: number,
        expiringDate: string, 
        ingredients: string[], 
        nutritionalValues: string[]
    ) {
        this.title = title;
        this.weight = weight;
        this.expirationDate = expiringDate;
        this.ingredients = ingredients;
        this.nutritionalValues = nutritionalValues;
    }

    getTitle(): string {
        return this.title;
    }

    getWeight(): number {
        return this.weight;
    }

    getExpirationDate() : string {
        return this.expirationDate;
    }

    getIngredients() : string[] {
        return this.ingredients;
    }

    getNutrionalValuesNames() : string[] {
        return this.nutritionalValues;
    }
}

export default CustomLabelProps;