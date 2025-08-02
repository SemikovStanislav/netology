import { createStore, combineReducers } from 'redux'
import serviceListReducer from '../reducers/serviceList.ts'
import serviceInputReducer from '../reducers/serviceInput.ts'

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceInput: serviceInputReducer,
})

export type StateT = ReturnType<typeof reducer>

const store = createStore(
    reducer
);

export default store;