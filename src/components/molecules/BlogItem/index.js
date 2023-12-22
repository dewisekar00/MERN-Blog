import React from 'react';
import './blogItem.scss';
import { useNavigate } from 'react-router-dom';

const BlogItem = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" col-4 px-4 mb-5 " onClick={() => navigate('/detail-post')}>
        <img src="https://i.pinimg.com/564x/2e/61/4d/2e614da6668a83dab3078fa534092cec.jpg" className="card-img-top" alt="image card" />
        <div className="card-body">
          <p className="author"> j anna</p>

          <h5 className="card-title fw-bold mb-2">enjoy the moment in life with slow living</h5>
          <p className="card-text fw-light">Emotions are clues to what is truly happening to us</p>
          <div className="d-flex  justify-content-between mt-2  minute">
            <p className="">5 min read</p>
            <p>Dec 27</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
