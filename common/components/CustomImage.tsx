import CustomImageProps from "../classes/CustomImageProps"

const CustomImage = (props: CustomImageProps) => {
    const imageDescription = props.getDescription();
    const image = props.createImage();
    
    return(
        <div className="custom-image-container">
            {image}            
            <p>{imageDescription}</p>
        </div>
    );
}

export default CustomImage;