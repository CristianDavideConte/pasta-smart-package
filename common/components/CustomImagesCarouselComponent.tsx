import CustomImagesCarouselProps from "../classes/CustomImagesCarouselProps";

const CustomImagesCarouselComponent = (props: CustomImagesCarouselProps) => {
    const images = props.getImages();

    const moveCarousel = (direction: number) => {
        const carousel = document.getElementById("custom-images-inner-carousel");

        if(!carousel) return;

        carousel.scrollLeft += direction * carousel.clientWidth;
    }

    return(
        <div id = "custom-images-outer-carousel">
            <button 
                id = "carousel-left-button" 
                className = "custom-images-carousel-button" 
                onClick={() => moveCarousel(-1)}
            >
                &#8249;
            </button>
            <div id = "custom-images-inner-carousel">
                {images}
            </div>
            <button 
                id = "carousel-right-button" 
                className = "custom-images-carousel-button" 
                onClick={() => moveCarousel(1)}
            >
                &#8250;
            </button>
        </div>
    );
}

export default CustomImagesCarouselComponent;