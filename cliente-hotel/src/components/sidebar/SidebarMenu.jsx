import { Link, useLocation, useParams } from 'react-router-dom'

export const SidebarMenu = ({ path, icon, title, subTitle }) => {
    const currentPath = useLocation();
    const {name} = useParams();   

    return (
        <Link
            to={path}
            className={`
                w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150    
                ${ currentPath.pathname === path || name === path ? 'bg-blue-800': '' }            
            `}>
            <div>
                <div>
                    {icon}
                </div>
            </div>
            <div className="flex flex-col">
                <span className="capitalize text-lg font-bold leading-5 text-white">{title}</span>
                <span className="capitalize text-sm text-white/50 hidden md:block">{subTitle}</span>
            </div>
        </Link>
    )
}
