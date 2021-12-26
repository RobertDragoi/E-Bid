import {
  ADD_AUCTION,
  AUCTION_ERROR,
  LOADING_AUCTION,
  GET_AUCTIONS,
  GET_AUCTION,
  GET_USERS_AUCTIONS,
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
export const loadingAuctionAction = () => ({
  type: LOADING_AUCTION,
});
export const getAuctionsAction = (values) => ({
  type: GET_AUCTIONS,
  payload: values,
});
export const getAuctionAction = (values) => ({
  type: GET_AUCTION,
  payload: values,
});
export const getUserAuctionsAction = (values) => ({
  type: GET_USERS_AUCTIONS,
  payload: values,
});
export const bidAuctionAction = (values) => ({
  type: BID_AUCTION,
  payload: values,
});
