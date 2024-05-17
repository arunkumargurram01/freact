import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import reportWebVitals from './reportWebVitals';


/* import {BrowserRouter} from 'react-router-dom' */
/* import RoutePage from './Components/RoutePage'; */
import SingleProduct from './Components/SingleProduct';

/* Main Routing Page  */
import CommanUI from './Pages/CommanUI'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/*  <App /> */}

  <BrowserRouter>
    {/*  */}
    <CommanUI />
  </BrowserRouter>

   {/* <SingleProduct /> */}

    


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
