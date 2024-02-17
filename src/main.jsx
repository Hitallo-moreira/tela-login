import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/variables.scss'
import './styles/form.scss'
import './styles/sucesso.scss'
import AppRoutes from './routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
