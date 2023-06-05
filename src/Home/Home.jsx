import './Home.css'
import { Carga } from '../Carga/Carga';
import { useState,useEffect } from 'react';


export function Home() {
  const[estadodecarga,setEstadoCarga]=useState(true)
    const[tiempoCarga,setTiempoCarga]=useState(0)

    useEffect(function(){
        tiempoCarga>0?setEstadoCarga(false):setEstadoCarga(true)
      
    },[tiempoCarga])

    setTimeout(function(){
        setTiempoCarga(1)
    },[5000])

    if(estadodecarga){

        return(
            <>
            <br /><br /><br />
            <Carga/>
            </>
        )
    }else{
  return (
    <>

      <div id="carouselExampleCaptions" className="carousel slide carrusel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
            style={{height:'100vh', width: '50vh'}}
              src="https://firebasestorage.googleapis.com/v0/b/proyecto-scrum-momento-ll.appspot.com/o/img3%20nurse.png?alt=media&token=4db749da-2707-47de-b532-e93d1e9236a0"
              className="d-block w-100 carrusel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
            
            </div>
          </div>
          <div className="carousel-item">
            <img
            style={{height:'100vh', width: '50vh'}}
              src="https://firebasestorage.googleapis.com/v0/b/proyecto-scrum-momento-ll.appspot.com/o/banner2.jpg?alt=media&token=ffe285aa-58b2-4ad4-b958-f6e12b3af8f8"
              className="d-block w-100 carrusel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div className="carousel-item">
            <img
             style={{height:'100vh', width: '50vh'}}
              src="https://firebasestorage.googleapis.com/v0/b/proyecto-scrum-momento-ll.appspot.com/o/banner3.jpg?alt=media&token=0e577ec2-03ff-4ae2-8b45-585f029d404b"
              className="d-block w-100 carrusel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">siguiente</span>
        </button>
      </div>



  
        
          <div className="container">
            <div className="row">
            <div className="col-6 col-md-6">
              
              <img
               style={{height:'50vh', width: '60vh',marginLeft: '10vh'}}
                src="https://firebasestorage.googleapis.com/v0/b/proyecto-scrum-momento-ll.appspot.com/o/nurse%20img1.jpg?alt=media&token=fc62871d-c188-446c-a0c3-9fa76f94bd30"
                alt="foto1"
              />
              </div>
              <div className="col-4 col-md-6">
                <p>
                  Los profesionales de enfermería están en la línea de acción en
                  la prestación de los servicios y desempeñan una función
                  importante en la atención centrada en las personas y
                  comunidades.Proporcionan una amplia gama de los servicios a
                  todos los niveles del sistema de salud.{" "}
                </p>
              </div>
              
              </div>
              <br /> <br />
      
              <div className="row">
               <div className="col-6 col-md-6">
               <p>
               La enfermería tradicional abarca los cuidados autónomos y en colaboración, que se prestan a las personas de todas las edades, familias, grupos y comunidades, enfermos o sanos en todos los contextos, e incluyen la de la salud, la prevención de la enfermedad, y los cuidados de los enfermos, discapacitados y personas moribundas. Las funciones esenciales de la enfermería son la defensa, el fomento de un entorno seguro, la investigación, la participación en la política de salud y en la gestión de los pacientes y los sistemas de salud, y la formación.
                </p>
              
                </div> 
                <div className="col">
                <img
                style={{height:'50vh', width: '60vh',marginLeft: '10vh'}}
                  src="https://firebasestorage.googleapis.com/v0/b/proyecto-scrum-momento-ll.appspot.com/o/nurse%20img2.jpg?alt=media&token=4108c1d4-7e43-44ab-a47b-0411d73cd46c"
                  alt="foto2"
                />
              
              </div>
              </div>
            
            </div>
       
      

    </>
  );

}
}
