import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

    // console.log('action received', action);
    switch(action.type){
        case FETCH_WEATHER: 
            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ]; // ES6 syntax for above line (rest operator)
    }
    return state;
}