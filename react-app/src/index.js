import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Chamado from './pages/Chamado';
import Entra from './pages/Entra';
import Cadastro1 from './pages/Cadastro1';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Abertura from './pages/Abertura';
import Dashboard from './pages/Dashboard';


const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
  ,
  {
    path: "/Chamado",
    element: <Chamado />
  }
  ,
  {
    path: '/Entra',
    element: <Entra />
  }
  ,
  {
    path: "/Cadastro",
    element: <Cadastro1 />
  }
  ,
  {
    path: "/Abertura",
    element: <Abertura />
  }
  ,
  {
    path: "/Dashboard",
    element: <Dashboard />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
