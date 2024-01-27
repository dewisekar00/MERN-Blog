const initialState = {
    name: 'anna'
  };

  
// untuk keseluruhan dan tidak masuk ke homepage dll
const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
      return {
        ...state,
        name: 'nanamint'
      }
    }
    return state;
  }


  export default globalReducer
  