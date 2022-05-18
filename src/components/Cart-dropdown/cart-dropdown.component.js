import './cart-dropdown.styles.scss'
import Button from "../Button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CartItem from "../Cart-item/cart-item.component";
import { useNavigate } from 'react-router-dom'


const CartDropdown = () => {

    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('/checkout')
    }
    const {cartItems} = useContext(CartContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((product)=> <CartItem key={product.id} product={product}/>)}
            </div>
            <Button onClick={navigateHandler}>Go to checkout</Button>
        </div>
    )
}
export default CartDropdown