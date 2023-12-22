import React from 'react';
import { Button, Gap, Input, TextArea, Upload } from '../../components';
import './createblog.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/" onClick={() => navigate('/')}>
        back
      </Link>

      <div className="createblog-wrap">
        <Upload />
      </div>
      <Gap height={20} />
      <Input placeholder="Title.." className="input-title" />
      <TextArea className="text-area" placeholder="Tell your story.." />

      <div className="button-action">
        <Button title="save" onClick={() => navigate('/')} />
      </div>
    </>
  );
};

export default CreateBlog;
