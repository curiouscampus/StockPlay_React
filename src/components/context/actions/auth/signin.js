import axios from "axios";
import { serverUrl } from "../../../../constants";
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR,LOGOUT_USER } from "../actionTypes";

export const signin =
  ({ password, email, remember }) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    axios
      .post(serverUrl + "/api/signin", {
        password,
        email,
      })
      .then((res) => {
        if (remember == "true")
          localStorage.data = JSON.stringify(res.data.data);
          const remainingTime = res.data.data.tokenExpiry - (new Date().getTime());

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data,
        });

        setTimeout(() => {
          dispatch({
            type: LOGOUT_USER,
          });
          localStorage.removeItem("data");
        }, remainingTime);
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data.userFriendlyMessage,
        });
      });
  };
