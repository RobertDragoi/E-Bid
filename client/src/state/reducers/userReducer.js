import { REGISTER, LOGIN, GET_USER, USER_ERROR, LOGOUT } from "../types.js";
const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER:
      return { ...state, isAuthenticated: true, error: null };
    case LOGIN:
      return { ...state, isAuthenticated: true, error: null };
    case GET_USER:
      return { ...state, user: payload, isAuthenticated: true };
    case USER_ERROR:
      return { ...state, error: payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

export default userReducer;
