import axios from "axios";
import {
  addAuctionAction,
  auctionErrorAction,
} from "../actions/auctionActions";

export const addAuctionOperation = (body) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
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
