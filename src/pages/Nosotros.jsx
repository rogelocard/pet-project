import React from 'react';
import styles from '../style/nosotros.module.css';
import img1 from '../assets/img/nosotros1.jpg';
import img2 from '../assets/img/nosotros2.jpg';
const Nosotros = () => {
  return (
    <>
      <h1 className='text-center'>Sobre nosotros</h1>
      <div className={styles.contenidoNosotros}>
        <img src={img1} alt="Servicio1" />
        <p>Buena medicina más un excelente servicio para ti y tu mascota son nuestras premisas de una buena atención a nuestros clientes.</p>
        <p>Pet-Master es un nuevo concepto en atención médica veterinaria. Nuestra misión es hacer que tú y tu mascota tengan una relación: feliz, responsable y duradera.</p>
        <img src={img2} alt="Servicio1" />
      </div>

    </>

  )
}

export default Nosotros