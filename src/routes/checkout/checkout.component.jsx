import './checkout.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

import CheckoutItem from "../../components/Checkout-item/checkout-item.component";

const Checkout = () => {

    const {cartItems, cartTotal} = useContext(CartContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='checkout-block'>Product</div>
                <div className='checkout-block'>Description</div>
                <div className='checkout-block'>Quantity</div>
                <div className='checkout-block'>Price</div>
                <div className='checkout-block'>Remove</div>
            </div>

            {
                cartItems.map(product => <CheckoutItem key={product.id} product={product}/>)
            }
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
    )
}
export default Checkout