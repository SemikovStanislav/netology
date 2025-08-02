import { createStore, combineReducers } from 'redux'
import serviceListReducer from '../reducers/serviceList.ts'
import serviceInputReducer from '../reducers/serviceInput.ts'
import serviceFilterReducer from "../reducers/serviceFilter.ts";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceInput: serviceInputReducer,
    serviceFilter: serviceFilterReducer,
})

export type StateT = ReturnType<typeof reducer>

const store = createStore(
    reducer
);

export default store;