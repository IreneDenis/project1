import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
//     
import "primereact/resources/primereact.min.css";
//                                       
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PrimeReactProvider>
    <App/>
    </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
