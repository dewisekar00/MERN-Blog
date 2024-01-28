import Axios from 'axios';

export const setDataBlog = (page) => (dispatch) => {
  // 1.panggil API disini
  Axios.get(`http://localhost:3000/v1/blog/posts?page=${page}&perPage=5`)
    .then((result) => {
      const responseAPI = result.data;
   
      // 2. pake redux
      dispatch({
        type: 'UPDATE_DATA_BLOG',
        payload: responseAPI.data,
      })
      dispatch({
      type: 'UPDATE_PAGE',
      payload: {
        currentPage:responseAPI.current_page,
        // ex total_data = 10 / per_page = 5 --> 2
        totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page)
      }})
    })
    .catch((err) => {
      console.log(err);
    });
};
