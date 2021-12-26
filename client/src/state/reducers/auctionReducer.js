import {
  ADD_AUCTION,
  AUCTION_ERROR,
  LOADING_AUCTION,
  GET_AUCTIONS,
  GET_AUCTION,
  GET_USERS_AUCTIONS,
  BID_AUCTION,
} from "../types.js";
const initialState = {
  auctions: [],
  auctionDetail: null,
  usersAuctions: [],
  loading: false,
  error: null,
};
const auctionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_AUCTION:
      return { ...state, auctions: [payload, ...state.auctions], error: null };
    case GET_AUCTIONS:
      return { ...state, auctions: payload, error: null, loading: false };
    case GET_AUCTION:
      return { ...state, auctionDetail: payload, loading: false };
    case GET_USERS_AUCTIONS:
      return { ...state, usersAuctions: payload, loading: false };
    case BID_AUCTION:
      return {
        ...state,
        auctions: state.auctions.map((auction) =>
          auction._id === payload._id ? payload : auction
        ),
        error: null,
      };
    case LOADING_AUCTION:
      return { ...state, loading: true };
    case AUCTION_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
export default auctionReducer;
