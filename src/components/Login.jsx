import React from 'react'


export const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen gradient-background">
            <div className="max-w-md w-full bg-[#0F0E13] rounded-lg shadow-md p-12 border border-gray-700">
                <div class="flex items-center justify-center text-center">
                    <img src="/logo.png" alt="Logo" class="mb-6 img-size" />
                </div>

                <a href="/">
                    <h1 className="text-gray-200 text-5xl text-center text-bold mb-12"> Zero Academy </h1>
                </a>
                <form className="space-y-4">
                    <div>
                        <label for="email" className="block text-sm font-medium text-gray-300">Correo electrónico</label>
                        <input type="email" name="email" id="email" required className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="tu@ejemplo.com" />
                    </div>
                    <div>
                        <label for="password" className="block text-sm font-medium text-gray-300">Contraseña</label>
                        <input type="password" name="password" id="password" required className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="••••••••" />
                    </div>
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label for="remember_me" className="ml-2 block text-sm text-gray-300">Recuérdame</label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-400 hover:text-blue-700">¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}