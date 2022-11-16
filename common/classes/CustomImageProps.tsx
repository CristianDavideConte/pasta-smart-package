class CustomImageProps {
    private key: number;
    private path: string;
    private width: number;
    private height: number;
    private description: string;
    private isDescriptionShown: boolean;
    private additionalClassNames: string[]; 

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
        this.additionalClassNames = [];
        this.key = Math.round(performance.now() * Math.random() + 10);
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

    getKey() : number{
        return this.key;
    }

    setKey(key: number) {
        this.key = key;
    }

    addClassName(name: string) {
        this.additionalClassNames.push(name);
    }

    getAdditionalClassNames(): string[] {
        return this.additionalClassNames;
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