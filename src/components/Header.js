import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import {CartContext} from "../store/CartContext";
import { useContext, useState } from "react";
import Modal from './UI/Modal'

const Header = () => {

    const [cart] = useContext(CartContext);
    let cartCount = 0
    cart.map((item) => {
        cartCount += item.quantity;
        return item;
    })

    const [open, setOpen] = useState(false);
    const modalHandler = () => {
        
        setOpen(!open);
    }

    return (
        <header id="main-header">
            {open && <Modal cart={cart}/>}
,            <div id="title">
                <img src={logo} alt='logo'/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button onClick={modalHandler} textOnly={true}>Cart ({cartCount})</Button>
            </nav>
        </header>
    )
}

export default Header