import'./Agenda.css' 

export function Agenda() {
    return (
        <>
            <form className="row g-3 formulario">
                <div className="col-md-6">
                    <label for="inputUser" className="form-label"></label>
                    <input type="text" className="form-control" id="inputUser" placeholder="Nombre Completo"/>
                </div>
                <div className="col-md-6">
                    <label for="inputApellido" className="form-label"></label>
                    <input type="text" className="form-control" id="inputApellido" placeholder="Apellidos"/>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"></label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Correo" />
                </div>
                <div className="col-md-6">
                    <label for="inputTelefono" className="form-label"></label>
                    <input type="text" className="form-control" id="inputTelefono" placeholder="Telefono" />
                </div>
                <div className="col-12">
                    <label for="inpuDireccion" className="form-label"></label>
                    <input type="text" className="form-control" id="inputDireccion" placeholder="Direccion completa" />
                </div>
                <div className="col-md-6">
                    <label for="inputCiudad" className="form-label"></label>
                    <input type="text" className="form-control" id="inputCiudad" placeholder="Ciudad" />
                </div>
                <div className="col-md-6">
                    <label for="inputCiudad" className="form-label"></label>
                    <input type="text" className="form-control" id="inputCiudad" placeholder="Departamento" />
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
                            Servicio de Urgencia 
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Agendar</button>
                </div>
            </form>
        </>
    )
}