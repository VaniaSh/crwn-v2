import './shop-icon.styles.scss'

import {ReactComponent as ShopCartIcon} from '../../assets/shopping-bag.svg';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const ShopIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const cartToggle = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container' onClick={cartToggle}>
            <ShopCartIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}
export default ShopIcon