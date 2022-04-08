
import {SET_STATE} from "../types/newsType";
import {API_PATH} from "../../tools/constants";
import axios from "axios";
import {toast} from "react-toastify";

export function set_state(data) {
    return {
        type: SET_STATE,
        payload: data
    }
}

export const saveNews = (event, error, values) => (dispatch, getstate) => {
    axios.post(API_PATH + "news", {...values, photo: getstate().news.photo})
        .then((res) => {
            console.log(res);
            toast.success(res.data.message);
            dispatch(set_state({open: false, url: "", photo: ""}));
            dispatch(getNews());
        })
};

export const saveFile = (data) => (dispatch) => {
    axios.post(API_PATH + "file/save", data)
        .then((res) => {
            console.log(res);
            dispatch(set_state({photo: res.data.id}));
        });
}; 

export const getNews = () => (dispatch) => {
    axios.get(API_PATH + "news")
        .then((res) => {
            dispatch(set_state({news: res.data.data}));
        })
};

export const deleteNews = () => (dispatch, getstate) => {
    axios.delete(API_PATH +"news/" + getstate().news.selectedIndex)
        .then((res) => {
            toast.success(res.data.message);
            dispatch(set_state({deleteModal: false}));
            dispatch(getNews());
        })
};

export const getNewsByCategory = (url) => (dispatch) => {
    axios.get(API_PATH + "news/byMenu/" + url)
        .then((res)=> {
            console.log(res);
            dispatch(set_state({newsByCategory: res.data.data}));
        })
};
export const getNewsByUrl=(url)=>(dispatch)=>{
    axios.get(API_PATH+"news/"+url)
        .then((res)=>{
            console.log(res);

            dispatch(set_state({newsByUrl: res.data.data}))
        })
};


