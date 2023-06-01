import React from 'react';
import { Saida } from "./style.js";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <Saida>
      <button className="cesar" onClick={handleRedirect}></button>
    </Saida>
  );
};

export default Logout;
