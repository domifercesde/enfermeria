import { useEffect, useState } from 'react'
import './Agenda.css'
import { agendarCita } from '../Servicio/servicioAgendar'

import { PersonBadge, PersonCircle, EnvelopeAtFill, TelephoneForwardFill, HouseDoorFill } from 'react-bootstrap-icons'


export function Agenda() {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [servicios, setServicios] = useState("")

    const [errores, setErrores] = useState({})
    const [data, setData] = useState({})
    const [envioFormulario, setEnvioFormulario] = useState(false)

    useEffect(() => {
        alert("errores")
        if (Object.keys(errores).length > 0) {
            alert("lanzo el error")
        } else if (envioFormulario) {
            let datosEnvio = {
                nombre,
                apellido,
                correo,
                telefono,
                direccion,
                ciudad,
                departamento,
                servicios,
                tipo: 3
            }
            alert("Enviado Correctamente");
            agendarCita(datosEnvio).then(function (respuesta) {
                console.log(respuesta)
            })
        }
    }, [errores, envioFormulario]);

    function validarFormulario(evento) {
        evento.preventDefault()

        let listaErrores = {};
        if (!nombre) {
            listaErrores.nombre = "El nombre es requerido"
        }
        if (!apellido) {
            listaErrores.apellido = "El apellido es requerido"
        }
        if (!correo) {
            listaErrores.correo = "El correo es requerido"
        }
        if (!telefono) {
            listaErrores.telefono = "El telefono es requerido"
        }
        if (!direccion) {
            listaErrores.direccion = "La direccion es requerida"
        }
        if (!ciudad) {
            listaErrores.ciudad = "La ciudad es requerida"
        }
        if (!departamento) {
            listaErrores.departamento = "El departamento es requerido"
        }
        if (!servicios) {
            listaErrores.servicios = "El servicio es requerido"
        }

        setErrores(listaErrores)
        if (Object.keys(listaErrores).length == 0) {
            setEnvioFormulario(true)
        }

    }

    return (
        <>
            <div className="container">
                <form className="row g-3 formulario">
                    <div className="row">
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><PersonBadge size={16} /></span>
                                <input type="text"
                                 className={`form-control ${errores.nombre?'is-invalid':''}`}
                                  id="nombre"
                                 placeholder="Nombre Completo" 
                                 value={nombre}
                                 onChange={function(evento){setNombre(evento.target.value)}}/>
                            </div>
                        </div>


                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><PersonCircle size={16} /></span>
                                <input type="text" 
                                className={`form-control ${errores.apellido?'is-invalid':''}`}
                                 id="apellido" 
                                 placeholder="Apellidos" 
                                 value={apellido}
                                 onChange={function(evento){setApellido(evento.target.value)}} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><EnvelopeAtFill size={16} /></span>
                                <input type="text"
                                 className={`form-control ${errores.correo?'is-invalid':''}`}
                                 id="correo"
                                  placeholder="Correo"
                                  value={correo} 
                                  onChange={function(evento){setCorreo(evento.target.value)}}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><TelephoneForwardFill size={16} /></span>
                                <input type="text" 
                                className="form-control" 
                                id="telefono" 
                                placeholder="Telefono"
                                 />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><HouseDoorFill size={16} /></span>
                                <input type="text" className="form-control" id="direccion" placeholder="Direccion completa" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"></span>
                                <input type="text" className="form-control" id="ciudad" placeholder="Ciudad" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"></span>
                                <input type="text" className="form-control" id="departamento" placeholder="Departamento" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">Servicios</label>
                        <select id="inputState" className="form-select">
                            <option selected>Seleccione</option>
                            <option>Inyectologia</option>
                            <option>Pediatria</option>
                            <option>Medicina General</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="servicios" />
                            <label className="form-check-label" for="gridCheck">
                                Servicio de Urgencia (cobro extra)
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Agendar</button>
                    </div>
                </form>
            </div>
        </>
    )
}