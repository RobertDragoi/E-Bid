import axios from "axios";
import Cookies from "js-cookie";
import {
  addAuctionAction,
  auctionErrorAction,
  getAuctionsAction,
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
export const getAuctionsOptions = () => async (dispatch) => {
  try {
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
