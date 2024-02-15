import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Cursos } from './Cursos'


export const Home = () => {
    return (
        <>
            <NavBar />
            <div className="gradient-background roboto-regular">

        
                <div className="text-center w-full py-32">
                    <h2 className="text-gray-400 text-3xl mb-2">Bienvenido a</h2>
                    <h1 className="text-8xl font-bold mb-2 gradient-text">ZERO ACADEMY</h1>
                    <p className="text-4xl text-gray-400"> Tu Academia de confianza </p>
                    <div className="flex items-center justify-center text-center pt-6">
                        <img src="/logo.png" alt="Logo" className="img-size" />
                    </div>
                </div>
                <Cursos/>

                <div className="text-center w-full pb-32">
                    <h1 className="text-6xl font-bold mb-2 gradient-text">Que estas esperando ?</h1>
                    <p className="text-2xl text-gray-400 py-4"> Empieza ahora con nosotros, con una educacion garantizada para tu futuro profesional </p>
                    <button href="/perfil" className="bg-violet-700 hover:bg-violet-600 text-gray-200 ml-2 py-2 px-5 rounded">
                        Registrate
                    </button>
                  
                </div>

            
            </div>
            <Footer/>
        </>
    )
}