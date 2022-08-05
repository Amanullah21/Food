import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Components/Contaxt';
import Dashboard from './Components/Dashboard';
import ProductList from './Components/ProductList';
import { Routing } from './Components/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routing />
      </ContextProvider>

    </BrowserRouter>

  </React.StrictMode>
);
