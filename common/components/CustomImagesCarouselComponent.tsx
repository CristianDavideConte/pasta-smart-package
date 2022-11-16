import React, { useCallback } from 'react'
import CustomImagesCarouselProps from "../classes/CustomImagesCarouselProps";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const CustomImagesCarouselComponent = (props: CustomImagesCarouselProps) => {
    const images = props.getImages();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    
    return (
        <div id = "custom-images-outer-carousel" className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div id = "custom-images-inner-carousel" className="embla__container">
                    {images}
                </div>
            </div>
            <button className="embla__prev" onClick={scrollPrev}>
                &#8249;
            </button>
            <button className="embla__next" onClick={scrollNext}>
                &#8250;
            </button>
        </div>
    )
}

export default CustomImagesCarouselComponent;