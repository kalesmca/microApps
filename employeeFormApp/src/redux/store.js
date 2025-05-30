import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';


// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));  
export const store = createStore(rootReducer);


export default store;