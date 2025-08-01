import { useSelector, useDispatch } from 'react-redux'
import {removeService} from "../actions/actionCreators.ts";
import type {StateT} from "../store";

const ServiceList = () => {
    const items = useSelector((state: StateT) => state.serviceList)
    const dispatch = useDispatch();
    const handleRemove = (id: string) => { dispatch(removeService(id))}

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.name} {item.price}
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}

export default ServiceList;