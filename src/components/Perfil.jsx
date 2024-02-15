import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Cursos } from './Cursos'
import { CursosSuscritos } from './CursosSuscritos'
import { CursosImpartidos } from './CursosImpartidos'


export const Perfil = () => {

    return (
        <>
            <NavBar />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 py-24">
                <h3 className="text-3xl leading-6 font-medium text-gray-300 mb-6">Perfil del Usuario</h3>

                <div className="bg-[#0F0E13] shadow overflow-hidden sm:rounded-lg mb-6 border border-gray-700">
                    <div className="px-4 py-5 sm:px-6 border-b">

                        <p className="mt-1 max-w-3xl text-lg text-gray-300">Detalles personales y de cuenta.</p>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                    Nombre de usuario
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                    Nombre de usuario
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                    Email
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                    carlos.perez@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                    Roles
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <span className="bg-blue-300 py-1 px-2 rounded text-center">Estudiante</span>
                                    <span className="ml-2 bg-red-300 py-1 px-2 rounded text-center">Instructor</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                    Especializacion
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <span className="bg-rose-300 py-1 px-2 rounded text-center">React</span>
                                    <span className="ml-2 bg-red-400 py-1 px-2 rounded text-center">Java</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                    Creado                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                    15 Febredo de 2024
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <CursosSuscritos />
                <CursosImpartidos />
            </div>
            <Footer />
        </>
    )
}