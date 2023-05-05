import'./Servicio.css'

export function Servicio(){


    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dfmrtiendas.appspot.com/o/enfermeria.jpg?alt=media&token=21a23814-a140-4d5a-b47e-00e4d1cbbad6" alt="img" className='img-fluid w-100' />
                    </div>
                </div>
            </div>  
            <div className="container-fluid bg-dark fw-bold text-white text-center">
                <div className="row p-3">
                    <div className="col-12 text-center">
                        <h4 color=''>Nuestro Servicio</h4>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-3">
                    <h4>Inyectologia</h4>
                        <img src="https://firebasestorage.googleapis.com/v0/b/dfmrtiendas.appspot.com/o/medicina.jpg?alt=media&token=dada1ad6-5343-4323-80ce-79cdd5dfb287" alt="s1" className="img-fluid w-100" />
                        <p>Es un procedimiento mediante el cual se administra un medicamento o tratamiento a un paciente por diferentes vías de aplicación (endovenosa, intramuscular, subcutánea, rectal). Nos destacamos por contar con profesionales idóneos en esta actividad y el servicio seofrece bajo los protocolos definidos por CARE24 garantizando la más estricta vigilancia,control y seguridad hacia el paciente</p>
                        <h4 className='mt-2'></h4>
                    </div>
                    <div className="col-12 col-md-3">
                        <h4>Pediatria</h4>
                        <img src="https://firebasestorage.googleapis.com/v0/b/dfmrtiendas.appspot.com/o/inyectologia.webp?alt=media&token=4451acc5-b55d-48ae-806e-8b7c9f3962de" alt="s1" className="img-fluid w-100" />
                        <p>Se considera como pediatría a una especialidad médica enfocada en la atención de los niños desde su nacimiento hasta la adolescencia. Esta especialidad busca la prevención, diagnóstico y tratamiento de enfermedades o lesiones que suceden durante esta etapa de la vida.</p>
                        <h4 className='mt-2'></h4>
                    </div>
                    <div className="col-12 col-md-3">
                        <h4>Medicina General</h4>
                        <img src="https://firebasestorage.googleapis.com/v0/b/dfmrtiendas.appspot.com/o/pediatria.jpg?alt=media&token=e1dc54aa-3a7a-4b5e-9c16-7de6a1f612c8" alt="s1" className="img-fluid w-100" />
                        La medicina general es una rama de la medicina que no requiere especialización y trata un espectro muy amplio y variado de patologías. Su función es fundamental, ya que se centra, entre otras cosas, en la prevención de enfermedades y en garantizar un estado de salud general óptimo en los pacientes.
                        <h4 className='mt-2'></h4>
                    </div>
                    
                </div>
                
                
            </div>


        </>
        
    )
}