class CustomImageProps {
    private path: string;
    private width: number;
    private height: number;
    private description: string;
    private isDescriptionShown: boolean;

    constructor(
        path: string, 
        description: string, 
        width: number, 
        height: number, 
        isDescriptionShown: boolean = false,
    ) {
        this.path = path;
        this.description = description;
        this.width = width;
        this.height = height;
        this.isDescriptionShown = isDescriptionShown;
    }

    createImage() {
        return <img
            className = "custom-image"
            src={this.path}
            alt={this.description}
            width={this.width}
            height={this.height} 
        />
    }

    getDescriptionShown() : boolean {
        return this.isDescriptionShown;
    }

    showDescription() {
        this.isDescriptionShown = true;
    }

    hideDescription() {
        this.isDescriptionShown = false;
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