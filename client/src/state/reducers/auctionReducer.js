import {
  ADD_AUCTION,
  AUCTION_ERROR,
  GET_AUCTIONS,
  GET_AUCTION,
  BID_AUCTION,
} from "../types.js";
const initialState = {
  auctions: [],
  auctionDetail: null,
  usersAuctions: [],
  error: null,
};
const auctionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_AUCTION:
      return { ...state, auctions: [payload, ...state.auctions], error: null };
    case GET_AUCTIONS:
      return { ...state, auctions: payload, error: null };
    case GET_AUCTION:
      return { ...state, auctionDetail: payload, error: null };
    case BID_AUCTION:
      return {
        ...state,
        auctions: state.auctions.map((auction) =>
          auction._id === payload._id ? payload : auction
        ),
        error: null,
      };
    case AUCTION_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
export default auctionReducer;
