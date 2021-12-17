import {
  ADD_AUCTION,
  AUCTION_ERROR,
  GET_AUCTIONS,
  GET_AUCTION,
  BID_AUCTION,
} from "../types.js";
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
export const getAuctionAction = (values) => ({
  type: GET_AUCTION,
  payload: values,
});
export const bidAuctionAction = (values) => ({
  type: BID_AUCTION,
  payload: values,
});
