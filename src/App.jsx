import { useState } from 'react'
import './style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Nosotros } from './components/Nosotros'
import { Perfil } from './components/Perfil'

function App() {


  return (
    <>
      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/nosotros' element={<Nosotros/>} ></Route>
          <Route path='/perfil' element={<Perfil/>} ></Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
