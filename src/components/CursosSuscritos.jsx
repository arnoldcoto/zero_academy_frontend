
import React from 'react'
import { NavBar } from './NavBar'


export const CursosSuscritos = () => {

    return (

        <div className="py-4">
            <h3 className="text-2xl leading-6 font-medium text-gray-300 mb-7">Cursos Suscritos</h3>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-3">

                <li className="bg-slate-300 shadow overflow-hidden sm:rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-900">Cocina Basica</h4>

                </li>
                <li className="bg-violet-200 shadow overflow-hidden sm:rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-900">Contabilidad</h4>

                </li>
                <li className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-900">C# desde cero</h4>

                </li>

            </ul>
        </div>
    )
}

