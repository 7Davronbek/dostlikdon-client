import {UPDATE_STATE} from "../actionTypes/adminNewsActionType";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";


export function updateState (data){
    return {
        type: UPDATE_STATE,
        payload: data
    }
}

export function saveFile(data){
    return function (dispatch) {
        let image = new FormData();
        image.append("image", data);

        axios.post(API_PATH + "file/save", image)
            .then(res => {
                console.log(res);
                if (res.status === 200){
                    dispatch(updateState({selectedImage: res.data.id}))
                } else {
                    toast.error("Xatolik!!!");
                }
            })
    }
}

export function addNews(data){
    return function (dispatch) {
        axios.post(API_PATH + "news", data)
            .then(res => {
                console.log(res);
                if (res.data.success){
                    toast.success(res.data.message)
                    dispatch(getNews());
                    dispatch(updateState({modalOpen: false, selectedImage: ""}));
                } else {
                    toast.error(res.data.message);
                }
            })
    }
}

export function getNews(){
    return function (dispatch) {
        axios.get(API_PATH + "news")
            .then(res => {
                dispatch(updateState({news: res.data.data}));
                dispatch({type: "CHANGE_LOADING", payload: {pageLoading: false}})

            })
    }
}

export function deleteNews(id){
    return function (dispatch) {
        axios.delete(API_PATH + "news/" + id)
            .then(res => {
                if (res.data.success){
                    toast.success(res.data.message);
                    dispatch(getNews());
                    dispatch(updateState({deleteModalOpen: false}))
                }else {
                    toast.error(res.data.message);
                }
            })
    }
}

export function getNewsByMenu(url){
    return function (dispatch){
        dispatch({type: "CHANGE_LOADING", payload: {pageLoading: true}})
        axios.get(API_PATH + "news/byMenu/" + url)
            .then(res => {
                dispatch(updateState({newsByMenu: res.data.data}));
                dispatch({type: "CHANGE_LOADING", payload: {pageLoading: false}})
            })
    }
}

export function getOneNews(url){
    return function (dispatch) {
        dispatch({type: "CHANGE_LOADING", payload: {pageLoading: true}})

        axios.get(API_PATH + "news/" + url)
            .then(res => {
                dispatch(updateState({oneNews: res.data.data}));
                dispatch({type: "CHANGE_LOADING", payload: {pageLoading: false}})
            })
    }
}


//"news/getLast"