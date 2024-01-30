import React, { useEffect, useState } from 'react';
import './detail-blog.scss';
import { useNavigate, useParams, withRouter } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import { Gap } from '../../components';
import Axios from 'axios';

const DetailBlog = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`http://localhost:3000/v1/blog/post/${id}`);
        console.log(response.data);
        setData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const navigate = useNavigate();

  if (Object.keys(data).length === 0) {
    return <p>Loading data...</p>;
  } else {
    return (
      <div className="detail-blog-wrapper">
        <h1 className="title">{data.title}</h1>
        <p className="author-date">
          {data.author ? data.author.name : 'Unknown'} - {data.createdAt}
        </p>
        <img src={`http://localhost:3000/${data.image}`} alt="dummy-pic" className="img" />
        <p className="detail-blog-text">{data.body}</p>

        <Gap height={80} />
        <Button title="Back" onClick={() => navigate('/')} />
        <Gap height={60} />
      </div>
    );
  }
};

export default DetailBlog;
