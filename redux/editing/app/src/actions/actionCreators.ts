import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD} from "./actionTypes.ts";

export function addService(name: string, price: string) {
    return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id: string) {
    return {type: REMOVE_SERVICE, payload: {id}}
}

export function changeServiceField (name: string, value: string) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}