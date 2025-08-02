import {nanoid} from "nanoid";
import {ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE} from "../actions/actionTypes.ts";

type AddServiceFieldAction = {
    type: typeof ADD_SERVICE;
    payload: {
        name: string;
        price: string;
    };
};

type RemoveServiceAction = {
    type: typeof REMOVE_SERVICE;
    payload: {
        id: string
    }
}

type EditServiceAction = {
    type: typeof EDIT_SERVICE;
    payload: {
        id: string,
        name: string,
        price: string,
    }
}

type ActionT = AddServiceFieldAction | RemoveServiceAction | EditServiceAction;

const initialState = [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
]

const serviceListReducer = (state = initialState, action: ActionT) => {
    switch (action.type) {
        case ADD_SERVICE: {
            const {name, price} = action.payload
            return [...state, {id: nanoid(), name, price: Number(price)}]
        }
        case REMOVE_SERVICE: {
            const {id} = action.payload
            return state.filter(service => service.id !== id)
        }
        case EDIT_SERVICE: {
            const {id, name, price} = action.payload
            return state.map(service => {
                if (service.id == id) {
                    return {id: nanoid(), name, price: Number(price)}
                }
                return service
            })
        }
        default:
            return state
    }
}

export default serviceListReducer;