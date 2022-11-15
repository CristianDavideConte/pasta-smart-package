import Image from "next/image" 

class CustomImageProps {
    private path: string;
    private width: number;
    private height: number;
    private description: string;

    constructor(path: string, width: number, height: number, description: string) {
        this.path = path;
        this.width = width;
        this.height = height;
        this.description = description;
    }

    createImage() {
        return <img
            src={this.path}
            width={this.width}
            height={this.height}
            alt={this.description}
        />
    }

    getPath() : string{ 
        return this.path; 
    }

    getWidth() : number {
        return this.width;
    }

    getHeight() : number {
        return this.height;
    }

    getDescription() : string{ 
        return this.description; 
    }
}

export default CustomImageProps;