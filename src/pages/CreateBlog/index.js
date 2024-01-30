import React, { useState } from 'react';
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './createblog.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { postToAPI, setForm, setImgPreview } from '../../config/redux/action';

const CreateBlog = () => {
// 1.panggil reducernya
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // 2.ketika disubmit data akan dikirim ke action postAPI untuk dikirim ke backend
    const updatedForm = { ...form, imgPreview };
    postToAPI(updatedForm);
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    console.log('isi file', file);
    // 3.gunain dispatch untuk menampilkan image
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <>
      <div className="m-4">
        <Link to="/" onClick={() => navigate('/')}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
        <form onSubmit={onSubmit}>
          <div className="createblog-wrap">
            {/* onChange untuk dapetin img dan tampikan preview image disini */}
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} className="imageUpload" />
          </div>
       <Gap height={20} />
       {/* dispatch value input ke action agar dikirim ke reducer */}
          <Input placeholder="Title.." className="input-title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
          <TextArea className="text-area" placeholder="Tell your story.." value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
         <div className="button-action">
            <Button title="save" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
