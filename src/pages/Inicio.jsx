import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from '../style/inicio.module.css'
import Button from 'react-bootstrap/Button';
// Images services
import clinica from '../assets/img/clinica.svg'
import lostPet from '../assets/img/lostPet.svg'
import laboratorio from '../assets/img/laboratorio.svg'
import Belleza from '../assets/img/Belleza.svg'
// Images for galary
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'
import img5 from '../assets/img/5.jpg'
import img6 from '../assets/img/6.jpg'
import img7 from '../assets/img/7.jpg'
import img8 from '../assets/img/8.jpg'
import img9 from '../assets/img/9.jpg'
import img10 from '../assets/img/10.jpg'

/**
 * Home page with general information of the project
 * @returns The main page with every sections, <Hero>, <services>, <testimonies> and <footer>
 */
const Inicio = () => {
  return (
    <>
      <section className={style.hero}>
        <Container fluid className={style.containerHero}>
          <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
            <Col md={8} className="text-center">
              <h1>Pet Master</h1>
              <p className="contenedor">Pet-Master es un nuevo concepto en servicios médicos veterinarios que ofrece un servicio integral con equipos de última generación, procesos claros y transparentes, precios competitivos y un grupo de profesionales especializados en la atención a los propietarios y sus mascotas</p>
            </Col>
          </Row>
        </Container>
      </section>

      <main>
        {/* <Container className="{style.tituloCards} text-center my-5" > */}
        <Container className={`${style.tituloCards} text-center my-5`} >
          <h2>Tenemos estas opciones para tí</h2>
        </Container>

        <Container className={style.cards}>
          <Row>
            <Col xs={12} md={6} lg={3} className="mb-4">
              <div className={`${style.cards__contenido} text-center p-4`}>
                <img src={clinica} alt="clinica" />
                <p>Clínica</p>
                <Button className={style.button}>Agendar Cita</Button>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-4">
              <div className={`${style.cards__contenido} text-center p-4`}>
                <img src={Belleza} alt="belleza" />
                <p>Belleza</p>
                <Button className={style.button}>Obtener Servicio</Button>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-4">
              <div className={`${style.cards__contenido} text-center p-4`}>
                <img src={laboratorio} alt="" />
                <p>Laboratorio</p>
                <Button className={style.button}>Agendar</Button>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-4">
              <div className={`${style.cards__contenido} text-center p-4`}>
                <img src={lostPet} alt="" />
                <p>Mascota perdida</p>
                <Button className={style.button}>Reportar</Button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mas_servicios text-center my-5">
          <Button className={style.button}>Más servicios →</Button>
        </Container>
      </main>

      {/* Galery */}
      <section class={style.section_galeria}>
        <h3 class={style.titulo__galeria}>Mascotas de nuestros clientes</h3>
        <div class={style.galeria}>
            <img src={img1} alt="imagen-galeria1"/>
            <img src={img2} alt="imagen-galeria2"/>
            <img src={img3} alt="imagen-galeria3"/>
            <img src={img4} alt="imagen-galeria4"/>
            <img src={img5} alt="imagen-galeria5"/>
            <img src={img6} alt="imagen-galeria6"/>
            <img src={img7} alt="imagen-galeria7"/>
            <img src={img8} alt="imagen-galeria8"/>
            <img src={img9} alt="imagen-galeria9"/>
            <img src={img10} alt="imagen-galeria10"/>
        </div>
      </section>
    </>
  )
}

export default Inicio