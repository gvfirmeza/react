import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Sobre from './pages/Sobre';
import Entra from './pages/Entra';
import Cadastro1 from './pages/Cadastro1';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
  ,
  {
    path: "/Sobre",
    element: <Sobre />
  }
  ,
  {
    path: '/Entra',
    element: <Entra />
  }
  ,
  {
    path: "/cadastro",
    element: <Cadastro1 />
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
