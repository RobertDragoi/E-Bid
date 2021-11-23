import { REGISTER, LOGIN, GET_USER, USER_ERROR, LOGOUT } from "../types.js";
export const loginAction = () => ({ type: LOGIN });
export const registerAction = () => ({ type: REGISTER });
export const getUserAction = (values) => ({ type: GET_USER, payload: values });
export const userErrorAction = (values) => ({
  type: USER_ERROR,
  payload: values,
});
export const logoutAction = () => ({ type: LOGOUT });
