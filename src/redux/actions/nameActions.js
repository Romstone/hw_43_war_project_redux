import {CHANGE_USER_NAME} from "./actionTypes";

export const changeUserName = (name) => (
    {
        type: CHANGE_USER_NAME,
        payload: name
    });