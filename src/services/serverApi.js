import axios, { Method } from "axios";
import { StatusCodes } from "http-status-codes";

// const serverUrl = 'http://localhost:3010/api'
// const serverUrl = "https://vrfashion.site/api";
const serverUrl = 'https://vr-fashion-backend.vercel.app/api';

const errorCodes = [
  StatusCodes.INTERNAL_SERVER_ERROR,
  StatusCodes.BAD_REQUEST,
  StatusCodes.UNAUTHORIZED,
  StatusCodes.CONFLICT,
];

const serverRequest = async (url, command, data, token, isForm) => {
  const headers = {
    Accept: "application/json, text/plain, */*",
  };

  if (token) {
    headers.authorization = "";
  }

  const params = {
    method: command,
    mode: "cors",
    cache: "no-cache",
    headers: headers,
  };

  if (data && !isForm) {
    params.headers["Content-Type"] = "application/json";
    params.body = JSON.stringify(data);
  } else if (isForm) {
    params.body = data;
  }

  try {
    const config = {
      url: serverUrl + url,
      headers: headers,
      method: command,
      timeout: 200000,
      data: data,
    };
    const response = await axios(config);

    let res = await response.data;

    if (errorCodes.includes(response.status)) {
      throw res;
    }

    return res;
  } catch (e) {
    throw e;
  }
};

export const serverLogin = async (data) => {
  const res = await serverRequest("/login", "POST", data, true);
  return res;
};

export const serverRegisterLogin = async (data) => {
  const res = await serverRequest("/register/login", "POST", data, true);
  return res;
};

/********** Category Api **********/
export const serverGetCategory = async () => {
  const res = await serverRequest("/category", "GET", null, true);
  return res;
};

export const serverGetCategoryById = async (categoryId) => {
  const res = await serverRequest(
    `/category/alone?categoryId=${categoryId}`,
    "GET",
    null,
    true
  );
  return res;
};

/********** Ads Poster Api **********/
export const serverGetAdsPoster = async () => {
  const res = await serverRequest("/ads/poster", "GET", null, true);
  return res;
};

/********** Product Api **********/
export const serverGetPramotionProduct = async (userId) => {
  let url = "/product/pramotion";
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverGetProductByCategoryId = async (categoryId, userId) => {
  let url = `/category/product?categoryId=${categoryId}`;
  if (userId) {
    url += `&userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverGetProductById = async (productId, userId) => {
  let url = `/product/alone?productId=${productId}`;
  if (userId) {
    url += `&userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverGetAllProduct = async (userId) => {
  let url = `/product`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverGetProductUnderTwo = async (userId) => {
  let url = `/product/under/two`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverGetProductUnderThree = async (userId) => {
  let url = `/product/under/three`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverGetProductUnderFive = async (userId) => {
  let url = `/product/under/five`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverGetProductUnderTen = async (userId) => {
  let url = `/product/under/ten`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

/********** Order Api **********/
export const serverGetOrder = async (userId) => {
  let url = `/user/order`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverCreateOrder = async (data) => {
  let url = `/order`;
  const res = await serverRequest(url, "POST", data, true);
  return res;
};

/********** Wishlist Api **********/
export const serverGetWishlistProduct = async (userId) => {
  let url = `/wishlist`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverAddWishlistProduct = async (data) => {
  let url = `/wishlist`;
  const res = await serverRequest(url, "POST", data, true);
  return res;
};

export const serverRemoveWishlistProduct = async (userId, productId) => {
  let url = `/wishlist`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  if (productId) {
    url += `&productId=${productId}`;
  }
  const res = await serverRequest(url, "DELETE", null, true);
  return res;
};

/********** Cart Api **********/
export const serverGetCartData = async (userId) => {
  let url = `/cart`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverGetCartCountData = async (userId) => {
  let url = `/cart/count`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverAddToCart = async (data) => {
  let url = `/cart`;
  const res = await serverRequest(url, "POST", data, true);
  return res;
};

export const serverRemoveToCart = async (userId, productId) => {
  let url = `/cart`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  if (productId) {
    url += `&productId=${productId}`;
  }
  const res = await serverRequest(url, "DELETE", null, true);
  return res;
};

export const serverUpdateCartData = async (productId, data) => {
  let url = `/cart`;
  if (productId) {
    url += `?productId=${productId}`;
  }
  const res = await serverRequest(url, "PUT", data, true);
  console.log("res", res);
  return res;
};

/********** Delivery Address Api **********/
export const serverGetDeliveryAddressData = async (userId) => {
  let url = `/delivery/address`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};

export const serverAddDeliveryAddressData = async (data) => {
  let url = `/delivery/address`;
  const res = await serverRequest(url, "POST", data, true);
  return res;
};

/********** Reward Api **********/
export const serverGetRewardData = async (userId) => {
  let url = `/reward`;
  if (userId) {
    url += `?userId=${userId}`;
  }
  const res = await serverRequest(url, "GET", null, true);
  return res;
};
