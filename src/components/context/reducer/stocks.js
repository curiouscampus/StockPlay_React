import { UPDATE_QUOTES, QUOTES_ERROR } from "../actions/actionTypes";

const stocks = (state, action) => {
  switch (action.type) {
    case UPDATE_QUOTES:
      return {
        ...state,
        stocks: {
          ...state.stocks,
          quotes: action.payload,
        },
      };
    case QUOTES_ERROR:
      return {
        ...state,
        stocks: {
          ...state.stocks,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default stocks;
