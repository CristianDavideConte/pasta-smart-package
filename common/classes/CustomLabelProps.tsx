import Allergen from "./Allergen";

class CustomLabelProps {
    private expiringDate: string;
    private ingredients: string[];
    private allergens: Allergen[];

    constructor(
        expiringDate: string, 
        ingredients: string[], 
        allergens: Allergen[], 
    ) {
        this.expiringDate = expiringDate;
        this.ingredients = ingredients;
        this.allergens = allergens;
    }

    getExpiringDate() : string {
        return this.expiringDate;
    }

    getIngredients() : string[] {
        return this.ingredients;
    }

    getAllergens() : Allergen[] {
        return this.allergens;
    }
}

export default CustomLabelProps;