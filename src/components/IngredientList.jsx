const IngredientList = (props) => {
    const handleAddIngredient = (newIngredient) => {
        props.addToBurger(newIngredient)
    };
    return (
        <>
            <ul>
                {props.availableIngredients.map((ingredient, index) => (
                    <li key={index}>
                        <div style={{ backgroundColor: ingredient.color }}>
                            {ingredient.name}
                        <button onClick={() => handleAddIngredient(ingredient)}>+</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default IngredientList;
