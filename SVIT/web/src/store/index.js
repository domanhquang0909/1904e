import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        listProduct: [] 
    },
    reducers: {
        listproductHandle(state, action) {
            state.listProduct = action.payload;
        }
    }
})
export const storeListSV = tokenSlice.actions;

const store = configureStore({
    reducer: {token: tokenSlice.reducer}
})

export default store;