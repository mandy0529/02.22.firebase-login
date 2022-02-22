import { ActionTypes } from "../constant/action";
const { LOGIN, LOGOUT, SIGN_UP } = ActionTypes;

export const newSignUp = (email) => {
  return {
    type: SIGN_UP,
    payload: email,
  };
};

export const setLogin=(user)=>{
    return {
        type:LOGIN,
        payload:user
    }
}