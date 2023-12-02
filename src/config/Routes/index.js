import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from '../../pages';

const AppRoutes = () => {
  return (
    <Router>
      {/* didalam sini menambahkan halaman apa saja yang akan digunakan */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

// note:<BrowserRouter> yang membungkus semua routing