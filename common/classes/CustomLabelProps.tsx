class CustomLabelProps {
    private expiringDate: string;
    private ingredients: string[];

    constructor(
        expiringDate: string, 
        ingredients: string[], 
    ) {
        this.expiringDate = expiringDate;
        this.ingredients = ingredients;
    }

    getExpiringDate() : string {
        return this.expiringDate;
    }

    getIngredients() : string[] {
        return this.ingredients;
    }
}

export default CustomLabelProps;