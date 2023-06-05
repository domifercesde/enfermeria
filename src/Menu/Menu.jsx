import { Link } from "react-router-dom"
import './Menu.css'
export function Menu(){
    return(
        <>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navbar-dark menuc">
                <div class="container-fluid ">
                    <Link to="/" className="navbar-brand"><img src="https://firebasestorage.googleapis.com/v0/b/smmtienda-9dce6.appspot.com/o/logoDomifer.png?alt=media&token=a9dfb486-4a30-4cde-ac55-65e2fc0a4018" alt="logo" width="45" height="40" className="rounded"/></Link>                   
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Formulario" className="nav-link">Formulario</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link to="/servicios" className="nav-link">Servicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/reservas" className="nav-link">Reservas</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
    )
}