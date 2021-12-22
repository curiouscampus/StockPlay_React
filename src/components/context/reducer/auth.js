import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_USER,
  AUTOLOGIN_ERROR,
  UPDATED_USER,
} from "../actions/actionTypes";
import initialState from "../initialStates/auth";

const auth = (state, { payload, type }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: false,
          loading: true,
        },
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          data: payload,
        },
      };

    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload,
        },
      };
    case UPDATED_USER:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          data: { ...state.auth.data, user: payload },
        },
      };
    case LOGOUT_USER:
      return initialState;
    case AUTOLOGIN_ERROR:
      return initialState
    default:
      return state;
  }
};

export default auth;
