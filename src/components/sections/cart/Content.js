import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/shop/cart-1.png';
import img2 from '../../../assets/img/shop/cart-2.png';
import useCart from './useCart';
import Preloader from "../../layouts/Preloader";
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../../helper/UserHelper';

const cartlistpost = [
    { img: img1, title: 'Blue Blast', total: 109, qty: 1 },
    { img: img2, title: "Florida's Finest", total: 44, qty: 1 },
];

const Content = () => {
    const {
        cartData,
        loading,
        handleRemoveToCart,
        updateCartData
    } = useCart();
    const navigate = useNavigate();

    const totalPrice = cartData?.data?.reduce((accumulator, item) => {
        return accumulator + item?.product?.mrp * item?.qty;
    }, 0);

    const totalDiscount = cartData?.data?.reduce((accumulator, item) => {
        const discount = item?.product?.mrp * item?.qty - item?.product?.price * item?.qty;
        return accumulator + discount;
    }, 0);

    const extraDiscount = cartData?.data?.reduce((accumulator, item) => {
        const discount =
          item?.product?.discount !== undefined
            ? ((parseInt(item?.product?.discount) * item?.product?.mrp) / 100) * item?.qty
            : 0;
        return accumulator + discount;
    }, 0);

    const calculateTaxes = (data) => {
        return data?.map(item => {
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
          const findProduct = cartData?.data?.find((cardItem) => cardItem?.product?._id === item?._id);
          const gstAmount = parseFloat(item?.gstAmount) || 0;
          const qty = parseInt(findProduct?.qty, 10) || 0;
          return total + gstAmount * qty;
        }, 0);
    };

    const calculateTotalIgst = (data) => {
        return data?.reduce((total, item) => {
          const findProduct = cartData?.data?.find((cardItem) => cardItem?.product?._id === item?._id);
          const igstAmount = parseFloat(item?.igstAmount) || 0;
          const qty = parseInt(findProduct?.qty, 10) || 0;
          return total + igstAmount * qty;
        }, 0);
    };

    const calculateTotalSgst = (data) => {
        return data?.reduce((total, item) => {
          const findProduct = cartData?.data?.find((cardItem) => cardItem?.product?._id === item?._id);
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

    useEffect(() => {
        const userData = getUserData();
        if (!userData) {
            navigate('/login')
        }

    }, [])

    return (
        <section className="cart-section pt-120 pb-120">
            {loading && <Preloader />}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="w-100 table-responsive mb-60">
                            <table className="table cw-cart-table mb-0">
                                <thead>
                                    <tr>
                                        <th />
                                        <th scope="col" className="product-name">Product</th>
                                        <th scope="col" className="product-qty">Quantity</th>
                                        <th scope="col" className="product-price">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData?.data?.map((item, i) => (
                                        <tr key={i}>
                                            <td className="product-remove text-center cw-align">
                                                <Link onClick={() => handleRemoveToCart(item?.product)}><i className="fas fa-times" /></Link>
                                            </td>
                                            <td data-title="Product" className="has-title">
                                                <div className="product-thumbnail">
                                                    <img src={item?.product?.image?.[0]?.path} alt="product_thumbnail" />
                                                </div>
                                                <Link to="/shop-detail" state={{ product: item?.product }} style={{ textDecoration: 'none' }}>{item?.product?.name}</Link>
                                            </td>
                                            <td className="quantity shop-detail-content cw-qty-sec cw-align has-title" data-title="Quantity">
                                                <div className="quantity-box">
                                                    <button type="button" className="minus-btn" onClick={() => updateCartData(item, false)}>
                                                        <i className="fal fa-minus" />
                                                    </button>
                                                    <input type="text" className="input-qty" name="name" value={item?.qty} disabled readOnly />
                                                    <button type="button" className="plus-btn" onClick={() => updateCartData(item, true)}>
                                                        <i className="fal fa-plus" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="product-price text-white cw-align has-title" data-title="Price">
                                                <span className="product-currency"><b>₹</b></span> <span className="product-amount"><b>{item?.total}</b></span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={4}>
                                            <button onClick={() => navigate('/shop-left')} className="main-btn btn-filled float-left">Continue Shoping</button>
                                            {/* <button className="main-btn btn-filled float-right">Update Cart</button> */}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="row">
                            <div className="offset-lg-6 col-lg-6 col-md-12">
                                <div className="cw-product-promo">
                                    <table className="table cw-table-borderless">
                                        <tbody>
                                            <tr>
                                                <td> <b>Price ({cartData?.data?.length} items)</b> </td>
                                                <td className="text-right">₹ {totalPrice}</td>
                                            </tr>
                                            <tr>
                                                <td> <b>Discount</b> </td>
                                                <td className="text-right">- ₹ {totalDiscount}</td>
                                            </tr>
                                            {Math.round(extraDiscount) > 0 && (
                                                <tr>
                                                    <td> <b>Extra Discount</b> </td>
                                                    <td className="text-right">- ₹ {Math.round(extraDiscount)}</td>
                                                </tr>
                                            )}
                                            {Math.round(totalGst) > 0 && (
                                                <tr>
                                                    <td> <b>GST Charge</b> </td>
                                                    <td className="text-right">+ ₹ {Math.round(totalGst)}</td>
                                                </tr>
                                            )}
                                            {Math.round(totalIgst) > 0 && (
                                                <tr>
                                                    <td> <b>IGST</b> </td>
                                                    <td className="text-right">+ ₹ {Math.round(totalIgst)}</td>
                                                </tr>
                                            )}
                                            {Math.round(totalSgst) > 0 && (
                                                <tr>
                                                    <td> <b>SGST</b> </td>
                                                    <td className="text-right">+ ₹ {Math.round(totalSgst)}</td>
                                                </tr>
                                            )}
                                            <tr>
                                                <td> <b>Total</b> </td>
                                                <td className="text-right">₹ {total}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {cartData?.data?.length <= 0 ? (
                                        <button className="main-btn btn-filled w-100" disabled style={{ pointerEvents: 'none' }}>
                                            Proceed to Checkout
                                        </button>
                                        ) : (
                                        <Link to="/checkout" className="main-btn btn-filled w-100" style={{ textDecoration: 'none' }}>
                                            Proceed to Checkout
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
