import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";

export function login(event, errors, values, history) {
    return function (dispatch) {
        axios.post(API_PATH + "auth/login", values)
            .then((res) => {
                console.log(res);
                localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);
                dispatch({type: ""});
                history.push("/admin/menus");
                toast.success("Muvaffaqiyatli !!!")
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });

    }
}