import { MouseEventHandler } from "react";

/* eslint-disable @next/next/no-img-element */
class CustomImageProps {
    private key: number;
    private path: string;
    private width: number;
    private height: number;
    private description: string;
    private isDescriptionShown: boolean;
    private additionalClassNames: string[]; 
    private onClick: MouseEventHandler<HTMLDivElement>;

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
        this.key = Math.round(4.7 * Math.random() + 5.3 * Math.random() + Math.random() * Date.now() + Math.random() * Date.now());
        this.onClick = () => {};
    }

    createImage() {
        return <img
            className = "custom-image"
            src={this.path}
            alt={this.description}
            width={this.width}
            height={this.height} 
            onClick={this.onClick}
        />
    }

    getKey() : number{
        return this.key;
    }

    setKey(key: number) {
        this.key = key;
    }

    getOnClick() : MouseEventHandler<HTMLDivElement> {
        return this.onClick;
    }
    
    setOnClick(onClick: MouseEventHandler<HTMLDivElement>) {
        this.onClick = onClick;
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