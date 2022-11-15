import Image from "next/image"

export default function CustomImage(imagePath: string, description: string) {
    return(
        <>
            <div className="custom-image-container">
                <Image 
                    src = {imagePath}
                    alt = {description}
                    priority
                />
                <p>{description}</p>
            </div>
        </>
    );
}