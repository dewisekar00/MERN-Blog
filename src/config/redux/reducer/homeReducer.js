const initialStateHome = {
  dataBlog: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  },
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === 'UPDATE_DATA_BLOG') {
    return {
      // ada data yang mau kita ubah maka kita copy dulu state yang lama
      ...state,
      // apa yang mau diubah?
      dataBlog: action.payload,
    };
  }
  if (action.type === 'UPDATE_PAGE') {
    return {
      ...state,
      page: action.payload,
    };
  }
  return state;
};

export default homeReducer;
