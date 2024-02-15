import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'


export const Nosotros = () => {

    return (
        <>
            <NavBar />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 roboto-regular">
                <div className="container mx-auto  flex flex-col md:flex-row items-center py-32">
                    <div className="md:w-1/2">
                        <h2 className="text-6xl font-bold mb-4">Quiénes Somos</h2>
                        <p className="text-gray-300 mb-4 text-xl">
                            Somos una comunidad dedicada a la educación y el aprendizaje continuo.
                            Nuestra misión es ofrecer cursos accesibles y de alta calidad para todos.
                            Creemos en el poder de la educación para cambiar vidas y abrir oportunidades.
                        </p>
                        <p className="text-gray-300 mb-4 text-xl">
                            Nuestro equipo está formado por expertos apasionados que están comprometidos
                            a brindar la mejor experiencia de aprendizaje para nuestros estudiantes.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <img
                            className="w-full rounded-lg shadow-lg hidden md:block"
                            src="/enlinea.jpg"
                            alt="Nosotros"
                        />
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}