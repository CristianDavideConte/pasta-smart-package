import NavbarButton from "./NavbarButton";

class CustomNavbarComponentProps {
    private buttons: NavbarButton[];
    
    constructor(buttons: NavbarButton[]) {
        this.buttons = buttons;
    }


    getButtons() : NavbarButton[] {
        return this.buttons;
    }
}

export default CustomNavbarComponentProps;