import { combineReducers } from "redux";

import { reduce01 } from "./REDUCERS/supplierReducer";



const rootreducer=combineReducers({
    reducer:reduce01,
   
})


export default  rootreducer