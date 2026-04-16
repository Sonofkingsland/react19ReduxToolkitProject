import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import './Header.css'
import Product from './Product'
import { useDispatch } from 'react-redux'
import { clearAllItem } from './redux/slice'
import { BrowserRouter, Route, Routes } from 'react-router'
import Cartlist from './cartList'
import Contact from './contact'

function App() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* button use for simple card product*/}
      {/* <button className='btnb' onClick={()=>dispatch(clearAllIvalue())}>clear Cart</button> */}
      

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Product/>} />
          <Route path='/cart' element={<Cartlist/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
