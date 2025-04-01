import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import {CartContext} from "../../store/CartContext";
import { useContext } from "react";

const ModalOverlay = (props) => {

    let cartTotal = 0.00
    props.cart.map((item) => {
        cartTotal += item.price * item.quantity;
    })

    const closeModal = () => {
        const modal = document.querySelector('.modal');
        modal.close();
    }
    const [cart, setCart] = useContext(CartContext);
    const checkout = () => {
        console.log('Checking out');
        setCart([]);
    }

    return (
        <dialog className='modal cart' open>
            <h2>Your cart</h2>
            <ul>
               {
                props.cart.map((item) => (
                    <li className=''>
                        <p>{item.name} - {item.quantity}</p>

                    </li>
                ))
               } 

            </ul>
            <p className='cart-total'>{cartTotal}</p>
            <p className='modal-actions'>
                <Button onClick={closeModal} textOnly={true}>Close</Button>
                <Button onClick={checkout} textOnly={false}>Checkout</Button>
            </p>
        </dialog>
    )
}

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <ModalOverlay cart={props.cart} key={props.cart.id}/>,
                document.getElementById('modal'))}
        </Fragment>
    )
}

export default Modal;