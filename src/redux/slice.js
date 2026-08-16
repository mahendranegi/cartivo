import { createSlice } from "@reduxjs/toolkit";

// const initialState ={
//     value: 0,
// }
const initialState = {
  items: [],
  value:0,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            state.items.push(action?.payload);
            console.log(state.items,'API DATA____')
            
            
            state.value += 1;
            
        },
        removeItem: (state)=>{
            if(state.value > 0){
                state.value -= 1;
                return;
            }
            
        }
    }
});

export const {addToCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;