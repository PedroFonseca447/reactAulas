import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //raiz da aplicação tudo que é passado dentro do.render
  //é oq vai aparecer
  //defende o codigo esse strictMode
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
