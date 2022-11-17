import CustomLabelProps from "../classes/CustomLabelProps";

const CustomLabel = (props: CustomLabelProps) => {
    const name = props.getTitle();
    const weight = props.getWeight().toString() +  "g";
    const expirationDate = props.getExpirationDate();
    const _ingredients = props.getIngredients();
    const nutritionalValues = props.getNutrionalValuesNames();
    
    const ingredientsTitle = _ingredients[0] + ":"; 
    _ingredients.shift();   
    const ingredients = _ingredients.join(", ") + ".";

    const nutritionalValuesTable = <table> 
        <tbody>
            {
                nutritionalValues.map((tableRow, index) => {
                    return(
                        <tr key={index * Math.random()}>
                            {
                                tableRow.split(",").map((_value, _index) => {
                                    const className = _index * index === 0 ? "custom-label-values-strong" : "";
                                    return (
                                        <td className={className} key={_index + Math.random() * 10000}>
                                            {_value}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    </table>

    return(
        <section className="custom-label-container">
            <section className="custom-label-title-container">
                <section className="custom-label-values-strong custom-label-title-product-name">
                    {name}
                </section>
                <section className="custom-label-title-product-main-info">
                    <p>
                        {weight}
                    </p>
                    <p>
                        {expirationDate}
                    </p>
                </section>
            </section>

            <section className="custom-label-ingredients-container">
                <p className="custom-label-values-strong custom-label-ingredients-title">{ingredientsTitle}</p>
                <p className="custom-label-ingredients">{ingredients}</p>
            </section>

            <section className="custom-label-nutritional-values-container">
                {nutritionalValuesTable}
            </section>
        </section>
    );
}

export default CustomLabel;