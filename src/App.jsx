import './style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Nosotros } from './components/Nosotros'
import { Perfil } from './components/Perfil'
import { Registro } from './components/Registro'
import { CreacionCategoria } from './components/CreacionCategoria'

function App() {


  return (
    <>
      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/nosotros' element={<Nosotros/>} ></Route>
          <Route path='/perfil/:idUsuario' element={<Perfil/>} ></Route>
          <Route path='/registro' element={<Registro/>} ></Route>
          <Route path='/crearCategoria' element={<CreacionCategoria/>} ></Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
