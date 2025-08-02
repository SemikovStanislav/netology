import {CHANGE_FILTER} from "../actions/actionTypes.ts";

const initialState = "";

type ChangeFilterAction = {
    type: typeof CHANGE_FILTER;
    payload: {
        value: string;
    }
}

type ActionT = ChangeFilterAction;

const serviceFilterReducer = (state = initialState, action: ActionT) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.payload.value
        default:
            return state
    }
}

export default serviceFilterReducer;