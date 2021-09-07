import React, { useContext } from 'react';
import amazon__logoL from '../images/amazon__logoL.png'
import logo512 from "../images/logo512.png";
import "../CSS/Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../Context/StateProvider.jsx'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    // console.log("basket =",basket)
    // console.log("user =",user.length)
    return (
        <nav className="header">
            <Link to="/">
                <img
                    src={amazon__logoL}
                    alt="amazon nav"
                    className="header__logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" placeholder="search..." />
                <SearchIcon className="header__searchicon" />

            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Hello Asad</span>
                        <span className="header__optionLine2">Sign In</span>
                    </div>

                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& Order</span>
                    </div>

                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Your</span>
                        <span className="header__optionLine2">Prime</span>
                    </div>

                </Link>
            </div>
            <Link exact className="header__link" to='/checkout'>
                <div className="header__basketoption">
                    <ShoppingBasketIcon />
                    <span className="header__optionLine2 header__basketcount">{basket.length}</span>
                </div>
            </Link>
        </nav>

    )
}

export default Header
