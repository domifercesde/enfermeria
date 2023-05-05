import { Link } from "react-router-dom"
import './Footer.css'
export function Footer() {
    return (
        <>
            <div className="footerr">
                <footer class="text-center text-lg-start text-muted">

                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                        <div className="me-5 d-none d-lg-block">
                            <span>Encuentranos en nuestras redes sociales:</span>
                        </div>                                  
                                <div>
                            <Link href="" className="me-4 link-secondary">
                            <i className="bi bi-github fs-1"></i>
                            </Link>
                            <Link to="" className="me-4 link-secondary">
                            <i className="bi bi-google fs-1"></i>
                            </Link>                            
                        </div>                                        
                    </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                                    
                                    <img src="https://firebasestorage.googleapis.com/v0/b/smmtienda-9dce6.appspot.com/o/logoDomifer.png?alt=media&token=a9dfb486-4a30-4cde-ac55-65e2fc0a4018" alt="" width="150" className="rounded-circle"/>                            
                                </div>
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 cfoter">
                                        domifer
                                    </h6>
                                    <p>
                                        Especialistas en brindar servicios de enfermeria a domicio, con un desempe;o unico e inigualable.
                                    </p>
                                </div>                                
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                                    
                                    <h6 className="text-uppercase fw-bold mb-4 cfoter">
                                        cuentas de github
                                    </h6>
                                    <p>
                                    <a href= "https://github.com/Andresrua23" className="tdn cfoter">Andresrua23 - Overview</a>
                                    </p> 
                                    <p>
                                    <a href="daniel1126200(github.com)"className="tdn cfoter">daniel1126200(github.com)</a>
                                    </p>
                                     <p>
                                     <a href="https://github.com/Davidarredondo"className="tdn cfoter">Davidarredondo (github.com)</a>
                                    </p>    
                                    <p>
                                    <a href="https://github.com/EstebanHernandezA16" className="tdn cfoter">EstebanHernandezA16 - Overview</a>
                                    </p> 
                                    <p>
                                    <a href="https://github.com/Jpablo-07" className="tdn cfoter">Jpablo-07 - Overview</a>
                                    </p> 
                                    <p>
                                     <a href="https://github.com/santttimunoz" className="tdn cfoter">santttimunoz</a>
                                    </p>                               
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4 cfoter">Mienbros del equipo</h6>
                                    <p>Andres Rua Arango</p>
                                    <p>Daniel Felipe Mosquera Renteria </p>                                                                                                             
                                    <p>David Alejandro</p>
                                    <p>Esteban Hernandez Agudelo </p>
                                    <p>Pablo Zapata </p>
                                    <p>Santiago Muñoz</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-4">
                        © 2023 Copyright:
                        <Link className="text-decoration-none cfoter"> Domifer</Link>
                    </div>
                </footer>
            </div>
        </>
    )
}