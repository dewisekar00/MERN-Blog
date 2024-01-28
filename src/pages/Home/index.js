import React, { useEffect, useState } from 'react';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';

const Home = () => {
  const [counter, setCounter] = useState(1);
  // 1.call homereducer
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  // 2.make dispatch
  const dispatch = useDispatch();

  // manggil data dari backend
  useEffect(() => {
    // 3.call dispatch from action creator
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const navigate = useNavigate();

  const back = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    // if 3 === 3 return 3 and done else + 1
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  return (
    <div className="home-page-wrapper ">
      <div className="create-wrapper">
        <div className="m-3">
          <Button title="create post" onClick={() => navigate('/create-post')} />
        </div>
      </div>

      <Gap height={20} />
      <div className="content-wrapper mt-5">
        {dataBlog.map((blog) => {
          return <BlogItem key={blog._id} image={`http://localhost:3000/${blog.image}`} title={blog.title} body={blog.body} name={blog.author.name} date={blog.createdAt} author />;
        })}
      </div>

      <div className="d-flex justify-content-center my-4 ">
        <div className="pagination">
          <Button title="Previous" onClick={back} />
          <Gap width={10} />
          <Button title="Next" onClick={next} />
        </div>

        <Gap height={20} />
      </div>
      <p className="text-center">
        {page.currentPage} / {page.totalPage}
      </p>
    </div>
  );
};

export default Home;
