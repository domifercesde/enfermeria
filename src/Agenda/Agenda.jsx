import { useState } from 'react'
import './Agenda.css'
import { agendarCita } from '../Servicio/servicioAgendar'

import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

import { PersonBadge, PersonCircle, EnvelopeAtFill, TelephoneForwardFill, HouseDoorFill } from 'react-bootstrap-icons'


export function Agenda() {

    const [nombre, setNombre] = useState('')
   
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [hora, setHora]=useState('')
    const [dia, setDia]=useState('')
   

    const [errores, setErrores] = useState({})
    
  
   

    // useEffect(() => {
        
    //     if (Object.keys(errores).length > 0) {
    //         alert("lanzo el error")
    //     } else if (envioFormulario) {
    //         let datosEnvio = {
    //             nombre,
    //             correo,
    //             telefono,
    //             hora,
    //             dia,
    //             tipo: 3
    //         }
    //         alert("Enviado Correctamente");
    //         agendarCita(datosEnvio).then(function (respuesta) {
    //             console.log('respuesta de la API'+respuesta)
    //         })
    //     }





    // }, [errores, envioFormulario]);

    function validarFormulario(evento) {
        evento.preventDefault()

      console.log(nombre,
        correo,
        telefono,
        hora,
        dia,);

        let listaErrores = {};
        if (!nombre) {
            listaErrores.nombre = "El nombre es requerido"
        }
      
        if (!correo) {
            listaErrores.correo = "El correo es requerido"
        }
        if (!telefono) {
            listaErrores.telefono = "El telefono es requerido"
        }
        if (!hora){
            listaErrores.hora = 'La hora es requerida'
        }
        if(!dia){
            listaErrores.dia = 'La fecha es requerida'
        }

        if (Object.keys(listaErrores).length > 0) {
            Swal.fire({
                title:'Error',
                icon: 'error',
                text:'Todos los campos son requeridos',
                iconColor:'pink',
                timer:5000
            })
          } else {
            
           
            const response = agendarCita(nombre,correo,telefono,hora,dia)

            if(!response.error){
                Swal.fire({
                    title:'Exito',
                    icon:'success',
                    text:`Cita agendada exitosamente, te veremos el ${dia} a las ${hora}`,
                    timer: 0
                    
                })
            }else{
                Swal.fire({
                    title:'Error',
                    icon: 'error',
                    text:'No se pudo agendar la cita... intenta de nuevo mas tarde',
                    iconColor:'purple',
                    timer:5000
                })
            }

          }
       

        // setErrores(listaErrores)
        // if (Object.keys(listaErrores).length == 0) {
        //     setEnvioFormulario(true)
        // }

    }

   const handleDia = (dia) =>{
    setDia(dia)
   }

    return (
      <>
        <div className="container" >
          <form className="row g-3 formulario" onSubmit={validarFormulario} >
            <div className="row" style={{marginTop: '5vh'}}>
              <div className="col-12">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <PersonBadge size={16} />
                  </span>
                  <input
                    type="text"
                    className={`form-control ${
                      errores.nombre ? "is-invalid" : ""
                    }`}
                    id="nombre"
                    placeholder="Nombre Completo"
                    value={nombre}
                    onChange={function (evento) {
                      setNombre(evento.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <EnvelopeAtFill size={16} />
                  </span>
                  <input
                    type="email"
                    className={`form-control ${
                      errores.correo ? "is-invalid" : ""
                    }`}
                    id="correo"
                    placeholder="Correo"
                    value={correo}
                    onChange={function (evento) {
                      setCorreo(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <TelephoneForwardFill size={16} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    placeholder="Telefono"
                    onChange={function (evento) {
                      setTelefono(evento.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

           
            <div className="col-4">
              <label htmlFor="date">Fecha:</label>
              <br />
              <input
                type="date"
                value={dia}
                onChange={(event) => setDia(event.target.value)}
              />
            </div>
            <div className="col-4">
              <label htmlFor="date">Hora:</label>
              <br />
              <input
                type="time"
                value={hora}
                onChange={(event) => setHora(event.target.value)}
              />
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="servicios"
                />
                <label className="form-check-label" for="gridCheck">
                  Servicio de Urgencia (cobro extra)
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit"  className="btn btn btn-danger">
                Agendar
              </button>
            </div>
          </form>
        </div>
      </>
    );
}