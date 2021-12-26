import axios from "axios";
import Cookies from "js-cookie";
import {
  addAuctionAction,
  auctionErrorAction,
  loadingAuctionAction,
  getAuctionsAction,
  getAuctionAction,
  getUserAuctionsAction,
  bidAuctionAction,
} from "../actions/auctionActions";

export const addAuctionOperation = (body) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": Cookies.get("token"),
      },
    };
    const response = await axios.post(
      "http://localhost:8080/api/auction",
      body,
      config
    );
    dispatch(addAuctionAction(response.data));
  } catch (error) {
    dispatch(auctionErrorAction(error.response.data));
  }
};
export const bidAuctionOperation = (body) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": Cookies.get("token"),
      },
    };
    const { id, price } = body;
    const response = await axios.put(
      `http://localhost:8080/api/auction/${id}`,
      { price },
      config
    );
    dispatch(bidAuctionAction(response.data));
  } catch (error) {
    dispatch(auctionErrorAction(error.response.data));
  }
};
export const getAuctionsOperation = () => async (dispatch) => {
  try {
    dispatch(loadingAuctionAction());
    const config = {
      headers: {
        "x-auth-token": Cookies.get("token"),
      },
    };
    const response = await axios.get(
      "http://localhost:8080/api/auction",
      config
    );
    dispatch(getAuctionsAction(response.data));
  } catch (error) {
    dispatch(auctionErrorAction(error.response.data));
  }
};
export const getAuctionOperation = (id) => async (dispatch) => {
  try {
    dispatch(loadingAuctionAction());
    const config = {
      headers: {
        "x-auth-token": Cookies.get("token"),
      },
    };
    const response = await axios.get(
      `http://localhost:8080/api/auction/${id}`,
      config
    );
    dispatch(getAuctionAction(response.data));
  } catch (error) {
    dispatch(auctionErrorAction(error.response.data));
  }
};
export const getUserAuctionsOperation = (id) => async (dispatch) => {
  try {
    dispatch(loadingAuctionAction());
    const config = {
      headers: {
        "x-auth-token": Cookies.get("token"),
      },
    };
    const response = await axios.get(
      `http://localhost:8080/api/auction/user/${id}`,
      config
    );
    console.log(response.data);
    dispatch(getUserAuctionsAction(response.data));
  } catch (error) {
    dispatch(auctionErrorAction(error.response.data));
  }
};
