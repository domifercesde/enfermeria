import './Agenda.css'
import { PersonBadge, PersonCircle, EnvelopeAtFill, TelephoneForwardFill, HouseDoorFill } from 'react-bootstrap-icons'


export function Agenda() {
    return (
        <>
            <div className="container">
                <form className="row g-3 formulario">
                    <div className="row">
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><PersonBadge size={16} /></span>
                                <input type="text" className="form-control" id="inputUser" placeholder="Nombre Completo" />
                            </div>
                        </div>


                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><PersonCircle size={16} /></span>
                                <input type="text" className="form-control" id="inputApellido" placeholder="Apellidos" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><EnvelopeAtFill size={16} /></span>
                                <input type="text" className="form-control" id="inputUser" placeholder="Correo" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><TelephoneForwardFill size={16} /></span>
                                <input type="text" className="form-control" id="inputUser" placeholder="Telefono" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><HouseDoorFill size={16} /></span>
                                <input type="text" className="form-control" id="inputDireccion" placeholder="Direccion completa" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"></span>
                                <input type="text" className="form-control" id="inputUser" placeholder="Ciudad" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"></span>
                                <input type="text" className="form-control" id="inputUser" placeholder="Departamento" />
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
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
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