import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  dataBlog: [],
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = configureStore({
    reducer: reducer
});

export default store
