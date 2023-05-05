import { Route, Routes } from "react-router-dom"
import { Menu } from "../Menu/Menu"
import { Footer } from "../Footer/Footer"
import { Home } from "../Home/Home"
export  function Rutas(){
    return(
        <>
        <Menu/>
        <div style={{ backgroundColor: '#FDE3EB'}}>
        <Routes>
            
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Members />} />
        <Route path="/tienda" element={<Tienda />} />
        </Routes>
        </div>
        <Footer/>
        </>
    )
}