import { REGISTER, LOGIN, GET_USER, USER_ERROR } from "../types.js";
const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER:
      return { ...state, isAuthenticated: true };
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case GET_USER:
      return { ...state, user: payload };
    case USER_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default userReducer;