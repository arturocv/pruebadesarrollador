import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { clienteAxios } from '../../config';

import Habtriple from './../../assets/habitacion-triple-small.png'
import Habtsencilla from './../../assets/habitacion-sencilla-small.png'
import Habtsuite from './../../assets/habitacion-suite-small.png'
import Spinner from '../spiner/Spinner';

const ShowHotel = () => {
	const { name } = useParams();
	const [info, setInfo] = useState();
	const [change, setChange] = useState(false);

	const mostrar = async () => {
		const respuesta = await clienteAxios.get(`/${name}`);
		setInfo(respuesta.data);
		setChange(true);
	}

	useEffect(() => {
		mostrar();
		setChange(false);	
	}, [name]);	
	
	return (
		<div>
			{
				(info && change) ? (
					<div className="bg-white py-10 sm:py-10">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto max-w-2xl lg:mx-0">
								<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl capitalize">{info.name}</h2>
								<p className="font-serif mt-2 text-lg/8 text-gray-600">All Inclusive Hotels & Resorts.</p>
							</div>
							<div className="mx-auto mt-10 max-w-2xl  gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none">

								<div className="w-full bg-white dark:bg-gray-800 border-gray-200 border dark:border-gray-700 shadow-sm rounded-lg p-5">
									<h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Información básica del hotel.</h2>
									<label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Nombre del hotel:</label>
									<div className="relative mb-4">
										<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize" 
										value={info.name} 
										disabled readOnly/>											
									</div>
									<label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Dirección:</label>
									<div className="relative mb-4">
										<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
											value={info.address} 
											disabled readOnly 
										/>
									</div>
									<label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Administrador:</label>
									<div className="relative mb-6">
										<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
											value={info.admin}
											disabled readOnly />
									</div>
									<label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">NIT:</label>
									<div className="relative mb-6">
										<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
											value={info.nit}
											disabled readOnly />
									</div>
									<label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Ciudad:</label>
									<div className="relative mb-6">
										<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
											value={info.city}
											disabled readOnly />
									</div>
									<label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Teléfono:</label>
									<div className="relative mb-6">
										<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
											value={info.phone}
											disabled readOnly />
									</div>
									<label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Habitaciones:</label>
									<div className="relative mb-6">
										<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
											value={info.rooms}
											disabled readOnly />
									</div>
									<div className="flex items-center space-x-4 rtl:space-x-reverse">
										<button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Editar</button>
										<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Eliminar</button>
									</div>
								</div>


								<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
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
																		<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize" 
																			value={info.roomsestandaracomodacion} 
																			disabled readOnly
																		/>
																	</div>
																</td>
																<td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
																	<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize" 
																		value={info.roomsestandarcant} 
																		disabled readOnly
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
																		<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize" 
																			value={info.roomsjunioracomodacion} 
																			disabled readOnly
																		/>
																	</div>
																</td>
																<td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
																	<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize" 
																			value={info.roomsjuniorcant} 
																			disabled readOnly
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
																		<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize" 
																			value={info.roomssuiteacomodacion} 
																			disabled readOnly
																		/>
																	</div>
																</td>
																<td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
																	<input type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize" 
																			value={info.roomssuitecant} 
																			disabled readOnly
																		/>
																</td>
															</tr>
														</tbody>
													</table>
												</div>


							</div>
						</div>
					</div>

				) : <Spinner/>
			}
		</div>
	)
}

export default ShowHotel

//<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">