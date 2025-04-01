
import Button from "./UI/Button";
import {CartContext} from "../store/CartContext";
import { useContext } from "react";
const MealItem = (props) => {

    const price = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(props.meal.price);

    const [cart, setCart] = useContext(CartContext);

    const addItem = () => {
        console.log("Adding item to cart");
        const meal = props.meal
        console.log(meal);
        
        const newCart = [...cart, meal]; 
        setCart(newCart);
        console.log(cart);
    }

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{price}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p>
                    <Button onClick={addItem} textOnly={false} >Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem