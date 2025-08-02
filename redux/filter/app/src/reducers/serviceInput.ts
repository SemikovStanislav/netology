import {CHANGE_SERVICE_FIELD, CLEAN_INPUT} from "../actions/actionTypes.ts";

const initialState = {name: '', price: '', id: undefined};

type ChangeServiceFieldAction = {
    type: typeof CHANGE_SERVICE_FIELD;
    payload: {
        name: string;
        value: string;
    }
}

type CleanInputFieldAction = {
    type: typeof CLEAN_INPUT;
}

type ActionT = CleanInputFieldAction | ChangeServiceFieldAction;

const serviceInputReducer = (state = initialState, action: ActionT) => {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD: {
            const {name, value} = action.payload
            return {...state, [name]: value}
        }
        case CLEAN_INPUT: {
            return initialState
        }
        default:
            return state;
    }
}

export default serviceInputReducer;