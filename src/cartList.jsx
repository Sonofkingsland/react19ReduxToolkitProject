import { useDispatch, useSelector } from "react-redux"
import './Product.css'
import { clearAllItem, removeItem } from "./redux/slice"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export default function Cartlist() {
    const cartSelector = useSelector((state) => state.cart.items)

    const [cartItems, setCartItems] = useState(cartSelector)

    const navigate = useNavigate()

    useEffect(() => {

        setCartItems(cartSelector)

    }, [cartSelector])

    const manageQuantity = (id, qntty) => {

        let quantity = parseInt(qntty) > 1 ? parseInt(qntty) : 1

        const cartTempItems = cartSelector.map((item) => {
            return item.id == id ? { ...item, quantity } : item

        })
        console.log(cartTempItems[0]);

        setCartItems(cartTempItems)
    }

    const dispatch = useDispatch()

    const HandlePlaceorder = () => {
        localStorage.clear()
        dispatch(clearAllItem())
        alert("order placed")
        navigate("/")
    }

    return <>
        <div className="cart-container">
            <div className="cart-header">
                <h2>Here is Cart Items</h2>
                <span className="cart-header-length">
                    {cartItems.length} items
                </span>
            </div>

            {
                cartItems.length > 0 ? cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="item-info">
                            <img src={item.thumbnail} />
                            <div className="item-details">
                                <h4>{item.title}</h4>
                                <p>{item.brand}</p>
                            </div>
                        </div>
                        <div className="item-actions">
                            <div style={{ display: "flex" }}>
                                <input onChange={(event) => manageQuantity(item.id, event.target.value)} style={{ margin: "20px" }} type="number" value={item.quantity ? item.quantity : 1} placeholder="enter quantity" />
                                <div>
                                    <span className="price">
                                        ${(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}
                                    </span>
                                    <button onClick={() => dispatch(removeItem(item))} className="btnb">Remove</button>
                                </div>
                            </div>

                        </div>
                    </div>
                )) : null
            }
            <div className="cart-footer">
                Total Amount : ${(cartItems.reduce((sum, item) => item.quantity ? sum + item.price * item.quantity : sum + item.price, 0)).toFixed(2)}
            </div>
            <button onClick={HandlePlaceorder}  className="btnb">Place Order</button>
        </div>
    </>
    
}


// css product.jsx me hai