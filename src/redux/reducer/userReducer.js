import { ActionTypes } from "../constant/action";
const { LOGIN, SET_LOGOUT } = ActionTypes;

export const initialState = {
  userName: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, userName: payload };

    case SET_LOGOUT:
      return { ...state, userName: "" };

    default:
      return { ...state };
  }
};

export default userReducer;
