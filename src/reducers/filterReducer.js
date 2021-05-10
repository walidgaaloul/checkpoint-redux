
import {FILTERTODO } from "../actions/types"




const filterReducer = (state = [''], action) => {
     console.log('state filter', action)
    
     switch (action.type) {


     case FILTERTODO:
             return [state=action.payload]
 

        default:
            return state
            
    
}
}

export default filterReducer;










// export default filteReducer


// import { SET_FILTER } from './actions';

// export function filter (
//   state = 'SHOW_ALL', //The default initial state is SHOW_ALL
//   action
// ) {
//   switch (action.type) {

//     case 'SET_FILTER':
//     return action.filter;

//     default:
//     return state;
//   };
// };

// export default filter;