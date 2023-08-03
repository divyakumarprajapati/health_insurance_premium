import {
  GET_PREMIUM,
  GET_ALL_CART_PREMIUM,
  ADD_PREMIUM_TO_CART,
} from "./actionTypes";
// import axios from "axios";
import data from "../components/premium_plan/mock_data.json";
import allPremiums from "./premium_mock_data.json";

// const API = "http://localhost:5000/";

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
  return async function (dispatch) {
    await dispatch(getPremium(data));
    // axios
    //   .get(`${API}/premium`)
    //   .then((res) => dispatch(getPremium(res.data)))
    //   .catch((err) => console.error(err));
  };
};

export const fetchAllPremium = () => {
  return async function (dispatch) {
    await dispatch(getAllPremium(allPremiums));
    // axios
    //   .get(`${API}/premiums`)
    //   .then((res) => dispatch(getAllPremium(res.data)))
    //   .catch((err) => console.error(err));
  };
};

export const addPremiumToCart = (premium) => {
  return async function (dispatch) {
    await dispatch(addPremium(premium));
    // await axios
    //   .post(`${API}/premiums`)
    //   .then((res) => dispatch(addPremium(res.data)))
    //   .catch((err) => console.error(err));
  };
};
