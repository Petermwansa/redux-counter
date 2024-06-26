import { configureStore } from '@reduxjs/toolkit'; 
import counterSlice from './counterSlice';
import authSlice from './authSlice';




const store = configureStore({
    reducer: {  
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }   
});


// we connect the app to the store by exporting the store 
export default store;
