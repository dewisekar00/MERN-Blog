import React from 'react';
import './blogItem.scss';
import { useNavigate } from 'react-router-dom';

const BlogItem = (props) => {
  const navigate = useNavigate();
  const { image, title, name, date, body, _id } = props;
  return (
    <>
      <div className="col-md-4 px-4 mb-5 " onClick={() => navigate(`/detail-post/${_id}`)}>
        <img src={image} className="card-img-top" alt="image card" />
        <div className="card-body">
          <p className="author">{name}</p>

          <h5 className="card-title fw-bold mb-2">{title}</h5>
          <p className="card-text fw-light">{body}</p>
          <div className="d-flex  justify-content-between mt-2  minute">
            <p className="">5 min read</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
