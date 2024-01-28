import React, { useState } from 'react';
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './createblog.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // 1.buat state untuk simpan image
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(body);
    //4.MENGIRIM 3 DATA(TITLE,BODY,IMAGE KE DATABASE)
    const data = new FormData();
    // menambahkan objek baru dengan append
    data.append('title', title);
    data.append('body', body);
    data.append('image', image);

    axios
      .post('http://localhost:3000/v1/blog/post', data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log('post success', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //2. mengirim foto ke database dan menampilkan previewnya

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <>
      <div className="m-4">
        <Link to="/" onClick={() => navigate('/')}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
        <form onSubmit={onSubmit}>
          <div className="createblog-wrap">
            {/* 3.kasih onChange dan tampikan preview image disini */}
            <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
          </div>
          <Gap height={20} />
          <Input placeholder="Title.." className="input-title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextArea className="text-area" placeholder="Tell your story.." value={body} onChange={(e) => setBody(e.target.value)} />

          <div className="button-action">
            <Button title="save" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
