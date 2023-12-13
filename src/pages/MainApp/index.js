import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Footer, Header } from '../../components';
import './mainApp.scss';

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
 
   <Header />
 
   <div className='content-wrapper'>
   <Routes>
        {/* membuat isi menjadi dinamis */}
      <Route path="/create-post" element={<CreateBlog />} />
      <Route path="/detail-post" element={<DetailBlog />} />
      <Route path="/" element={<Home />} />

      </Routes>
   </div>

      
< Footer />

    </div>
  );
};

export default MainApp;

// note:membuat routing nested