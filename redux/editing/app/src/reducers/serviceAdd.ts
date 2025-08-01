import { CHANGE_SERVICE_FIELD } from '../actions/actionTypes.ts'

const initialState = {name: '', price: ''};

type ChangeServiceFieldAction = {
    type: typeof CHANGE_SERVICE_FIELD;
    payload: {
        name: string;
        value: string;
    };
};

const serviceAddReducer = (state = initialState, action: ChangeServiceFieldAction) => {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD: {
            const {name, value} = action.payload
            return {...state, [name]: value}
        }
        default:
            return state;
    }
}

export default serviceAddReducer;