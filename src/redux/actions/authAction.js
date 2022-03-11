import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";
import {LOGIN} from "../actionTypes/authType";


export function loginUser(data, history) {
   return function (dispatch){
       dispatch({
           type: LOGIN
       })
       axios.post(API_PATH + "auth/login", data)
           .then((res) => {
               localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);
               dispatch({type: LOGIN});
               history.push("/admin");
           })
           .catch((error) => {
               console.log(error);
               toast.error("Xatolik!");
               dispatch({type: LOGIN});
           })
   }

}