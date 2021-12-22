import axios from "axios"
import { serverUrl } from "../../../../constants";
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "../actionTypes";

export const signin =
  ({ password, email, remember }) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    axios
      .post(
        serverUrl + "/api/signin",
        {
          password,
          email,
        },
      )
      .then((res) => {
        if(remember == 'true')
        localStorage.data = JSON.stringify(res.data.data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_ERROR,
          payload:  error.response.data.userFriendlyMessage,
        });
      });
  };
