import React from 'react';
import './upload.scss';
const Upload = ({ img, ...rest }) => {
  return (
    <div className="upload ">
      {/* kalo image nya ada baru munculin image kalo ngga ada kosongin */}
      <div className="d-flex justify-content-center">{img && <img className="preview" src={img} alt="image" />}</div>
      <div className='mx-5'>
        <input type="file" {...rest} />
      </div>
    </div>
  );
};

export default Upload;
