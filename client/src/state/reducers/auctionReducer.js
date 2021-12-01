import { ADD_AUCTION, AUCTION_ERROR, GET_AUCTIONS } from "../types.js";
const initialState = {
  auctions: [],
  usersAuctions: [],
  error: null,
};
const auctionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_AUCTION:
      return { ...state, auctions: [...state.auctions, payload] };
    case GET_AUCTIONS:
      return { ...state, auctions: payload };
    case AUCTION_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
export default auctionReducer;
