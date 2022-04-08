    import {UPDATE_STATE} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";
    import {set_state} from "./newsAction";

export function updateState(data) {
    return {
        type: UPDATE_STATE,
        payload: data
    }
}

export function saveMenu(event, errors, values) {
    return function (dispatch) {
        dispatch(updateState({disabl: true}));
        console.log(event);
        console.log(values);
        if (values.nameUz === "" && values.nameRu === "" && values.nameEn === ""){
            toast.error("Malumotlarni tol'diring !!!")
        }else{
            axios.post(API_PATH + "menu", values)
                .then((res) => {
                    toast.success(res.data.message);
                    dispatch(updateState({open: false,disabl: false,selectedItem: {}, submenu: false, url: ""}));
                    dispatch(getMenus());
                    dispatch(getMainMenus());
                })
        }

    }
}

export const getMenus = () => (dispatch) => {
    axios.get(API_PATH + "menu/all")
        .then((res) => {
            dispatch(updateState({menus: res.data.data}));
        })
};
export const getMainMenus = () => (dispatch) => {
    axios.get(API_PATH +"menu")
        .then((res) => {
            dispatch(updateState({mainMenus: res.data.data}))
        })
};

export const deleteMenus = () => (dispatch, getState) => {
    console.log(getState());
    axios.delete(API_PATH + "menu/" + getState().menus.selectedIndex)
        .then((res) => {
            dispatch(getMenus());
            toast.success(res.data.message);
            dispatch(updateState({deleteModal: false}));
        })
};


export const getSubMenus = () => (dispatch) => {
    axios.get(API_PATH + "menu/subMenus")
        .then((res) => {
            dispatch(updateState({subMenus: res.data.data}));
        })
};

