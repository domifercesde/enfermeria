import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


import { BrowserRouter } from 'react-router-dom'
import { Menu } from './Menu/Menu'
import { Footer } from './Footer/Footer'
import { Servicio } from './Servicio/Servicio'
import { Home } from './Home/Home'
import { Agenda } from './Agenda/Agenda'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
    <Home/>
    <Agenda/>
    <Servicio/>
    <Footer />
    
    </BrowserRouter>

  </React.StrictMode>,
)
