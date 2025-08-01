import { createStore, combineReducers } from 'redux'
import serviceListReducer from '../reducers/serviceList.ts'
import serviceAddReducer from '../reducers/serviceAdd.ts'

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
})

export type StateT = ReturnType<typeof reducer>

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;