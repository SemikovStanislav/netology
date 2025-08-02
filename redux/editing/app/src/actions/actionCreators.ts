import {ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CLEAN_INPUT} from "./actionTypes.ts";

export function addService(name: string, price: string) {
    return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id: string) {
    return {type: REMOVE_SERVICE, payload: {id}}
}

export function editService(id: string, name: string, price: string) {
    return {type: EDIT_SERVICE, payload: {id, name, price}}
}

export function changeServiceField (name: string, value?: string) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function cleanInput() {
    return {type: CLEAN_INPUT}
}