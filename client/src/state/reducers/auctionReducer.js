import { ADD_AUCTION, AUCTION_ERROR } from "../types.js";
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
    case AUCTION_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
export default auctionReducer;
