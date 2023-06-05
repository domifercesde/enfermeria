import { Route, Routes } from "react-router-dom"
import { Menu } from "../Menu/Menu"
import { Footer } from "../Footer/Footer"
import { Home } from "../Home/Home"
import { Servicio } from "../Servicio/Servicio"
import { Agenda } from "../Agenda/Agenda"
import { Listareservas } from "../ListaReservas/ListaReservas"
export  function Rutas(){
    return(
        <>
        <Menu/>
        <div style={{ backgroundColor: '#FDE3EB'}}>
        <Routes>
            
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicio />} />
        <Route path="/formulario" element={<Agenda />} />
        <Route path="/reservas" element={<Listareservas />}/>
        </Routes>
        </div>
        <Footer/>
        </>
    )
}