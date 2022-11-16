import CustomImageProps from "../classes/CustomImageProps"

const CustomImage = (props: CustomImageProps) => {
    const image = props.createImage();
    const classNames = Array.from(new Set(props.getAdditionalClassNames()));
    classNames.push("custom-image-container");

    const className = classNames.join(" ");
    const key = props.getKey();

    return(
        <div className={className} key={key}>
            {image}        
        </div>
    );
}

export default CustomImage;