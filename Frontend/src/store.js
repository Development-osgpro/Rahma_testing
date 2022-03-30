import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getHomeDataReducer } from './Redux/home'
import { getOurWorkDataReducer } from './Redux/ourWork'
import { postContactDataReducer } from './Redux/contact'
import { getProgramsDataReducer } from './Redux/programs'
import { getServiceDataReducer } from './Redux/service'

const reducer = combineReducers({
    getHomeData: getHomeDataReducer,
    getOurWorkData: getOurWorkDataReducer,
    postContactData: postContactDataReducer,
    getProgramsData: getProgramsDataReducer,
    getServiceData: getServiceDataReducer,
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store