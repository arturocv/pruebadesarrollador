import Form from '../form/Form';
import useHoteles from '../../hooks/useHoteles';
import Spinner from '../spiner/Spinner';

const NewHotel = () => {

    const {send} = useHoteles();

    return (
        <div className='form'>
            <h2 className='text-5xl font-bold mt-5 text-center' >Crear nuevo hotel</h2>
                {
                    send ? <Spinner/> : <Form/>
                }                            
        </div>
    )
}

export default NewHotel