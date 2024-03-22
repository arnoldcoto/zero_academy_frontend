
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavBar } from './NavBar'
import { useNavigate } from "react-router-dom";



export const CreacionCategoria = () => {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        nombre: "",
        descripcion: "",
        imagen: "",
    });

    const handlerChange = (event) => {

        const { name, value } = event.target;
        if (name === "imagen") {

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
        datosFormulario.append( "descripcion" , dataForm.descripcion);
        datosFormulario.append( "imagen" , dataForm.imagen);

        const url = 'http://localhost:4000/api/categorias/';

        const result = await axios.post(url, datosFormulario);

        const resultData = result.data;
        console.log(resultData);
        navigate(`/`);

    
    }

    return (

        <div className='max-w-screen-lg mx-auto'>

            <NavBar />
            <form onSubmit={handlerSubmit} className="bg-[#0F0E13] rounded-lg shadow-md p-12 border border-gray-700 px-8">
                <fieldset>
                    <h1 className="text-2xl text-gray-200 font-bold pb-12">Creacion de Categorias</h1>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="nombre" className="text-gray-300 text-sm font-bold w-32">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="descripcion" className="text-gray-300 text-sm font-bold w-32">Descripcion:</label>
                        <input type="text" id="descripcion" name="descripcion" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="imagen" className="text-gray-300 text-sm font-bold w-32">Foto Perfil:</label>
                        <input type="file" id="imagen" name="imagen" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        Crear Categorias
                    </button>
                </fieldset>
            </form>
        </div>

    )
}

