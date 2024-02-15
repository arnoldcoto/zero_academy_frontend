import React from 'react'
import { NavBar } from './NavBar'


export const Footer = () => {
    return (





        <footer className="gradient-background">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src="logo.png" className="h-8 me-3" alt="Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zero Academy</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Paginas</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Inicio</a>
                                </li>
                                <li>
                                    <a href="/nosotros" className="hover:underline">Nosotros</a>
                                </li>
                               
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Conectate</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/login" className="hover:underline ">Iniciar Sesion</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Registrate</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Politicas Privacidad</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terminos y Condiciones</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Zero Academy™</a>. Todos los derechos reservados.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                    </div>
                </div>
            </div>    
        </footer>



    )
}