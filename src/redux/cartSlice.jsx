import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const item = state.products.find((item) => item.id === newItem.id);
            if (item) {
                item.quantity++;
                item.totalPrice += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image,
                });
            }
            state.totalQuantity++;
            state.totalPrice += newItem.price;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);
            if (findItem) {
                state.totalPrice -= findItem.price * findItem.quantity;
                state.totalQuantity -= findItem.quantity;
                state.products = state.products.filter(item => item.id !== id);
            }
        },
        increaseQuantity(state, action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);
            if(findItem){
                findItem.quantity++;
                findItem.totalPrice += findItem.price
                state.totalQuantity++;
                state.totalPrice += findItem.price
            }
        },
                decraseQuantity(state, action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);
            if (findItem.quantity > 1){
            if(findItem){
                findItem.quantity--;
                findItem.totalPrice -= findItem.price
                state.totalQuantity--;
                state.totalPrice -= findItem.price
            }
        }
        }
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decraseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
