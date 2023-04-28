import { Link } from "react-router-dom"
export function Footer() {
    return (
        <>
            <div>
                <footer class="text-center text-lg-start bg-white text-muted ">

                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>      
                            {
                                /**<div>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="me-4 link-secondary">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
 */
                            }             
                    </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                                    
                                    <img src="https://firebasestorage.googleapis.com/v0/b/smmtienda-9dce6.appspot.com/o/logoDomifer.png?alt=media&token=a9dfb486-4a30-4cde-ac55-65e2fc0a4018" alt="" width="150" className="rounded-circle"/>                            
                                </div>
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        domifer
                                    </h6>
                                    <p>
                                        Especialistas en brindar servicios de enfermeria a domicio, con un desempe;o unico e inigualable.
                                    </p>
                                </div>                                
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">                                    
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        github accounts
                                    </h6>
                                    <p>
                                        n1
                                    </p> 
                                    <p>
                                        n1
                                    </p>
                                     <p>
                                        n1
                                    </p>    
                                    <p>
                                        n1
                                    </p> 
                                    <p>
                                        n1
                                    </p> 
                                    <p>
                                        n1
                                    </p>                               
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">Team members</h6>
                                    <p>nombre</p>
                                    <p>nombre</p>                                                                                                             
                                    <p>nombre</p>
                                    <p>nombre</p>
                                    <p>nombre</p>
                                    <p>nombre</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-4">
                        © 2023 Copyright:
                        <Link className="text-decoration-none"> Domifer</Link>
                    </div>
                </footer>
            </div>
        </>
    )
}