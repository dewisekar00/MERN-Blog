import React, { useEffect, useState } from 'react';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  // memanggil homereducer aja
  const { dataBlog } = useSelector((state) => state.homeReducer);

  const dispatch = useDispatch();

  // console.log('data blog global:', dataBlog)

  // manggil data dari backend
  useEffect(() => {
    Axios.get('http://localhost:3000/v1/blog/posts?page=2&perPage=5')
      .then((result) => {
        const responseAPI = result.data;
      //  pake redux
        dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
        <span class="material-symbols-outlined">arrow_back_ios</span>
        <Gap width={10} />
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
