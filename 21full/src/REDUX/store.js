


import {  createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import rootreducer from './rootreducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk];



const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleware))

  
  
);

export default store;

