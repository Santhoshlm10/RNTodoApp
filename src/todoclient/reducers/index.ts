import { ADD_TASK } from "../actions";

export interface TodoState {
        tasks:any,
        notes:any
}

const initialState : TodoState = {
        tasks:[],
        notes:[]
}

type Action = {
    type:"ADD_TASK",
    payload:any
}
const todoReducer = (state=initialState,action:Action) => {
    switch(action.payload){
        case ADD_TASK:
            return{
                ...state,
                tasks: action.payload
            }
        default:
            return{
                ...state,
            };
    }
}

export default todoReducer;