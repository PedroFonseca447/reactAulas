import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    //onde sai a rederização do site
    //ele carrega os componentes dos outros
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
