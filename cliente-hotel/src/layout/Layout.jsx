import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'


export const Layout = () => {
    return (
        //Template de la aplicacion
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex">
                {/* compnente lateral de la aplicacipon */}
                <Sidebar />  
                <div className='p-2 w-full text-slate-900'>
                    <Outlet /> {/* Espacio para rendirizar los componentes por URL */}
                </div>
            </div>
        </div>
    )
}
