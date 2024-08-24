// src/routes/Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from '../ErrorPage'; // Ajuste o caminho conforme a estrutura do projeto

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        {/* Adicione outras rotas aqui, se necessário */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
