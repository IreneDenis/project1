/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
//     
import "primereact/resources/primereact.min.css";
//                                       
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/Store.jsx";
import { persistStore } from 'redux-persist';
// import { Provider } from "react-redux";






let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <provider store={store}>
          <persistGate persistor={persistor}>
            <App/> 
          </persistGate>
        </provider>
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
