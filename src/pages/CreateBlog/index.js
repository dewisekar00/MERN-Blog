import React, { useEffect, useState } from 'react';
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './createblog.scss';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';
import  Axios  from 'axios';

const CreateBlog = () => {
// 1.panggil reducernya
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  // a.buat state update true or false
  const [ isUpdate, setIsUpdate] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    // b.kalo ada id nya diparams berarti itu update
    if (id) {
      setIsUpdate(true);
    // c.tampilkan isi value ke createblog karena kita mau update
      const showData = async () => {
        try {
          const response = await Axios.get(`http://localhost:3000/v1/blog/post/${id}`);
          const data = response.data.data;
          dispatch(setForm('title', data.title));
          dispatch(setForm('body', data.body));
          dispatch(setImgPreview(`http://localhost:3000/${data.image}`));
        } catch (err) {
          console.log('error : ', err); 
        }
      };
  
      showData();
    }
  }, [dispatch, id]);
  

  const onSubmit = (e) => {
    e.preventDefault();
    // 2.ketika disubmit data akan dikirim ke action postAPI untuk dikirim ke backend
    let updatedForm = { ...form, imgPreview };

    if(isUpdate){
      //  d. kalo isUpdate maka akan dikirim updatenya lewat action
      updateToAPI(form, id)
      console.log('update data')
    }else{
      postToAPI(updatedForm);
      console.log('create data')
    }

   
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
            <Button title={isUpdate ? "Update" : 'Simpan'} type="submit"  />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
