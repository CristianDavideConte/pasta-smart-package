import { MouseEventHandler } from "react";
import CustomImage from "../components/CustomImageComponent";
import CustomImageProps from "./CustomImageProps";

class NavbarButton {
    private icon: CustomImageProps;
    private onClick: MouseEventHandler<HTMLDivElement>;

    constructor(icon: CustomImageProps, onClick: MouseEventHandler<HTMLDivElement>) {
        this.icon = icon;
        this.onClick = onClick;
        this.icon.setOnClick(this.onClick);
        this.icon.addClassName("navbar-button");
    }

    createButton() {
        return CustomImage(this.icon);
    }

    getIcon() : CustomImageProps {
        return this.icon;
    }

    getIconPath() : string {
        return this.icon.getPath();
    }

    getOnClick() : MouseEventHandler<HTMLDivElement> {
        return this.onClick;
    }

}

export default NavbarButton;