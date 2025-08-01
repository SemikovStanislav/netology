import {useSelector, useDispatch} from 'react-redux'
import {changeServiceField, addService} from '../actions/actionCreators.ts'
import type {StateT} from "../store";

const ServiceAdd = () => {
    const item = useSelector((state: StateT) => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value))
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addService(item.name, item.price))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name={'name'} onChange={handleChange} value={item.name}/>
            <input name={'price'} onChange={handleChange} value={item.price} />
            <button type="submit">Save</button>
        </form>
    )

}

export default ServiceAdd;