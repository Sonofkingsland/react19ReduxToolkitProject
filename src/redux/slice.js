import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items : localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state,action) => {
            // state.value += 1
            state.items.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.items))

        },
        removeItem: (state,action)=>{
            // state.value>0 ? state.value -= 1 : null
            const cartData = state.items.filter(item=>item.id!=action.payload.id);
            state.items=cartData
            localStorage.setItem('cart',JSON.stringify(cartData))
        }
        ,
        clearAllItem:(state)=>{
            // state.value = 0
            state.items=[]
        }
    }
}) 

export const {addItem,removeItem,clearAllItem}=addToCart.actions

export default addToCart.reducer