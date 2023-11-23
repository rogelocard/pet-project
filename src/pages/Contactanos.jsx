import React from 'react'
import Container from 'react-bootstrap/Container';
import style from '../style/nosotros.module.css'
import correo from '../assets/img/correo.png'
import facebook from '../assets/img/facebook.png'
import whatsapp from '../assets/img/whatsapp.png'
import instagram from '../assets/img/instagram.png'

const Contactanos = () => {
  return (
    <>
      <Container fluid className={style.container}>
          <Container className={`${style.left} `}>

          </Container>
          <Container className={style.right}>
            <h1 className={style.h1}>Contactate con nosotros</h1>
            <h3 className={style.h3}>Enviamos un correo</h3>
            <div class={style.correo}>
              <a href="#">
                <img src={correo} alt="Correo"/>
              </a>
              <p>petmaster@gmail.com</p>
            </div>

            <h3>Redes sociales</h3>
            <div class={style.redes_sociales}>
              <a href='#'>
                <img src={facebook} alt="Facebook"/>
              </a>
              <a href='#'>
                <img src={whatsapp} alt="WhatsApp"/>
              </a>
              <a href='#'>
                <img src={instagram} alt="Instagram"/>
              </a>
            </div>
          </Container>

      </Container>
    </>
  )
}

export default Contactanos