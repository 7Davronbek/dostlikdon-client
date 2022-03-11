import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {adminNewsReducer} from "./adminNewsReducer";
import {adminMenusReducer} from "./adminMenusReducer";
import {appReducer} from "./appReduer";

export const rootReducer = combineReducers({
    login: loginReducer,
    news: adminNewsReducer,
    menu: adminMenusReducer,
    app: appReducer
});