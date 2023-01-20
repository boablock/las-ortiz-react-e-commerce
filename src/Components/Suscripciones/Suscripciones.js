import React from "react";
import "./Suscripciones.css";

const Suscripciones = () => {
  return (
    <div>
      <div className="mainSuscrip container-fluid">
        <div className="row boxImgSuscri">
          <div className="boxSuscrip box1 col-sm-5 parrallax">
            <img className="imgSuscrip" src="./Assets/suscri4.jpg" alt="" />
          </div>
          <div className="boxSuscrip box2 col-sm-7">
            <div>
              <h3 className="titleSuscrip">Suscripciones </h3>
            </div>
            <hr className="hrBoxSuscrip " />
            <div>
              <p>
                <strong>Entregas semanales y quincenales</strong>{" "}
              </p>
            </div>
            <div>
              <p className="pSuscrip">
                Todos los Sábados te enviamos flores frescas, cada semana un
                ramo diferente y especialmente diseñado seleccionando lo mas
                lindo y fresco del mercado. Con la primer entrega entregamos un
                tarjetón con tips de cuidado y un video explicativo de cómo
                colocar correctamente las flores en tu florero.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center ">
        <h4 className="mt-5  titleSuscrip">
          {" "}
          Solicita tu suscripcion enviando tus datos!
        </h4>
      </div>

      <hr className="hrRey mb-5" />

      <div className="row d-flex justify-content-center ">
        <div className="col-md-6 mb-5">
          <form className="formBox">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Nombre</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Nombre"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Apellido</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Apellido"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Mail"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Telefono</label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Telefono"
                />
              </div>
            </div>

            <div className="form-group">
              <label for="inputAddress2">Direccion</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Calle y altura"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">Localidad</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">Barrio</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">CP</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Suscripciones;
