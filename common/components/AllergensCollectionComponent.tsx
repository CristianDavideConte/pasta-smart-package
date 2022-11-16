import AllergensCollectionProps from "../classes/AllergensCollectionProps";

const AllergensCollectionComponent = (props: AllergensCollectionProps) => {
    const images = props.getImages();

    return (
        <section id="allergens-icons-container">
            {images}
        </section>
    );
}

export default AllergensCollectionComponent;