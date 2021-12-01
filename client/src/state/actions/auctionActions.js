import { ADD_AUCTION, AUCTION_ERROR, GET_AUCTIONS } from "../types.js";
export const addAuctionAction = (values) => ({
  type: ADD_AUCTION,
  payload: values,
});
export const auctionErrorAction = (values) => ({
  type: AUCTION_ERROR,
  payload: values,
});
export const getAuctionsAction = (values) => ({
  type: GET_AUCTIONS,
  payload: values,
});
