import {
  ADD_AUCTION,
  AUCTION_ERROR,
  GET_AUCTIONS,
  BID_AUCTION,
} from "../types.js";
const initialState = {
  auctions: [],
  usersAuctions: [],
  error: null,
};
const auctionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_AUCTION:
      return { ...state, auctions: [payload, ...state.auctions] };
    case GET_AUCTIONS:
      return { ...state, auctions: payload };
    case BID_AUCTION:
      return {
        ...state,
        auctions: state.auctions.map((auction) =>
          auction._id === payload._id ? payload : auction
        ),
      };
    case AUCTION_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
export default auctionReducer;
