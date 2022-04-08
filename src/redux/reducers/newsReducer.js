import {SET_STATE} from "../types/newsType";

const initialState  = {
    open: false,
    url: "",
    photo: "",
    news: [],
    deleteModal: false,
    selectedIndex: "",
    selectedItem: {},
    newsByCategory: [],
    newsByUrl:{}
};


export const newsReducer = (state = initialState, action) => {
    if (action.type === SET_STATE){
        return{
            ...state,
            ...action.payload
        }
    }
    return state;
};

