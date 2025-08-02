import { useSelector, useDispatch } from 'react-redux'
import {changeServiceField, cleanInput, removeService} from "../actions/actionCreators.ts";
import type {StateT} from "../store";
import {useMemo} from "react";

const ServiceList = () => {
    const items = useSelector((state: StateT) => state.serviceList)
    const item = useSelector((state: StateT) => state.serviceInput)
    const filterValue = useSelector((state: StateT) => state.serviceFilter)
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
    const filteredItems = useMemo(() => {
        return items.filter((item) => item.name.includes(filterValue))
    }, [items, filterValue])

    return (
        <ul>
            {filteredItems.map((item) => (
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