// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    const handleRemoveIngredient = (ingredient) => {
        props.removeFromBurger(ingredient);
    }
    return (
    <>
    <ul>
        {props.stack.map((ingredient, index) => (
            <li key={index}>
                <div style={{backgroundColor: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={() => handleRemoveIngredient(index)}>x</button>
                </div>
            </li>
        ))}
    </ul>
    </>
  )}
  
  export default BurgerStack;
  