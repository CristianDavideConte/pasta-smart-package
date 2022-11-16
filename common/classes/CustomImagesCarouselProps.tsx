import CustomImageProps from "./CustomImageProps";
import CustomImage from "../components/CustomImageComponent";

class CustomImagesCarouselProps {
    private imagesProps: CustomImageProps[];

    constructor(imagesProps: CustomImageProps[]) {
        this.imagesProps = imagesProps;
    }

    getImagesProps() {
        return this.imagesProps;
    }

    getImages() {
        return this.imagesProps
            .map((imageProps, index) => {
                imageProps.setKey(index);
                imageProps.hideDescription();
                imageProps.addClassName("embla__slide");
                
                return CustomImage(
                    imageProps
                );
            }
        );
    }

    addImage(image: CustomImageProps) {
        this.imagesProps.push(image);
    }

    removeImage(image: CustomImageProps) {
        const index = this.imagesProps.indexOf(image);
        
        if(index < 0) return;

        this.imagesProps.slice(index, 1);
    }
}

export default CustomImagesCarouselProps;