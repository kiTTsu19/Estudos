import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-4">Página Não Encontrada</p>
        <p className="text-lg text-gray-500 mb-6">
          A página que você está procurando não existe. Verifique o URL ou volte para a página inicial.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600 transition duration-300"
        >
          Voltar para a Página Inicial
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
