import {
  GET_PREMIUM,
  GET_ALL_CART_PREMIUM,
  ADD_PREMIUM_TO_CART,
} from "./actionTypes";
import axios from "axios";
import data from "../components/PremiumPlanTable/mock_data.json";

const API = "http://localhost:5000/";

const getPremium = (premium) => {
  return {
    type: GET_PREMIUM,
    payload: premium,
  };
};

const getAllPremium = (allPremiums) => {
  return {
    type: GET_ALL_CART_PREMIUM,
    payload: allPremiums,
  };
};

const addPremium = (premium) => {
  return {
    type: ADD_PREMIUM_TO_CART,
    payload: premium,
  };
};

export const fetchPremium = () => {
  return function (dispatch) {
    dispatch(getPremium(data));
    // axios
    //   .get(`${API}/premium`)
    //   .then((res) => dispatch(getPremium(res.data)))
    //   .catch((err) => console.error(err));
  };
};

export const fetchAllPremium = () => {
  return function (dispatch) {
    axios
      .get(`${API}/premiums`)
      .then((res) => dispatch(getAllPremium(res.data)))
      .catch((err) => console.error(err));
  };
};

export const addPremiumToCart = () => {
  return function (dispatch) {
    axios
      .post(`${API}/premiums`)
      .then((res) => dispatch(addPremium(res.data)))
      .catch((err) => console.error(err));
  };
};
