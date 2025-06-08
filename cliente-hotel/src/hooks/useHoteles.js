import {useContext} from 'react'
import HotelesContext from '../context/HotelesProvider'


const useHoteles = () => {
    return useContext(HotelesContext);
}

export default useHoteles;