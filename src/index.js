//1)Necesitamos a React
import React from 'react';
//2)Necesitamos a ReactDOM
import ReactDOM from 'react-dom';

import './bootstrap/bootstrap.min.css';
import "./css/index.css";

//3)Necesitamos un componente para mostrar
import App from './components/App';

//4)Necesitamos mostrar el componente
ReactDOM.render( <App/> ,document.getElementById('root'));