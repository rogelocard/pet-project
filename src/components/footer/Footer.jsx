import React from 'react'
// import { Container } from 'react-bootstrap'
import style from './footer.module.css'

const Footer = () => {
  return (
    <>
        <div className={style.container}>
            <p className="text-center">Todos los derechos reservados by Pet-Master © - petmaster@gmail.com </p>
        </div>
    </>
  )
}

export default Footer