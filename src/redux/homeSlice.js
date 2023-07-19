import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: '',
    },
    reducers:{
        getUrl:(state,action)=>{
            state.url = action.payload
        }
    }
})

export const {getUrl} = homeSlice.actions
export default homeSlice.reducer 