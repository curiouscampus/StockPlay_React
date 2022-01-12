import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  AUTOLOGIN_ERROR,
} from "../actionTypes";

export const autoLogin = () => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  let data = localStorage.getItem("data");
  data = JSON.parse(data);
  if (data) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    const remainingTime = data.tokenExpiry - (new Date().getTime());

    if (remainingTime > 0) {
      setTimeout(() => {
        dispatch({
          type: LOGOUT_USER,
        });
        localStorage.removeItem("data");

      }, remainingTime);
    } else {
      dispatch({
        type: LOGOUT_USER,
      });
      localStorage.removeItem("data");

    }
  } else {
    dispatch({
      type: AUTOLOGIN_ERROR,
    });
  }
};
