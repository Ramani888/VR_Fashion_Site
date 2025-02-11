import React from "react";
import useCheckout from "./useCheckout";
import Preloader from "../../layouts/Preloader";
import { StateData } from "../../../helper/RegisterHelper";

const Content = () => {
  const {
    loading,
    cartData,
    deliveryAddressData,
    openAddressForm,
    handleOpenAddressForm,
    handleCloseAddressForm,
    formData,
    handleInputChange,
    handleSubmitAddress,
    walletData,
    useWallet,
    setUseWallet,
    razorPayPayment,
  } = useCheckout();

  const calculateDeliveryCharge = (array, key) => {
    if (!array?.length) return 0; // Handle empty array case
    const total = array?.reduce(
      (sum, obj) => sum + (obj?.product?.[key] || 0),
      0
    ); // Sum all values of the specified key
    return total / array?.length; // Divide by the number of objects
  };

  const deliveryCharge = calculateDeliveryCharge(
    cartData?.data,
    "deliveryCharge"
  );

  const totalPrice = cartData?.data?.reduce((accumulator, item) => {
    return accumulator + item?.product?.mrp * item?.qty;
  }, 0);

  const totalDiscount = cartData?.data?.reduce((accumulator, item) => {
    const discount =
      item?.product?.mrp * item?.qty - item?.product?.price * item?.qty;
    return accumulator + discount;
  }, 0);

  const extraDiscount = cartData?.data?.reduce((accumulator, item) => {
    const discountPercentage = parseFloat(item?.product?.discount) || 0;
    const priceDifference = item?.product?.mrp * item?.qty - totalDiscount;
    const discount =
      priceDifference > 0 ? (priceDifference * discountPercentage) / 100 : 0;

    return accumulator + discount;
  }, 0);

  const calculateTaxes = (data) => {
    return data?.map((item) => {
      if (item?.product?.gst) {
        const gstRate = parseFloat(item?.product?.gst) / 100;
        const gstAmount = item?.product?.price * gstRate;
        return {
          ...item?.product,
          gstAmount: gstAmount,
        };
      } else {
        const sgstRate = parseFloat(item?.product?.sgst) / 100 || 0;
        const igstRate = parseFloat(item?.product?.igst) / 100 || 0;
        const sgstAmount = item?.product?.price * sgstRate;
        const igstAmount = item?.product?.price * igstRate;
        return {
          ...item?.product,
          sgstAmount: sgstAmount,
          igstAmount: igstAmount,
        };
      }
    });
  };

  const calculateTotalGst = (data) => {
    return data?.reduce((total, item) => {
      const findProduct = cartData?.data?.find(
        (cardItem) => cardItem?.product?._id === item?._id
      );
      const gstAmount = parseFloat(item?.gstAmount) || 0;
      const qty = parseInt(findProduct?.qty, 10) || 0;
      return total + gstAmount * qty;
    }, 0);
  };

  const calculateTotalIgst = (data) => {
    return data?.reduce((total, item) => {
      const findProduct = cartData?.data?.find(
        (cardItem) => cardItem?.product?._id === item?._id
      );
      const igstAmount = parseFloat(item?.igstAmount) || 0;
      const qty = parseInt(findProduct?.qty, 10) || 0;
      return total + igstAmount * qty;
    }, 0);
  };

  const calculateTotalSgst = (data) => {
    return data?.reduce((total, item) => {
      const findProduct = cartData?.data?.find(
        (cardItem) => cardItem?.product?._id === item?._id
      );
      const sgstAmount = parseFloat(item?.sgstAmount) || 0;
      const qty = parseInt(findProduct?.qty, 10) || 0;
      return total + sgstAmount * qty;
    }, 0);
  };

  const gstData = calculateTaxes(cartData?.data);

  const totalGst = calculateTotalGst(gstData);
  const totalIgst = calculateTotalIgst(gstData);
  const totalSgst = calculateTotalSgst(gstData);

  const total =
    totalPrice -
    Math.round(extraDiscount) -
    totalDiscount +
    (Math.round(totalGst) !== 0
      ? Math.round(totalGst)
      : Math.round(totalIgst) + Math.round(totalSgst));

  const isWalletTabDiable = walletData?.remainingReward > 200 ? false : true;
  const walletBalance = useWallet ? walletData?.remainingReward : 0;
  const price = total + parseInt(deliveryCharge);
  const finalPrice = price > walletBalance ? price - walletBalance : 0;

  return (
    <section className="checkout pt-60 pb-40">
      {loading && <Preloader />}
      <div className="container">
        {/* <form method="post"> */}
        <div className="row">
          <div className="col-xl-7">
            <div className="checkout-form">
              <h4 style={{ color: "black" }}>Delivery Address</h4>
              {!openAddressForm && (
                <>
                  {deliveryAddressData?.length > 0 && (
                    <div className="widget socail-widget mb-40">
                      <div className="filter-color">
                        <label className="checkbox">
                          <input type="checkbox" name="#" checked />
                          <span
                            className="custom-box"
                            style={{ color: "black" }}
                          />
                          {deliveryAddressData?.[0]?.addressFirst},{" "}
                          {deliveryAddressData?.[0]?.addressSecond},{" "}
                          {deliveryAddressData?.[0]?.area},{" "}
                          {deliveryAddressData?.[0]?.city},{" "}
                          {deliveryAddressData?.[0]?.state},{" "}
                          {deliveryAddressData?.[0]?.pinCode}
                        </label>
                      </div>
                    </div>
                  )}
                  <div
                    className="main-btn btn-filled w-100"
                    style={{ backgroundColor: "black" }}
                    onClick={() => handleOpenAddressForm()}
                  >
                    Add New Address
                  </div>
                </>
              )}
              {openAddressForm && (
                <form onSubmit={handleSubmitAddress}>
                  <div className="row">
                    <div className="col-xl-12 input-group input-group-two mb-20">
                      <label className="text-black">
                        Address Line 1 <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Address First"
                        name="addressFirst"
                        onChange={handleInputChange}
                        value={formData?.addressFirst}
                        required
                      />
                    </div>

                    <div className="col-xl-12 input-group input-group-two mb-20">
                      <label className="text-black">Address Line 2</label>
                      <input
                        type="text"
                        placeholder="Address Second"
                        name="addressSecond"
                        onChange={handleInputChange}
                        value={formData?.addressSecond}
                      />
                    </div>

                    <div className="col-12 input-group input-group-two mb-20">
                      <label className="text-black">
                        Area <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Area"
                        name="area"
                        onChange={handleInputChange}
                        value={formData?.area}
                        required
                      />
                    </div>

                    <div className="col-12 input-group input-group-two mb-20">
                      <label className="text-black">Landmark</label>
                      <input
                        type="text"
                        placeholder="Landmark"
                        name="landmark"
                        onChange={handleInputChange}
                        value={formData?.landmark}
                      />
                    </div>

                    <div className="col-6 input-group input-group-two mb-20">
                      <label className="text-black">
                        City <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={handleInputChange}
                        value={formData?.city}
                        required
                      />
                    </div>

                    <div className="col-6 input-group input-group-two mb-20">
                      <label className="text-black">
                        Pin Code <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Pin Code"
                        name="pinCode"
                        onChange={handleInputChange}
                        value={formData?.pinCode}
                        required
                      />
                    </div>

                    <div className="col-6 input-group input-group-two mb-20">
                      <label className="text-black">
                        State <span className="text-danger">*</span>
                      </label>
                      <select
                        name="state"
                        className="nice-select"
                        onChange={handleInputChange}
                        value={formData?.state}
                        required
                      >
                        <option disabled>Select State</option>
                        {StateData?.map((item, index) => (
                          <option key={index} value={item?.name}>
                            {item?.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-6 input-group input-group-two mb-20">
                      <label className="text-black">
                        Country <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Country"
                        name="country"
                        value={formData?.country}
                        disabled
                        required
                      />
                    </div>

                    <div className="col-xl-6 input-group input-group-two mb-20">
                      <div
                        className="main-btn btn-border w-100"
                        onClick={handleCloseAddressForm}
                      >
                        Cancel
                      </div>
                    </div>

                    <div className="col-xl-6 input-group input-group-two mb-20">
                      <button
                        type="submit"
                        className="main-btn btn-filled w-100"
                        style={{ backgroundColor: "black" }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="col-xl-5 space-top">
            <div className="checkout-table">
              <table>
                <thead>
                  <tr>
                    <th style={{ color: "black" }}>Product</th>
                    <th style={{ color: "black" }}>Quantity</th>
                    <th style={{ color: "black" }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData?.data?.map((item, i) => (
                    <tr key={i}>
                      <td data-title="product">
                        <div className="product-name">
                          <h6>
                            <p style={{ color: "black" }}>
                              {item?.product?.name}
                            </p>
                          </h6>
                          {/* <p>{item.piece} Piece</p> */}
                        </div>
                      </td>
                      <td data-title="Quantity" style={{ color: "black" }}>
                        x{item.qty}
                      </td>
                      <td data-title="Total">
                        <strong style={{ color: "black" }}>
                          ₹{item.total}
                        </strong>
                      </td>
                    </tr>
                  ))}
                  <tr className="total">
                    <td>
                      <h6 className="mb-0" style={{ color: "black" }}>
                        Total
                      </h6>
                    </td>
                    <td />
                    <td>
                      <strong style={{ color: "black" }}>₹{total}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #000000",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    color: "black",
                  }}
                >
                  ₹{total} | Pay Online
                </div>
                <input
                  style={{ width: "30px", height: "30px" }}
                  type="radio"
                  placeholder="Card Number"
                  name="onine"
                  checked
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #000000",
                  justifyContent: "space-between",
                  padding: "10px",
                  pointerEvents: isWalletTabDiable ? "none" : "auto",
                  opacity: isWalletTabDiable ? 0.5 : 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    color: "black",
                  }}
                >
                  ₹{walletBalance} | Your Wallet
                </div>
                <input
                  style={{ width: "30px", height: "30px" }}
                  type="radio"
                  placeholder="Card Number"
                  name="wallet"
                  onClick={() => setUseWallet(!useWallet)}
                  checked={useWallet}
                />
              </div>
              <label>Note: you can only use wallet balance above Rs.200</label>
            </div>
            <div className="offset-lg-12 col-lg-12 col-md-12 mt-20 mb-20">
              <div className="cw-product-promo">
                <table className="table cw-table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b style={{ color: "black" }}>Total Price :</b>{" "}
                      </td>
                      <td className="text-right" style={{ color: "black" }}>
                        ₹ {total}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <b style={{ color: "black" }}>Delivery Charge :</b>{" "}
                      </td>
                      <td className="text-right" style={{ color: "black" }}>
                        ₹ {deliveryCharge}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <b style={{ color: "black" }}>Total Amount :</b>{" "}
                      </td>
                      <td className="text-right" style={{ color: "black" }}>
                        ₹ {finalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <button className="main-btn btn-filled w-100" style={{backgroundColor:'black'}} onClick={() => razorPayPayment(finalPrice)}>Place Order</button> */}
            </div>
            <button
              className="main-btn btn-filled w-100"
              style={{ backgroundColor: "black" }}
              onClick={() => razorPayPayment(finalPrice)}
            >
              Place Order
            </button>
          </div>
        </div>
        {/* </form> */}
      </div>
    </section>
  );
};

export default Content;
