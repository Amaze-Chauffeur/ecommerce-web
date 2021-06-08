<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/saas/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
=======
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './assets/sass/index.scss';
ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
  document.getElementById('root')
);



>>>>>>> cafe14b6bfff971999d9d1daff354a60190214d9
