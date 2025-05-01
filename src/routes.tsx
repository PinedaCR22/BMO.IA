import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';

// Páginas
import Aportes from './pages/Aportes';
import Historia from './pages/Historia';

import HomePage from './pages/Homepage';
import Beneficios from './pages/Beneficios';
import ChatPage from './pages/Chatpage';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="aportes" element={<Aportes />} />
          <Route path="historia" element={<Historia />} />
          <Route path="chat" element={<ChatPage />} /> 
          <Route path="beneficios" element={<Beneficios />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="text-center mt-10">
              <h1 className="text-2xl font-bold">404 - Página no encontrada</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
