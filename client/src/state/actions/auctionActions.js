import { ADD_AUCTION, AUCTION_ERROR } from "../types.js";
export const addAuctionAction = (values) => ({
  type: ADD_AUCTION,
  payload: values,
});
export const auctionErrorAction = (values) => ({
  type: AUCTION_ERROR,
  payload: values,
});
