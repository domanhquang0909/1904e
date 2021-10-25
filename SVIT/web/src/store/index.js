import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

const tmp = createSlice({
    name: 'svStore',
    initialState: {
        listProduct: [] 
    },
    reducers: {
        listproductHandle(state, action) {
            state.listProduct = action.payload;
        }
    }
})
export const storeListSV = tmp.actions;

const store = configureStore({
    reducer: {svStore: tmp.reducer}
})

export default store;