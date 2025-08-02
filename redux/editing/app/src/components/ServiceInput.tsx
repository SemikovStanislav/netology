import {useSelector, useDispatch} from 'react-redux'
import {changeServiceField, addService, editService, cleanInput} from '../actions/actionCreators.ts'
import type {StateT} from "../store";

const ServiceInput = () => {
    const item = useSelector((state: StateT) => state.serviceInput);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value))
    }
    const handleAdd = (name: string, price: string) => {
        dispatch(addService(name, price))
        dispatch(cleanInput())
    }
    const handleEdit = (id: string, name: string, price: string) => {
        dispatch(editService(id, name, price))
        dispatch(cleanInput())
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!item.id) {
            handleAdd(item.name, item.price)
        } else {
            handleEdit(item.id, item.name, item.price)
        }
    }
    const handleCancel = () => {
        dispatch(cleanInput())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name={'name'} onChange={handleChange} value={item.name}/>
            <input name={'price'} onChange={handleChange} value={item.price} type="number" />
            <button type="submit">Save</button>
            {item.id ? <button onClick={handleCancel}>Cancel</button> : null}
        </form>
    )

}

export default ServiceInput;