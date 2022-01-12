import axios from "axios";
import { serverUrl } from "../../../../constants";
import { UPDATE_QUOTES, QUOTES_ERROR } from "../actionTypes";

export const updateQuotes = (token) => (dispatch) => {
  axios
    .get(serverUrl + "/api/getListData", {
      headers: {
        Authorization: `Brearer ${token}`,
      },
    })
    .then((res) => {
      localStorage.quotes = JSON.stringify(res.data.data.quotes);
      dispatch({
        type: UPDATE_QUOTES,
        payload: res.data.data.quotes,
      });
    })
    .catch((error) => {
      if (error.response === undefined) {
        dispatch({
          type: QUOTES_ERROR,
          payload: "Server Error",
        });
      } else {
        dispatch({
          type: QUOTES_ERROR,
          payload: error.response.data.userFriendlyMessage,
        });
      }
    });
};
