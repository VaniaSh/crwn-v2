import './card.styles.scss'

import './card.styles.scss'

import Button from "../Button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const Card = ({product}) => {

    const {addItemsToCart} = useContext(CartContext)
    const add = () => addItemsToCart(product)
    const {name, price, imageUrl} = product

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt='text'/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={add}>Add to cart</Button>
        </div>
    )
}
export default Card