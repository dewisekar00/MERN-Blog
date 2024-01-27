import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  dataBlogs: [],
  name: 'anna'
};

const reducer = (state = initialState, action) => {
  if(action.type === 'UPDATE_DATA_BLOG'){
    return {
      // ada data yang mau kita ubah maka kita copy dulu state yang lama
      ...state,
      // apa yang mau diubah?
      dataBlogs: action.payload
    }
  }
  if(action.type === 'UPDATE_NAME'){
    return {
      ...state,
      name: 'nanamint'
    }
  }
  return state;
};

const store = configureStore({
    reducer: reducer
});

export default store
