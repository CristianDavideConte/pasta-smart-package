import React, { useState, useEffect, useCallback } from "react";
import CustomImagesCarouselProps from "../classes/CustomImagesCarouselProps";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const CustomImagesCarouselComponent = (props: CustomImagesCarouselProps) => {
    const images = props.getImages();
    const [viewportRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false}, [/*Autoplay()*/]);
    
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    
    const DotButton = ({ selected, onClick }) => (
        <button
            className={`embla__dot ${selected ? "is-selected" : ""}`}
            type="button"
            onClick={onClick}
        />
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    
    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index), 
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList() as never[]);
        emblaApi.on("select", onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);
    
    return (
        <>
            <div id = "custom-images-outer-carousel" className="embla">
                <div className="embla__viewport" ref={viewportRef}>
                    <div id = "custom-images-inner-carousel" className="embla__container">
                        {images}
                    </div>
                </div>
                <button className="embla__prev" onClick={scrollPrev}>
                    <svg id="custom-images-carousel-button-arrow-left" className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
                        <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
                    </svg>
                </button>
                <button className="embla__next" onClick={scrollNext}>
                    <svg id="custom-images-carousel-button-arrow-right" className="embla__button__svg" viewBox="0 0 238.003 238.003">
                        <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
                    </svg>
                </button>
            </div>
            <div className="embla__dots">
                {
                    scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                        />
                    ))
                }
        </div>
      </>
    )
}

export default CustomImagesCarouselComponent;