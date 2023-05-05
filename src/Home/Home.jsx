import '../Home.css'
import { servicio } from '../servicio/servicio';

export function Home() {
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
              src="https://firebasestorage.googleapis.com/v0/b/enfermeria-ab241.appspot.com/o/en1.jfif?alt=media&token=d6fd6f45-fdc0-42ba-b2f6-27371a04dd2a"
              className="d-block w-100 carrusel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>enfermeria</h5>
              <p>
                “La enfermería es como una manía, una fiebre en la sangre, una
                enfermedad incurable que una vez contraída no se puede curar. Si
                no fuera así, no habría enfermeros”
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/enfermeria-ab241.appspot.com/o/en2.jfif?alt=media&token=47e1ffbb-2271-4289-ae57-dd36696495c8"
              className="d-block w-100 carrusel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>enfermeria</h5>
              <p>“Las enfermeras son ángeles con zapatos cómodos”</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/enfermeria-ab241.appspot.com/o/en10.jfif?alt=media&token=21f989fa-dfed-4bb0-b0d9-9aee2f33938a"
              className="d-block w-100 carrusel"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>enfermeria</h5>
              <p>
               
              </p>
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

      <div className="row">
        <div className="col-md-12-md-6">
            <h1 className="text-center">Enfermeria profesional</h1>
          <img
<<<<<<< HEAD
            src=""
=======
            src="https://firebasestorage.googleapis.com/v0/b/enfermeria-ab241.appspot.com/o/en7.jfif?alt=media&token=6387e4f7-e483-4664-be93-cfe3bef96e5b"
>>>>>>> 7afb6e1ec9368e03e0721fdc429cfc2e90110add
            alt="foto1"
          />
          
          <p>
<<<<<<< HEAD
            {" "}
=======
            Los profesionales de enfermería están en la línea de acción en la
            prestación de los servicios y desempeñan una función importante en
            la atención centrada en las personas y comunidades.Proporcionan una amplia
            gama de los servicios a todos los niveles del sistema de salud.{" "}
>>>>>>> 7afb6e1ec9368e03e0721fdc429cfc2e90110add
          </p>

          
        </div>
      </div>
    </>
  );
}
