import { MouseEventHandler } from "react";
import CustomImage from "../components/CustomImageComponent";
import Allergen from "./Allergen";

class AllergensCollectionProps {
    private allergens: Allergen[];
    private onClick: MouseEventHandler<HTMLDivElement>;

    constructor(allergens: Allergen[], onClick: MouseEventHandler<HTMLDivElement>) {
        this.allergens = allergens;
        this.onClick = onClick;
    }

    getImages() {
        return this.allergens
            .map((allergen, index) => {
                const imageProps = allergen.createImageProps();
                imageProps.setKey(index);
                imageProps.hideDescription();
                imageProps.addClassName("allergen-icon");
                imageProps.setOnClick(this.onClick);
                
                return CustomImage(
                    imageProps
                );
            }
        );
    }

    getAllergens(): Allergen[] {
        return this.allergens;
    }
}

export default AllergensCollectionProps;