import {LOGIN} from "../actionTypes/authType";

const initialState = {
    isLoading: false,
}

export const loginReducer = (state = initialState, action) => {

    switch (action.type){
        case LOGIN:
            return {...state, isLoading: !state.isLoading}
            break;

        default: return state;
    }
}