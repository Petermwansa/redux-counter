import { createSlice, configureStore } from '@reduxjs/toolkit'; 

const initialCounterState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});


const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false
        }
    }

})


const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});


// tookit creates action obj for us which we will use to dispatch the actions 
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// we connect the app to the store by exporting the store 
export default store;
