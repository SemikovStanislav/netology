import type {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "../actions/actionCreators.ts";
import type {StateT} from "../store";


const ServiceFilter = () => {
    const value = useSelector((state: StateT) => state.serviceFilter)
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        dispatch(changeFilter(value))
    }

    const handleClean = () => {
        dispatch(changeFilter(''))
    }

    return <>
        <input value={value} onChange={handleChange} />
        <button onClick={handleClean}>Clear</button>
    </>
}

export default ServiceFilter;