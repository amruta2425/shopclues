import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    productData:[],
    userInfo: null,
};
export const shopCluesSlice = createSlice({
    name:"shopClues",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = state.productData.find(
                (item)=> item._id === action.payload
                )
                if(item){
                    item.quantity += action.payload.quantity
                }else{
                    state.productData.push(action.payload);

                }       
        },
        
    },
})
export const{addToCart} = shopCluesSlice.actions;
export default shopCluesSlice.reducer;
