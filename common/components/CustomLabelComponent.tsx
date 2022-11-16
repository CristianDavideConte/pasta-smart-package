import CustomLabelProps from "../classes/CustomLabelProps";
import CustomImageProps from "../classes/CustomImageProps";
import CustomImage from "./CustomImageComponent";

const CustomLabel = (props: CustomLabelProps) => {
    const allergensIcons = props.getAllergens();

    return(
        <section className = "product-label-container">
            <ul>
                {
                allergensIcons
                    .map(allergen => CustomImage(
                            new CustomImageProps(
                                allergen.getIconPath(),
                                allergen.getName(),
                                100, 
                                100,
                            )
                        )
                    )
            }
            </ul>
        </section>
    );
}

export default CustomLabel;