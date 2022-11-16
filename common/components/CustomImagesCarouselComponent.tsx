import CustomImagesCarouselProps from "../classes/CustomImagesCarouselProps";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const CustomImagesCarouselComponent = (props: CustomImagesCarouselProps) => {
    const images = props.getImages();

    const moveCarousel = (direction: number) => {
        const carousel = document.getElementById("custom-images-inner-carousel");

        if(!carousel) return;

        carousel.scrollLeft += direction * carousel.clientWidth;
    }

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    
    return (
        <div id = "custom-images-outer-carousel" className="embla" ref={emblaRef}>
            <div id = "custom-images-inner-carousel" className="embla__container">
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    )

    /*
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
    */
}

export default CustomImagesCarouselComponent;