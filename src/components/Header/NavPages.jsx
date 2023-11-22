import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contactanos from '../../pages/Contactanos'
import Inicio from '../../pages/Inicio'
import Nosotros from '../../pages/Nosotros'
import Servicios from '../../pages/Servicios'

const NavPages = () => {
  return (
    <React.Fragment>
        <section>
            <Routes>
                <Route index element={<Inicio/>} />
                <Route path="nosotros" element={<Nosotros/>} />
                <Route path="servicios" element={<Servicios/>} />
                <Route path="contactanos" element={<Contactanos/>} />
                {/* Any other route */}
            </Routes>
        </section>
    </React.Fragment>
  )
}

export default NavPages