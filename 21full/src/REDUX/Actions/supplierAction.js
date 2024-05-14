import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  EDIT_FAILURE,
  EDIT_SUCCESS,
  EDIT_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_FAIL,
  LOGIN_REQUEST,
  CLEAR_ERRORS,
} from "../Constant/constant";

import axios from "axios";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Supplier.jsx
export const registerS = (
  name,
  phone,
  service,
  address,
  city,
  state,
  image,navigate,
  password
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      const response = await axios.post(
        "http://localhost:8000/api/auth/contractor-register",
        { name, phone, service, address, city, state, image, password }
       
      );
      console.log(Cookies.get('token'));

      console.log(response);

      dispatch({
        type: REGISTER_SUCCESS,

        payload: response.data,
      });
      // navigate('/')
      
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Supplylogin.jsx
export const login = (name, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const response = await axios.post(
      "http://localhost:8000/api/auth/contractor-login",
      {
        name,
        password,
       
      },
     
      
    );
    const token = response.data.token;
 console.log(token);

    

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
      
      token:token,
    });
    console.log(response);
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,

      payload: error.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// EditProfileSupplier.jsx

const editRequest = () => ({
  type: EDIT_REQUEST,
});

const editSuccess = () => ({
  type: EDIT_SUCCESS,
});

const editFailure = (error) => ({
  type: EDIT_FAILURE,
  error,
});

export const edit =
  (name, phone, service, address, city, state, desc, shortDesc, image) =>
  async (dispatch) => {
    try {
      dispatch(editRequest());
      const response = await axios.put(
        "http://localhost:8000/api/auth/contractor-edit",
        { name, phone, service, address, city, state, desc, shortDesc, image },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cookies.get('token')}`, 
          },
        }
        
        
        );
        console.log(response);


     

      if (response.data.status !== "success") {
        throw new Error(response.data.message);
      }
      dispatch({ type: EDIT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: EDIT_FAILURE, payload: error.message });
    }
  };

// editFailure(error.message)

export const logout = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/auth/contractor-logout",
      { data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: LOGOUT,
      // payload: response.data,
    });
  } catch (error) {
    // Handle error here
    dispatch({ type: LOGOUT_FAIL, payload: error.response.message });
  }
};

