import React, { useEffect, useState } from 'react';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';

const Home = () => {
  // 1.call homereducer
  const { dataBlog } = useSelector((state) => state.homeReducer);
  // 2.make dispatch
  const dispatch = useDispatch();

  // manggil data dari backend
  useEffect(() => {
    // 3.call dispatch from action creator
    dispatch(setDataBlog());
  }, [dispatch]);

  const navigate = useNavigate();

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
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <Gap width={10} />
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
