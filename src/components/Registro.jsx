
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { NavBar } from './NavBar'
import { useNavigate } from "react-router-dom";



export const Registro = () => {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        contrasena: "",
        foto_perfil: "",
        especializacion: "",
    });

    const handlerChange = (event) => {

        const { name, value } = event.target;
        if (name === "foto_perfil") {

            const img = event.target.files[0];
            setDataForm({ ...dataForm, [name]: img });
            return;

        }

        setDataForm({ ...dataForm, [name]: value });

    }

    const handlerSubmit = async (event) => {

        event.preventDefault();

        const datosFormulario = new FormData();
        
        datosFormulario.append( "nombre" , dataForm.nombre);
        datosFormulario.append( "apellido" , dataForm.apellido);
        datosFormulario.append( "email" , dataForm.email);
        datosFormulario.append( "contrasena" , dataForm.contrasena);
        datosFormulario.append( "foto_perfil" , dataForm.foto_perfil);
        datosFormulario.append( "especializacion" , dataForm.especializacion);


        const url = 'http://localhost:4000/api/usuarios/';

        const result = await axios.post(url, datosFormulario);

        const resultData = result.data;
        console.log(resultData);
        const perfilId = resultData[0].id
        navigate(`/perfil/${perfilId}`);

        
    

    }

    return (

        <div className='max-w-screen-lg mx-auto'>

            <NavBar />
            <form onSubmit={handlerSubmit} className="bg-[#0F0E13] rounded-lg shadow-md p-12 border border-gray-700 px-8">
                <fieldset>
                    <h1 className="text-2xl text-gray-200 font-bold pb-12">Crear Usuario</h1>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="nombre" className="text-gray-300 text-sm font-bold w-32">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="apellido" className="text-gray-300 text-sm font-bold w-32">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="email" className="text-gray-300 text-sm font-bold w-32">Email:</label>
                        <input type="text" id="email" name="email" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="contrasena" className="text-gray-300 text-sm font-bold w-32">Contrasena:</label>
                        <input type="password" id="contrasena" name="contrasena" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="foto_perfil" className="text-gray-300 text-sm font-bold w-32">Foto Perfil:</label>
                        <input type="file" id="foto_perfil" name="foto_perfil" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="especializacion" className="text-gray-300 text-sm font-bold w-32">Especializacion: </label>
                        <input type="text" id="especializacion" name="especializacion" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        Crear Usuario
                    </button>
                </fieldset>
            </form>
        </div>

    )
}

