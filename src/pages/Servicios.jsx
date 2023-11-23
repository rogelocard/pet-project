import React from 'react';
import style from '../style/servicio.module.css';
// Images services
import img1 from '../assets/img/servicio1.jpg';
import img2 from '../assets/img/servicio2.jpg';
import img3 from '../assets/img/servicio3.jpg';
import img4 from '../assets/img/servicio4.jpg';
const Servicios = () => {
  return (
    <>
      <main>
        <div className={style.tituloCardsServicios}>
          <h2 className='text-center'>Tenemos estas opciones para ti</h2>
        </div>
        <div className={style.cardsServicios}>
          <div className={style.cardServicios}>
            <div className={style.cardImagen}>
            <img src={img1} alt="Servicio1"/>
            </div>
            <div className={style.cardContenido}>
              <p>Clinica</p>
              <p>¡Te brindamos un diagnóstico claro y el tratamiento ideal para tu mascota!</p>
              <a className={style.boton} href="">
                Agendar cita
              </a>
            </div>
          </div>

          <div className={style.cardServicios}>
            <div className={style.cardImagen}>
            <img src={img2} alt="Servicio2"/>
            </div>
            <div className={style.cardContenido}>
              <p>Belleza</p>
              <p>¡Somos la solución para dejar hermoso a tu peludito!</p>
              <a className={style.boton} href="">
                Obtener servicio
              </a>
            </div>
          </div>

          <div className={style.cardServicios}>
            <div className={style.cardImagen}>
            <img src={img3} alt="Servicio3"/>
            </div>
            <div className={style.cardContenido}>
              <p>Laboratorio</p>
              <p>Diagnóstico eficaz y tratamiento oportuno para tu mascota.</p>
              <a className={style.boton} href="">
                Agendar Lab
              </a>
            </div>
          </div>

          <div className={style.cardServicios}>
            <div className={style.cardImagen}>
            <img src={img4} alt="Servicio4"/>
            </div>
            <div className={style.cardContenido}>
              <p>Reportar una mascota perdida</p>
              <p>Completa el formulario y reporta tu mascota perdida</p>
              <a className={style.boton2} href="">
                Reportar
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Servicios;