import '../Home.css'
import { servicio } from '../servicio/servicio';

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
            src=""
            alt="foto1"
          />
          <p>
            {" "}
          </p>
        </div>
      </div>
    </>
  );
}
