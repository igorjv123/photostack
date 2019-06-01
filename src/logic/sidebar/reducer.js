import defaultState from "../defaultState";
import { CHANGE_FILTER } from "./actionTypes";
import {SET_FILTERS} from '../dropDown/actionTypes'

export default function filterReducer(state = defaultState.filter, action) { 
    switch (action.type) {
        case CHANGE_FILTER:{
            return {...state, ...action.payload } 
        }
        case SET_FILTERS :{   
            console.log(action)         
            let newState = {...state}
            newState.tags = [`${action.payload}`]
            return { ...newState }
        }
        default: {
            return state;
        }
    }
}