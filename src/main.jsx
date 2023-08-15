import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
import { PrimeReactProvider } from 'primereact/api';
import Login from './components/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
    <Login/>
    </PrimeReactProvider>
  </React.StrictMode>,
)
