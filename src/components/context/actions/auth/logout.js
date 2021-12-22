import { LOGOUT_USER } from "../actionTypes";

export default () => (dispatch) => {
  localStorage.removeItem("data");
  dispatch({
    type: LOGOUT_USER,
  });
};
