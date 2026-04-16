import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { addItem } from './redux/slice'
import { removeItem } from './redux/slice'
import { useEffect } from 'react'
import { fetchProducts } from './redux/productSlice'

const Product = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())

    }, [])


    const productSelector = useSelector((state) => state.products.items)
    console.log(productSelector);

    const cartSelector = useSelector((state) => state.cart.items)





    return (
        // <div>


        //     {/* noraml card product */}



        //     <section className="products">

        //         <div className="card">
        //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s/200" alt="product" />
        //             <h3>Product 1</h3>
        //             <p>₹499</p>
        //             <button className='btn' onClick={()=>dispatch(addItem())}>Add to Cart</button>
        //             <button className='btn' onClick={()=>dispatch(removeItem())}>remove Cart</button>
        //         </div>

        //         <div className="card">
        //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPJJtzs7hP9GvnwXhuoG5tFguvISa2KJAOtPY4mV6DpErG7lvmu7uHj-xz696lE5BUS-WRQPZZV2GYzZNnw&s&ec=121630492/200" alt="product" />
        //             <h3>Product 2</h3>
        //             <p>₹799</p>
        //             <button className='btn' onClick={()=>dispatch(addItem())}>Add to Cart</button>
        //             <button className='btn' onClick={()=>dispatch(removeItem())}>remove Cart</button>
        //         </div>

        //         <div className="card">
        //             <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D/200" alt="product" />
        //             <h3>Product 3</h3>
        //             <p>₹999</p>
        //             <button className='btn' onClick={()=>dispatch(addItem())}>Add to Cart</button>
        //             <button className='btn' onClick={()=>dispatch(removeItem())}>remove Cart</button>
        //         </div>

        //     </section>
        // </div>




        < div className='grid' >

            {/* form api product */}

            {
                productSelector.length && productSelector.map((item) => (

                    <div key={item.id} className='cardAPI'>

                        <img src={item.thumbnail} />

                        <div className="content">
                            <div className='title'>{item.title}</div>
                            <div className="brand">{item.brand}</div>
                            <div className="price">{item.price}</div>
                            <div className="rating">{item.rating}</div>
                            {
                                cartSelector.find((cartItem) => cartItem.id == item.id) ?
                                    <button onClick={() => dispatch(removeItem(item))} className='btnb btnb-disabled'>remove from Cart</button>
                                    :
                                    <button onClick={() => dispatch(addItem(item))} className='btnb'>Add to Cart</button>
                            }

                        </div>
                    </div>
                ))
            }

        </div >
    )
}

export default Product