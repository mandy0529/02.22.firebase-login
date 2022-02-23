import { ActionTypes } from "../constant/action";

const {
  CLOSE_MODAL,
  HAS_USER_MODAL,
  NOT_AVAILABLE_MODAL,
  SUCCESS_SIGNUP_MODAL,
  SUCCESS_LOGIN_MODAL,
  FAIL_LOGIN_MODAL,
  LOGOUT,
} = ActionTypes;

export const sucessSignup = (show, msg) => {
  return {
    type: SUCCESS_SIGNUP_MODAL,
    payload: { show, msg },
  };
};

export const notAvailableModal = (show, msg) => {
  return {
    type: NOT_AVAILABLE_MODAL,
    payload: { show, msg },
  };
};

export const sucessLogin = (show, msg) => {
  return {
    type: SUCCESS_LOGIN_MODAL,
    payload: { show, msg },
  };
};

export const failLogin = (show, msg) => {
  return {
    type: FAIL_LOGIN_MODAL,
    payload: { show, msg },
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const logOut = (show, msg) => {
  return {
    type: LOGOUT,
    payload: { show, msg },
  };
};
