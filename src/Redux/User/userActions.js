import {
  USER_LOGIN_FAILED,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILED,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_UPDATE_PROFILE_START,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAILED,
} from "./userTypesConstants";
import axios from "axios";

export const loginAction = (values, history) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });

    try {
      const response = await axios.post("/users/login", values);

      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_LOGIN_SUCCESS,
      });

      history.push("/");
    } catch (e) {
      dispatch({
        payload: e.response.data.message,
        type: USER_LOGIN_FAILED,
      });
    }
  };
};

export const registerAction = (values, history) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REGISTER_START,
    });

    try {
      const response = await axios.post("/users", values);

      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_REGISTER_SUCCESS,
      });

      history.push("/");
    } catch (e) {
      dispatch({
        payload: e.response.data.message,
        type: USER_REGISTER_FAILED,
      });
    }
  };
};

export const logoutAction = () => {
  return {
    payload: null,
    type: USER_LOGOUT_SUCCESS,
  };
};

export const updateProfileAction = (values, history) => {
  return async (dispatch, getState) => {
    dispatch({
      type: USER_UPDATE_PROFILE_START,
    });

    const state = getState();

    const {
      userDetails: {
        user: { token },
      },
    } = state;

    try {
      const response = await axios.put("/users/profile", values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        payload: response.data,
        type: USER_UPDATE_PROFILE_SUCCESS,
      });

      history.push("/profile");
    } catch (e) {
      dispatch({
        payload: e?.response?.data?.message,
        type: USER_UPDATE_PROFILE_FAILED,
      });
    }
  };
};
