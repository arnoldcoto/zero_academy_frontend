
import React from 'react'
import { NavBar } from './NavBar'


export const CursosImpartidos = () => {

    return (

        <div className="py-2">
        <h3 className="text-2xl leading-6 font-medium text-gray-300">Cursos Impartidos</h3>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-3 py-3">

            <li className="bg-blue-300 shadow overflow-hidden sm:rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900">React desde Cero</h4>

            </li>
            <li className="bg-blue-500 shadow overflow-hidden sm:rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900">Javascript Basico</h4>

            </li>

        </ul>
    </div>
    )
}

