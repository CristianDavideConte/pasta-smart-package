import CustomNavbarComponentProps from "../classes/CustomNavbarComponentProps";

const CustomNavbarComponent = (props: CustomNavbarComponentProps) => {
    const buttons = props.getButtons();

    return (
        <section id="navbar">
            {
                buttons.map(navbarButton => navbarButton.createButton())
            }
        </section>
    );
}

export default CustomNavbarComponent;