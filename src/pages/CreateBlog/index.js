import React from 'react';
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './createblog.scss'
const CreateBlog = () => {
  // console.log('CreateBlog component is rendered!'); // Debugging log
  return (
    <>
  
    <div className='createblog-wrap'>
  
      <Upload />
      </div>
      <Gap height={20} />
    <Input placeholder='Title..' className='input-title' />
  < TextArea className='text-area' placeholder='Tell your story..'/>

    <div className='button-action'>
    <Button title="save" />
    </div>


    </>
  );
};

export default CreateBlog;
