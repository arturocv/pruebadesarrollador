import { createRef, useState, useEffect } from 'react';
import useHoteles from '../../hooks/useHoteles';
import { clienteAxios } from '../../config/index'


import Habtriple from './../../assets/habitacion-triple-small.png'
import Habtsencilla from './../../assets/habitacion-sencilla-small.png'
import Habtsuite from './../../assets/habitacion-suite-small.png'


const Form = () => {
    const {showHoteles, setSend} = useHoteles();  //Estado global de la aplicacion se llama a esos dos estados       

    //Almacenas los datos del formulario
    const nameRef = createRef();
    const addressRef = createRef();
    const adminRef = createRef();
    const cityRef = createRef();
    const nitRef = createRef();
    const phoneRef = createRef();
    const roomsRef = createRef();
    const roomsEstCanRef = createRef();
    const roomsEstAcomRef = createRef();
    const roomsJunCanRef = createRef();
    const roomsJunAcomRef = createRef();
    const roomsSuitCanRef = createRef();
    const roomsSuitAcomRef = createRef();

    const [error, setError] = useState('');  //Estado de errores del formulario

    //Funcion que se llama al enviar el formulario
    const createHotel = async() => {

        //Validar que los campos esten diligenciados
        if( nameRef.current.value=== '' || addressRef.current.value=== '' ||  
            adminRef.current.value === '' || cityRef.current.value === '' || 
            nitRef.current.value === '' || phoneRef.current.value === '' || roomsRef.current.value === ''){ 
            setError('Debes llenar todos los campos del formulario');
            return
        }

        //Validar que el total de habitaciones es igual a las ingresadas por acomodaciones
        const habitacionesTipo = parseInt(roomsEstCanRef.current.value, 10)  + parseInt(roomsJunCanRef.current.value) + parseInt(roomsSuitCanRef.current.value);
        const totalHabitaciones = parseInt(roomsRef.current.value);  

        if(habitacionesTipo != totalHabitaciones){
            setError('El total de habitaciones no corresponde al total de las acomodaciones');
            return 
        }

        //Almacenar todos los datos en un objeto
        const datos = {
            name: nameRef.current.value,
            address: addressRef.current.value,
            admin: adminRef.current.value,
            city: cityRef.current.value,
            nit: nitRef.current.value,
            phone: phoneRef.current.value,
            rooms: roomsRef.current.value,
            roomsestandarcant: roomsEstCanRef.current.value,
            roomsestandaracomodacion: roomsEstAcomRef.current.value,
            roomsjuniorcant: roomsJunCanRef.current.value,
            roomsjunioracomodacion: roomsJunAcomRef.current.value,
            roomssuitecant: roomsSuitCanRef.current.value,
            roomssuiteacomodacion: roomsSuitAcomRef.current.value,            
        }     

        //Ingresar los datos a la base datos        
        try {
            const respuesta = await clienteAxios.post('/hoteles', datos);
            showHoteles();
            setSend(true);
        } catch (error) {
            setError(error.response.data);         
        }         
        
    }

    useEffect(() => {
        error;
        console.log(error);        
    }, [createHotel])

    return (
        <div className='form'>
            {
                error ? <div className="flex flex-row justify-center p-4 mt-10 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">{error}</span>
                </div> : ''
            }
            <form action={createHotel} className="max-w-xl mx-auto mt-10" >
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        id='name'
                        name="name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        ref={nameRef}
                    />
                    <label htmlFor='name' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del hotel</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        id='address'
                        name="address"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        ref={addressRef}
                    />
                    <label htmlFor='address' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text"
                        id='admin'
                        name="admin"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        ref={adminRef}
                    />
                    <label htmlFor='admin' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del administrador</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            id='city'
                            name="city"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            ref={cityRef}
                        />
                        <label htmlFor='city' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ciudad</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            id='nit'
                            name="nit"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            ref={nitRef}
                        />
                        <label htmlFor='nit' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NIT</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="tel"
                            id='phone'
                            name="phone"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            ref={phoneRef}
                        />
                        <label htmlFor='phone' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono (601-456-7890)</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            id='rooms'
                            name="rooms"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            ref={roomsRef}
                        />
                        <label htmlFor='rooms' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de habitaciones </label>
                    </div>
                </div>

                <h2 className='text-3xl font-medium text-center mt-15 mb-5'>Cantidad de habitaciones</h2>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    TIPO HABITACIÓN
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACOMODACIÓN
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    CANTIDAD
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4 flex flex-row justify-center">
                                    <img src={Habtsencilla} alt="habitacion triple" className='rounded-lg' />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    ESTANDAR
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center max-w-sm mx-auto">
                                        <select
                                            name='roomsestandaracomodacion'
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            ref={roomsEstAcomRef}
                                        >
                                            <option value={'sencilla'}>Sencilla</option>
                                            <option value={'doble'}>Doble</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <input
                                        type="number"
                                        name='roomsestandarcant'
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="0"
                                        ref={roomsEstCanRef}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4 flex flex-row justify-center">
                                    <img src={Habtriple} className="w-16 md:w-32 max-w-full max-h-full rounded-lg" alt="Apple iMac" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    JUNIOR
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center max-w-sm mx-auto">
                                        <select
                                            name='roomsjunioracomodacion'
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            ref={roomsJunAcomRef}
                                        >
                                            <option value='triple'>Triple</option>
                                            <option value='cuadruple'>Cuadruple</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <input
                                        type="number"
                                        name='roomsjuniorcant'
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="0"
                                        ref={roomsJunCanRef}
                                    />
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4 flex flex-row justify-center">
                                    <img src={Habtsuite} className="w-16 md:w-32 max-w-full max-h-full rounded-lg" alt="iPhone 12" />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    SUITE
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center max-w-sm mx-auto">
                                        <select
                                            name='roomssuiteacomodacion'
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                            ref={roomsSuitAcomRef}
                                        >
                                            <option value='sencilla'>Sencilla</option>
                                            <option value='doble'>Doble</option>
                                            <option value='triple'>Triple</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    <input
                                        type="number"
                                        name='roomssuitecant'
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="0"
                                        ref={roomsSuitCanRef}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="submit" className="mt-10 mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Crear Hotel</button>
            </form>
        </div>
    )
}

export default Form