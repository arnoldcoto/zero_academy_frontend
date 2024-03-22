import React, { useState, useEffect } from 'react'
import axios from "axios";
import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Cursos } from './Cursos'
import { CursosSuscritos } from './CursosSuscritos'
import { CursosImpartidos } from './CursosImpartidos'
import { useParams } from 'react-router-dom';

export const Perfil = () => {


    const { idUsuario } = useParams();

    const [dataPerfil, setDataPerfil] = useState([]);

    const getDatos = async () => {
        const url = `http://localhost:4000/api/usuarios/${idUsuario}`;
        const response = await axios.get(url);
        const datos = response.data;
        console.log(datos);
        setDataPerfil(datos);

    }

    useEffect(() => {

        getDatos();

    }, []);

    return (
        <>
            <NavBar />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 py-24">


                {dataPerfil.map((item) => (
                    <div key={item.id}>
                        <div className="flex items-center space-x-4 pb-7">
                            <img src={`data:${item.mime_type};base64,${item.foto}`} alt="Descripción de la imagen" class="w-16 h-16 rounded-full object-cover" />

                            <div>
                                <h3 className="text-2xl font-semibold">Mi Perfil</h3>
                                <p className="text-lg font-semibold">{item.nombre} {item.apellido}</p>
                            </div>
                        </div>
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
                                            {item.nombre} {item.apellido}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                            Email
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                            {item.email}
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                            Roles
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <span className="bg-blue-300 py-1 px-2 rounded text-center">Estudiante</span>
                                            <span className="ml-2 bg-red-300 py-1 px-2 rounded text-center">Instructor</span>
                                        </td>
                                    </tr> */}
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                            Especializacion
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                            {item.especializacion}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                            Creado                                </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                                        {new Date("2024-03-22T01:37:48.536Z").toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                ))
                }



                <CursosSuscritos />
                <CursosImpartidos />
            </div>
            <Footer />
        </>
    )
}


