import { useState, createContext, useEffect} from 'react';
import { clienteAxios} from '../config/index'

const HotelesContext = createContext();

const HotelesProvider = ({children}) => {
    const [hoteles, setHoteles] = useState([]);  //Array de los hoteles listado en la DB
    const [send, setSend] = useState(false);

    //Peticion para obtener lista de hoteles creados en DB
    const showHoteles = async() => {
        try {
            const respuesta = await clienteAxios.get('/hoteles');
            setHoteles(respuesta.data)
            setSend(false)
        } catch (error) {
            console.log(error.response);
        }
    }
    
    //Peticion para obtener la data de un hotel especifo por el nombre
    const showHotel = async(name) => {
        try {
            const respuesta = await clienteAxios.get(`/${name}`);
            console.log(respuesta.data);            
        } catch (error) {
            console.log(error);            
        }
    }       

    //refrescar el estado de los hoteles a mostrar en la barra lateral cada que se agrega alguno nuevo
    useEffect(() => {
        showHoteles();
        send        
    }, [send])

    return(
        <HotelesContext
            value={{
                hoteles,
                send,
                setSend,
                showHoteles,
                showHotel
            }}
        
        >{children}</HotelesContext>
    )
}

export {
    HotelesProvider
}

export default HotelesContext