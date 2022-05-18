import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {Fragment, useContext} from 'react';

import './navigation.styles.scss'
import {Link, Outlet} from "react-router-dom";
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import ShopIcon from "../../components/Shop-icon/shop-icon.component";
import CartDropdown from "../../components/Cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";

const Navigation = () => {

    const {isCartOpen} = useContext(CartContext)
    const {currentUser} = useContext(UserContext)


    return (
        <Fragment>
            <div className='navigation'>
                <div className='logo-container'>
                    <Link to='/'><CrwnLogo/></Link>
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>Shop</Link>
                    {
                        currentUser ? (
                            <span onClick={signOutUser} className='nav-link'>SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
                        )
                    }
                    <ShopIcon/>
                </div>
            </div>
            {isCartOpen && <CartDropdown/>}
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;