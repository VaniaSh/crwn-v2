import './checkout-item.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CheckoutItem = ({product}) => {
    const {name, price, imageUrl, quantity} = product

    const {clearItemFromCart, addItemsToCart, removeItemFromCart} = useContext(CartContext)

    const clearCartHandler = () => clearItemFromCart(product)

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => {
                    removeItemFromCart(product)
                }}>
                    &#x3C;
                </div>
                {quantity}
                <div className='arrow' onClick={() => {
                    addItemsToCart(product)
                }}>
                    &#x3E;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearCartHandler}>&#10006;</div>
        </div>
    )
}
export default CheckoutItem