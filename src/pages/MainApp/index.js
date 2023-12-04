import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';

const MainApp = () => {
  return (
    <div>
      <p> Header</p>
      <Routes>
        {/* membuat isi menjadi dinamis */}
      <Route path="/create-post" element={<CreateBlog />} />
      <Route path="/detail-post" element={<DetailBlog />} />
      <Route path="/" element={<Home />} />

      </Routes>
      <p> Footer</p>
    </div>
  );
};

export default MainApp;

// note:membuat routing nested