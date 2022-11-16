import CustomImageProps from "../classes/CustomImageProps"

const CustomImage = (props: CustomImageProps) => {
    const imageDescription = props.getDescription();
    const image = props.createImage();
    const description = props.getDescriptionShown() ? <p>{imageDescription}</p> : <></>;
    
    return(
        <div className="custom-image-container">
            {image}            
            {description}
        </div>
    );
}

export default CustomImage;