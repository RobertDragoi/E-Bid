import axios from "axios";
import Cookies from "js-cookie";
import {
  loginAction,
  registerAction,
  getUserAction,
  userErrorAction,
  logoutAction,
} from "../actions/userActions";
export const loginOperation = (body) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/user/login",
      body
    );
    Cookies.set("token", response.data, { expires: 1 / 24 });
    dispatch(loginAction());
    dispatch(getUserOperation());
  } catch (error) {
    dispatch(userErrorAction(error.response.data));
  }
};
export const registerOperation = (body) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/user/register",
      body
    );
    Cookies.set("token", response.data, { expires: 1 / 24 });
    dispatch(registerAction());
    dispatch(getUserOperation());
  } catch (error) {
    dispatch(userErrorAction(error.response.data));
  }
};
export const getUserOperation = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": Cookies.get("token"),
      },
    };
    const response = await axios.get("http://localhost:8080/api/user", config);
    dispatch(getUserAction(response.data));
  } catch (error) {
    dispatch(userErrorAction(error.response.data));
  }
};
export const logoutOperation = (dispatch) => {
  dispatch(logoutAction());
};
