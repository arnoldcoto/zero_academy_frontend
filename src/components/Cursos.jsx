import React from 'react'

export const Cursos = () => {
    return (

        <div className="container mx-auto px-4 pb-24 roboto-regular">
            <h2 className="text-5xl text-gray-300 font-semibold text-center">Categorías de Cursos</h2>
            <div className="grid grid-cols-4 gap-4 py-12">

                <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg relative">
                    <img className="w-full object-cover object-center" src="/restaurante.webp" alt="Imagen de la Card" />

                    <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 flex items-center justify-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold text-center py-2">COCINA</h2>
                            <p className="text-sm bg-gray-200 text-gray-900 rounded-md px-2 py-1">Aprende de los mejores chef</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg relative">
                    <img className="w-full object-cover object-center" src="/carpinteria.jpg" alt="Imagen de la Card" />

                    <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 flex items-center justify-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold text-center py-2">MANUALIDADES</h2>
                            <p className="text-sm bg-yellow-700 text-gray-200 rounded-md px-2 py-1 text-center">Carpinteria, Ebanisteria</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg relative">
                    <img className="w-full object-cover object-center" src="/programacion.jpg" alt="Imagen de la Card" />

                    <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 flex items-center justify-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold text-center py-2">PROGRAMACION</h2>
                            <p className="text-sm bg-indigo-700 text-gray-200 rounded-md px-2 py-1">Desarrollo Web, Cloud Computing</p>
                        </div>
                    </div>
                </div>


                <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg relative">
                    <img className="w-full object-cover object-center" src="/idiomas.jpg" alt="Imagen de la Card" />

                    <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 flex items-center justify-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold text-center py-2">IDIOMAS</h2>
                            <p className="text-sm bg-red-700 text-gray-200 rounded-md px-2 py-1">Ingles, Espanol, Aleman</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 pb-12">

                <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg relative">
                    <img className="w-full object-cover object-center" src="/finanzas.jpg" alt="Imagen de la Card" />

                    <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 flex items-center justify-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold text-center py-2">FINANZAS</h2>
                            <p className="text-sm bg-green-200 text-gray-900 rounded-md px-2 py-1">Contabilidad, Administracion</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg relative">
                    <img className="w-full object-cover object-center" src="/musica.jpg" alt="Imagen de la Card" />

                    <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 flex items-center justify-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold text-center py-2">MUSICA</h2>
                            <p className="text-sm bg-yellow-700 text-gray-200 rounded-md px-2 py-1 text-center">Piano, Violion, Bateria</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg relative">
                    <img className="w-full object-cover object-center" src="/deportes.jpeg" alt="Imagen de la Card" />

                    <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 flex items-center justify-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold text-center py-2">DEPORTES</h2>
                            <p className="text-sm bg-rose-400 text-gray-800 rounded-md px-2 py-1">Yoga, Pilates</p>
                        </div>
                    </div>
                </div>


                <div className="max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg relative">
                    <img className="w-full object-cover object-center" src="/emprendimiento.jpg" alt="Imagen de la Card" />

                    <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40 flex items-center justify-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold text-center py-2">EMPRENDIMIENTO</h2>
                            <p className="text-sm bg-red-700 text-gray-200 rounded-md px-2 py-1">Ingles, Espanol, Aleman</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}