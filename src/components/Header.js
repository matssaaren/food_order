import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import {CartContext} from "../store/CartContext";
import { useContext } from "react";

const Header = () => {

    const [cart] = useContext(CartContext);
    const cartCount = cart.length;

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt='logo'/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true}>Cart ({cartCount})</Button>
            </nav>
        </header>
    )
}

export default Header