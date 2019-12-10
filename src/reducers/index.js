import counter from './counterReducer';
import color from'./colorReducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    counter,
    color
})

export default rootReducer;
