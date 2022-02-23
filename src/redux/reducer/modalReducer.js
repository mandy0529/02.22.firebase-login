import { ActionTypes } from "../constant/action";

const {
  HAS_USER_MODAL,
  NOT_AVAILABLE_MODAL,
  SUCCESS_SIGNUP_MODAL,
  SUCCESS_LOGIN_MODAL,
  FAIL_LOGIN_MODAL,
  CLOSE_MODAL,
  LOGOUT,
} = ActionTypes;

export const modalState = {
  alert: {
    show: false,
    msg: "",
  },
};

const modalReducer = (state = modalState, { type, payload }) => {
  switch (type) {
    case SUCCESS_LOGIN_MODAL:
      const { show, msg } = payload;
      return { ...state, alert: { ...state.alert, show, msg } };

    case CLOSE_MODAL:
      return { ...state, alert: { ...state.alert, show: false, msg: "" } };

    case SUCCESS_SIGNUP_MODAL:
      const { show: show_signup, msg: msg_signup } = payload;
      return {
        ...state,
        alert: { ...state.alert, show: show_signup, msg: msg_signup },
      };

    case FAIL_LOGIN_MODAL:
      const { show: fail_login_show, msg: fail_login_msg } = payload;
      return {
        ...state,
        alert: { ...state.alert, show: fail_login_show, msg: fail_login_msg },
      };

    case NOT_AVAILABLE_MODAL:
      const { show: not_signup_show, msg: not_signup_msg } = payload;
      return {
        ...state,
        alert: { ...state.alert, show: not_signup_show, msg: not_signup_msg },
      };

    case HAS_USER_MODAL:
      const { show: has_signup_show, msg: has_signup_msg } = payload;
      return {
        ...state,
        alert: { ...state.alert, show: has_signup_show, msg: has_signup_msg },
      };

    case LOGOUT:
      const { show: logout_show, msg: logout_msg } = payload;
      return {
        ...state,
        alert: { ...state.alert, show: logout_show, msg: logout_msg },
      };

    default:
      return { ...state };
  }
};

export default modalReducer;
