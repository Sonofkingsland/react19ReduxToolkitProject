import { NavLink } from "react-router"
import AddToCart from "./AddToCart"
import './Header.css'
const Header = () => {
    return (
        <div>

            <header className="header">
                <div className="logo">KINGSLAND ZONE</div>

                <nav className="nav">
                    <NavLink to="/">Home</NavLink>
                    <a href="#">Products</a>
                    <NavLink to="/contact">Contact Us</NavLink>
                </nav>

                <AddToCart/>
            </header>

        </div>
    )
}

export default Header