import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const ModalOverlay = (props) => {

    let cartTotal = 0.00
    props.cart.map((item) => {
        cartTotal += item.price * item.quantity;
    })

    const close

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
                <Button textOnly={true}>Close</Button>
                <Button textOnly={false}>Checkout</Button>
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