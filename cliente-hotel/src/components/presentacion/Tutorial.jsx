import React from 'react'

import './Tutorial.css';


export const Tutorial = () => {
  return (
    <div className='content-tutorial'>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div className="flex justify-end px-4 pt-4">
          <div className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-3">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="image-user" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Edward Tompson</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">Visual Manager</span>          
        </div>
      </div>


      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Tutorial</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">En esta sección te indicamos cómo agregar hoteles, modificar sus características o eliminar algún hotel de ser necesario.</p>

          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Agregar Hotel</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">En el menú lateral encontrarás el botón de "CREAR", le das click y diligencia el formulario con la información del hotel y presionas el botón de guardar.</p>          
      
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Modificar o eliminar</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">En el menú lateral encontrarás los hoteles creados, solo debes presionar sobre el hotel y aparecerá la información del hotel. Luego, en la parte superior encontrarás un botón que al clicarlo aparecen las opciones de editar o eliminar.</p>
      
      </div>



    </div>
  )
}
