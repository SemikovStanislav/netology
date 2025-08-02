import { useSelector, useDispatch } from 'react-redux'
import {changeServiceField, cleanInput, removeService} from "../actions/actionCreators.ts";
import type {StateT} from "../store";

const ServiceList = () => {
    const items = useSelector((state: StateT) => state.serviceList)
    const item = useSelector((state: StateT) => state.serviceInput)
    const dispatch = useDispatch();
    const handleRemove = (id: string) => {
        if (item.id === id) {
            dispatch(cleanInput())
        }
        dispatch(removeService(id))
    }
    const handleEdit = (id: string, name: string, price: string)=> {
        dispatch(changeServiceField("id", id))
        dispatch(changeServiceField("name", name))
        dispatch(changeServiceField("price", price))
    }
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.name} {item.price}
                    <button onClick={() => handleEdit(item.id, item.name, String(item.price))}>Edit</button>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}

export default ServiceList;