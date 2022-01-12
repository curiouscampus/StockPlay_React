import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTOLOGIN_ERROR,
} from "../actionTypes";

export const autoUpdate = (user) => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  let data = localStorage.getItem("data");
  data = JSON.parse(data);
  data = { ...data, user };

  localStorage.data = JSON.stringify(data);

  if (data) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } else {
    dispatch({
      type: AUTOLOGIN_ERROR,
    });
  }
};
