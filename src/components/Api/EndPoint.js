const Base_url = 'https://vr-fashion-backend.vercel.app/api';
// const Base_url = 'https://vrfashion.site/api';
// const Base_url = 'http://192.168.43.47:3010/api';

const Api = {
  getState: `${Base_url}/state`,
  registerUser: `${Base_url}/registerUser`,
  registerLogin: `${Base_url}/register/login`,
  userLogin: `${Base_url}/login`,
  get_banner: `${Base_url}/banner`,
  getAdPoster: `${Base_url}/ads/poster`,
  get_category: `${Base_url}/category`,
  promotion: `${Base_url}/product/pramotion`,
  Category_Wise_Product: `${Base_url}/category/product`,
  get_single_product: `${Base_url}/product/alone`,
  wishList: `${Base_url}/wishlist`,
  cart: `${Base_url}/cart`,
  cartCount: `${Base_url}/cart/count`,
  getProfile: `${Base_url}/user`,
  address: `${Base_url}/delivery/address`,
  order: `${Base_url}/user/order`,
  add_order: `${Base_url}/order`,
  get_under_two_product: `${Base_url}/product/under/two`,
  get_under_three_product: `${Base_url}/product/under/three`,
  get_under_five_product: `${Base_url}/product/under/five`,
  get_under_ten_product: `${Base_url}/product/under/ten`,
  notificationCount: `${Base_url}/notification/count`,
  get_notification: `${Base_url}/notification`,
  update_notification_status: `${Base_url}/notification/status`,
  unloading_details: `${Base_url}/unloading`,
  searchProduct: `${Base_url}//search/product`,
  reward: `${Base_url}/reward`,
  insertDeviceToken: `${Base_url}/notification/device/token`,
  refund_payment: `${Base_url}/refund/payment`,
  update_order_status: `${Base_url}/order/status`,
};

export default Api;
