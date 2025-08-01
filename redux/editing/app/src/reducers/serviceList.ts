import {nanoid} from "nanoid";
import {ADD_SERVICE, REMOVE_SERVICE} from "../actions/actionTypes.ts";

type AddServiceFieldAction = {
    type: typeof ADD_SERVICE;
    payload: {
        name: string;
        price: string;
    };
};

type RemoveServiceFieldAction = {
    type: typeof REMOVE_SERVICE;
    payload: {
        id: string
    }
}

type ActionT = AddServiceFieldAction | RemoveServiceFieldAction;

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
        default:
            return state
    }
}

export default serviceListReducer;