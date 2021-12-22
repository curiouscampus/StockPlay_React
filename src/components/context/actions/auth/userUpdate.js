import axios from "axios";
import { UPDATED_USER, LOGIN_ERROR, LOGIN_LOADING } from "../actionTypes";

export const updateuser =
  ({ alert, url, reqParams, token }) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axios
      .post(
        url,
        { ...reqParams },
        {
          headers: {
            Authorization: `Brearer ${token}`,
          },
        }
      )
      .then((res) => {
        localStorage.data = JSON.stringify(res.data.data);
        alert.success(res.data.message);
        dispatch({
          type: UPDATED_USER,
          payload: res.data.data.user,
        });
      })
      .catch((err) => {
        alert.error(err.response.data.message);
        dispatch({
          type: LOGIN_ERROR,
          payload: err.response ? err.response.data : "COULD NOT CONNECT",
        });
      });
  };
