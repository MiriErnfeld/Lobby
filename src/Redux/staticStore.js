import { createStore, combineReducers, applyMiddleware } from 'redux';
import {getStaticData} from './middleware/crudMiddleware'
import staticDetailsReducer from './reducers/staticDetailsReducer'
// ,getStaticTask,getStaticPapers,getStaticContacts


const reducer = combineReducers({staticDetailsReducer});

const store = createStore(reducer, applyMiddleware(getStaticData));
window.store = store;
export default store;
store.dispatch({type: 'INIT_DATA'});