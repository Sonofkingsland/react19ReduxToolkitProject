import { useSelector } from "react-redux"
import { NavLink } from "react-router"

const AddToCart = () => {

    const cartSelector=useSelector((state)=>state.cart.items)
    return (
        <div className="cart">
            <NavLink to="/cart">
            🛒
            <span className="cart-count">{cartSelector.length?cartSelector.length:0}</span>
            </NavLink>
            
        </div>
    )
}

export default AddToCart