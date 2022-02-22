import { ActionTypes } from "../constant/action";
const { LOGIN, LOGOUT, SIGN_UP } = ActionTypes;

export const initialState = {
  userName: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, userName: payload };

    default:
      return { ...state };
  }
};

export default userReducer;
