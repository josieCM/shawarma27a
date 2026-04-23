import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home.tsx';
import Menu from './src/pages/Menu.tsx';
import Order from './src/pages/Order.tsx';
import Catering from './src/pages/Catering.tsx';
import Admin from './src/pages/Admin.tsx';
import NotFound from './src/pages/NotFound.tsx';

const App: React.FC = () => {
  return (
    <Theme appearance="light" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;