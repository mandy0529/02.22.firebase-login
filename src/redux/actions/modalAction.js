import { ActionTypes } from "../constant/action";

const { CLOSE_MODAL, MODAL_CONTROL } = ActionTypes;

export const modalControl = (show, msg) => {
  return {
    type: MODAL_CONTROL,
    payload: { show, msg },
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
