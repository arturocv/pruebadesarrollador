import useHoteles from '../../hooks/useHoteles';
import { IoBookOutline, IoCreateOutline } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import { SidebarMenu } from './SidebarMenu';
import Spinner from '../spiner/Spinner';


const menuItems = [
    {
        path: '/',
        icon: <IoBookOutline size={40} />,
        title: 'Tutorial',
        subTitle: 'Manual de usuario'
    },
    {
        path: '/new-hotel',
        icon: <IoCreateOutline size={40} />,
        title: 'Crear',
        subTitle: 'Nuevo hotel'
    }
]
const Sidebar = () => {
    const {hoteles} = useHoteles();

    return (
        <div style={{ width: '400px' }} id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Panel administrativo</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Bienvenido,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <img className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="img-user" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Edward Tompson
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(item => (
                        <SidebarMenu
                            key={item.path}
                            path={item.path}
                            icon={item.icon}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    ))
                }

            </div>
            <hr className='mt-5 w-2xs'/>
            <div className="w-full px-6">
                {
                    hoteles.length != 0 ? 
                        hoteles.map(item => (
                            <SidebarMenu
                                key={item.id}
                                path={item.name}
                                icon={<FaHotel size={30} />}
                                title={item.name}
                                subTitle={item.city}
                            />
                    )) : <Spinner />
                }
            </div>
        </div>
    )
}

export default Sidebar