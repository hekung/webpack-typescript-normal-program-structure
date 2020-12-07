import { combineReducers } from 'redux'
import glob from './glob'
export default combineReducers({ glob })
// import { TOGGLE_COLLAPSE } from '../actionTypes'

// const initialState = {
//     collapse: false
// }

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case TOGGLE_COLLAPSE: {
//             // let a = {
//             //     ...state,
//             //     collapse: !state.collapse
//             // }
//             // console.log(a)
//             return {
//                 ...state,
//                 collapse: !state.collapse
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }