import { ActionTypes } from "../constant/action";

const {
  CLOSE_MODAL,
  MODAL_CONTROL,
} = ActionTypes;

export const modalState = {
  alert: {
    show: false,
    msg: "",
  },
};

const modalReducer = (state = modalState, { type, payload }) => {
  switch (type) {
    case MODAL_CONTROL:
      const { show, msg } = payload;
      return {
        ...state,
        alert: { ...state.alert, show, msg },
      };

    case CLOSE_MODAL:
      return { ...state, alert: { ...state.alert, show: false, msg: "" } };

    default:
      return { ...state };
  }
};

export default modalReducer;
