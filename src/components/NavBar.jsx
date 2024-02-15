import React from 'react'


export const NavBar = () => {
    return (
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
            <nav className="roboto-regular">
                <div className="container mx-auto flex py-1 items-center justify-between">

                    <div className="flex items-center">
               
                        <img src="/logo.png" alt="Logo" className="h-9 w-9 mr-2" />
                        <a href="/" className="text-white text-lg">Zero Academy</a>
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="/" className="text-gray-300 hover:text-white">Inicio</a>
                            <a href="/nosotros" className="text-gray-300 hover:text-white">Nosotros</a>
                            <a href="/" className="text-gray-300 hover:text-white">Cursos</a>

                        </div>
                    </div>

                    <div className="flex-grow mx-4">
                        <input type="search" placeholder="Buscar..." className="w-full px-4 py-2 rounded-md text-gray-700" />
                    </div>

                    <a href="/login" className="bg-blue-700 hover:bg-indigo-700 text-white  py-2 px-4 rounded">
                        Iniciar sesión
                    </a>
                    <a href="/perfil" className="bg-gray-200 hover:bg-gray-300 text-gray-900 ml-2 py-2 px-4 rounded">
                        Mi Perfil
                    </a>
                </div>
            </nav>
        </div>
    )
}