export const modalState = {
  alert: {
    show: false,
    msg: "",
  },
};

const modalReducer = (state = modalState, { type, payload }) => {
  switch (type) {
    default:
      return { ...state };
  }
};

export default modalReducer;
