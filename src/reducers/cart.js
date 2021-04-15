import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice ({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const exsistingProducts = state.items.find((item) => item.id ===action.payload.id)

            if (exsistingProducts) {
                exsistingProducts.quantity +=1
            } else { 
                state.items.push({...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            const exsistingProducts = state.items.find((item) => item.id ===action.payload.id)
            
            if (exsistingProducts && exsistingProducts.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== action.payload.id)
            } else if (exsistingProducts) {
                exsistingProducts.quantity -= 1
            }
        }
    }
})