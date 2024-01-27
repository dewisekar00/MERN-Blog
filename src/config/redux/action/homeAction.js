import Axios from 'axios';

export const setDataBlog = () => (dispatch) => {
  // 1.panggil API disini
  Axios.get('http://localhost:3000/v1/blog/posts?page=2&perPage=5')
    .then((result) => {
      const responseAPI = result.data;
      // 2. pake redux
      dispatch({
        type: 'UPDATE_DATA_BLOG',
        payload: responseAPI.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
