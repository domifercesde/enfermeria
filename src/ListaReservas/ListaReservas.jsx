import { useState,useEffect } from "react"
import {consultarReserva} from "../Servicio/servicioReserva"
import { Carga } from "../Carga/Carga"
export function Listareservas(){

    //configuro mis variables de estado
    //uso para almacenar los datos que lleguen del api
    const[reservas,setReserva]=useState(null)
    const[carga,setCarga]=useState(true)

    //programo el useeffect para garantizar que llamare
    //al servicio SOLO CUANDO CARGUE MI COMPONENTE
    useEffect(function(){},[
        consultarReserva().then(function(respuestaDelBack){
            setReserva(respuestaDelBack.reservas)
            setCarga(false)
        })
    ])


    //programo la interfaz para mostrar el mensaje de carga o para mostrar los datos
    //del servicio
    if(carga){
        return(
            <>
            <Carga/>
            </>
            
        )
       
    }else{

        return(
            <>
                <br /><br /><br />
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {
                            reservas.map(function(reserva){
                                if(reserva.tipo==3){
                                    return(
                                        <div className="col">
                                            <div className="card h-100 shadow">
                                                <h5>Cliente: {reserva.nombre}</h5>
                                                <p>Contacto: {reserva.telefono}</p>
                                                <p>Fecha: {reserva.dia}</p>
                                                <p>Hora: {reserva.hora}</p>
                                            </div>
                                        </div>
                                    )

                                }
                               
                            })
                        }

                    </div>
                </div>
            </>
        )

    }

    
}

