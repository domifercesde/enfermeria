import "./Home.css";
export function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
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
              className="d-block w-100"
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
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>enfermeria</h5>
              <p>“Las enfermeras son ángeles con zapatos cómodos”</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/enfermeria-ab241.appspot.com/o/en3.jfif?alt=media&token=b5b83ab9-13f5-44c5-85b9-7fdacae797e2"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>enfermeria</h5>
              <p>
                “Una enfermera siempre nos dará esperanza; es un ángel con
                estetoscopio”
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
          <img
            src="https://firebasestorage.googleapis.com/v0/b/enfermeria-ab241.appspot.com/o/en1.jfif?alt=media&token=d6fd6f45-fdc0-42ba-b2f6-27371a04dd2a"
            alt="foto1"
          />
          <p>
            Los profesionales de enfermería están en la línea de acción en la
            prestación de los servicios y desempeñan una función importante en
            la atención centrada en las personas y comunidades. En muchos países
            son líderes o actores clave en los equipos de salud
            multiprofesionales e interdisciplinarios. Proporcionan una amplia
            gama de los servicios a todos los niveles del sistema de salud. Hay
            escasez de enfermeras en la Región de las Américas debido
            principalmente a la migración de profesionales a otras regiones, a
            las diferentes condiciones de desarrollo económico de los países,
            las políticas de recursos humanos en salud y de enfermería, las
            precarias condiciones de empleo y de trabajo y a la falta de
            regulación profesional.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
