import CustomImageProps from "../classes/CustomImageProps"

const CustomImage = (props: CustomImageProps) => {
    const image = props.createImage();
    const classNames = props.getAdditionalClassNames();
    classNames.push("custom-image-container");

    const className = classNames.reduce((prev, curr, index) => {
        return prev + " " + curr;
    }, "");

    console.log(className);
    
    return(
        <div className={className}>
            {image}        
        </div>
    );
}

export default CustomImage;