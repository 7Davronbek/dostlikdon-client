import {UPDATE_STATE} from "../types/menusTypes";

const initialState = {
    open: false,
    url: "",
    submenu: false,
    menus: [],
    disabl: false,
    deleteModal: false,
    selectedItem: {},
    selectedIndex: "",
    mainMenus: [],
    subMenus: []
};

export const menusReducer = (state = initialState, action) => {
    if (action.type === UPDATE_STATE){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
};