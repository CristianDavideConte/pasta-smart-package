import AllergensCollectionProps from "../classes/AllergensCollectionProps";

const AllergensCollectionComponent = (props: AllergensCollectionProps) => {
    const images = props.getImages();

    const scrollOnWheel = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const el = document.getElementById("allergens-icons-container");
        
        if(!el) return;

        el.scrollLeft += event.deltaX + event.deltaY;
    }

    const scrollSetup = () => {
        document.getElementById("allergens-icons-container")?.removeEventListener("mouseenter", scrollSetup, true);
        document.getElementById("allergens-icons-container")?.addEventListener("wheel", scrollOnWheel, {passive:false});
    }
    
    return (
        <section id="allergens-icons-container" onMouseEnter={scrollSetup}>
            {images}
        </section>
    );
}

export default AllergensCollectionComponent;