import axios from "axios";
import {
  loginAction,
  registerAction,
  getUserAction,
  userErrorAction,
} from "../actions/userActions";
export const loginOperation = (body) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/user/login",
      body
    );
    localStorage.setItem("token", response.data);
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
    localStorage.setItem("token", response.data);
    dispatch(registerAction());
    dispatch(getUserOperation());
  } catch (error) {}
};
export const getUserOperation = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const response = await axios.get("http://localhost:8080/api/user", config);
    dispatch(getUserAction(response.data));
  } catch (error) {
    dispatch(userErrorAction(error.response.data));
  }
};
