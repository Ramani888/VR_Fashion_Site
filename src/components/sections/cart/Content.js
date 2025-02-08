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
        <section className="cart-section pt-120 pb-40">
            {loading && <Preloader />}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="w-100 table-responsive mb-60">
                            <table className="table cw-cart-table mb-0">
                                <thead>
                                    <tr>
                                        <th />
                                        <th scope="col" className="product-name" style={{ color: 'black' }}>Product</th>
                                        <th scope="col" className="product-qty" style={{ color: 'black' }}>Quantity</th>
                                        <th scope="col" className="product-price" style={{ color: 'black' }}>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData?.data?.map((item, i) => (
                                        <tr key={i}>
                                            <td className="product-remove text-center cw-align" >
                                                <Link onClick={() => handleRemoveToCart(item?.product)}><i className="fas fa-times" style={{ color: 'black' }} /></Link>
                                            </td>
                                            <td data-title="Product" className="has-title">
                                                <div className="product-thumbnail">
                                                    <img src={item?.product?.image?.[0]?.path} alt="product_thumbnail" />
                                                </div>
                                                <Link to="/shop-detail" state={{ product: item?.product }} style={{ textDecoration: 'none', color: 'black' }}>{item?.product?.name}</Link>
                                            </td>
                                            <td className="quantity shop-detail-content cw-qty-sec cw-align has-title" data-title="Quantity">
                                                <div className="quantity-box" >
                                                    <button type="button" className="minus-btn" onClick={() => updateCartData(item, false)} style={{ backgroundColor: '#f2f2f2', color: 'black' }}>
                                                        <i className="fal fa-minus" />
                                                    </button>
                                                    <input type="text" className="input-qty" name="name" value={item?.qty} disabled readOnly style={{ backgroundColor: '#f2f2f2', color: 'black' }} />
                                                    <button type="button" className="plus-btn" onClick={() => updateCartData(item, true)} style={{ backgroundColor: '#f2f2f2', color: 'black' }}>
                                                        <i className="fal fa-plus" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="product-price text-white cw-align has-title" data-title="Price">
                                                <span className="product-currency"><b style={{ color: 'black' }}>₹</b></span> <span className="product-amount"><b style={{ color: 'black' }}>{item?.total}</b></span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={4}>
                                            <button onClick={() => navigate('/shop-left')} className="main-btn btn-filled float-left" style={{ backgroundColor: 'black' }}>Continue Shoping</button>
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
                                                <td> <b style={{color:'black'}}>Price ({cartData?.data?.length} items)</b> </td>
                                                <td className="text-right" style={{color:'black'}}>₹ {totalPrice}</td>
                                            </tr>
                                            <tr>
                                                <td> <b style={{color:'black'}}>Discount</b> </td>
                                                <td className="text-right" style={{color:'black'}}>- ₹ {totalDiscount}</td>
                                            </tr>
                                            {Math.round(extraDiscount) > 0 && (
                                                <tr>
                                                    <td> <b style={{color:'black'}}>Extra Discount</b> </td>
                                                    <td className="text-right" style={{color:'black'}}>- ₹ {Math.round(extraDiscount)}</td>
                                                </tr>
                                            )}
                                            {Math.round(totalGst) > 0 && (
                                                <tr>
                                                    <td> <b style={{color:'black'}}>GST Charge</b> </td>
                                                    <td className="text-right" style={{color:'black'}}>+ ₹ {Math.round(totalGst)}</td>
                                                </tr>
                                            )}
                                            {Math.round(totalIgst) > 0 && (
                                                <tr>
                                                    <td> <b style={{color:'black'}}>IGST</b> </td>
                                                    <td className="text-right" style={{color:'black'}}>+ ₹ {Math.round(totalIgst)}</td>
                                                </tr>
                                            )}
                                            {Math.round(totalSgst) > 0 && (
                                                <tr>
                                                    <td> <b style={{color:'black'}}>SGST</b> </td>
                                                    <td className="text-right" style={{color:'black'}}>+ ₹ {Math.round(totalSgst)}</td>
                                                </tr>
                                            )}
                                            <tr>
                                                <td> <b style={{color:'black'}}>Total</b> </td>
                                                <td className="text-right" style={{color:'black'}}>₹ {total}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {cartData?.data?.length <= 0 ? (
                                        <button className="main-btn btn-filled w-100" disabled style={{ pointerEvents: 'none',backgroundColor:'black' }}>
                                            Proceed to Checkout
                                        </button>
                                    ) : (
                                        <Link to="/checkout" className="main-btn btn-filled w-100" style={{ textDecoration: 'none',backgroundColor:'black' }}>
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


// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import img1 from '../../../assets/img/shop/cart-1.png';
// import img2 from '../../../assets/img/shop/cart-2.png';
// import useCart from './useCart';
// import Preloader from '../../layouts/Preloader';
// import { getUserData } from '../../../helper/UserHelper';

// const Content = () => {
//   const { cartData, loading, handleRemoveToCart, updateCartData } = useCart();
//   const navigate = useNavigate();

//   // Calculate totals
//   const totalPrice = cartData?.data?.reduce((acc, item) => acc + item?.product?.mrp * item?.qty, 0);
//   const totalDiscount = cartData?.data?.reduce((acc, item) => acc + (item?.product?.mrp - item?.product?.price) * item?.qty, 0);
//   const extraDiscount = cartData?.data?.reduce((acc, item) => {
//     return item?.product?.discount
//       ? acc + ((item?.product?.discount * item?.product?.mrp) / 100) * item?.qty
//       : acc;
//   }, 0);

//   const gstData = cartData?.data?.map((item) => {
//     const product = item?.product;
//     const gstRate = parseFloat(product?.gst || 0) / 100;
//     const sgstRate = parseFloat(product?.sgst || 0) / 100;
//     const igstRate = parseFloat(product?.igst || 0) / 100;

//     return {
//       ...product,
//       gstAmount: product?.price * gstRate,
//       sgstAmount: product?.price * sgstRate,
//       igstAmount: product?.price * igstRate,
//     };
//   });

//   const calculateTotalTax = (key) =>
//     gstData?.reduce((total, item) => {
//       const cartItem = cartData?.data?.find((cart) => cart?.product?._id === item?._id);
//       return total + (parseFloat(item?.[key] || 0) * (cartItem?.qty || 0));
//     }, 0);

//   const totalGst = calculateTotalTax('gstAmount');
//   const totalIgst = calculateTotalTax('igstAmount');
//   const totalSgst = calculateTotalTax('sgstAmount');

//   const total = totalPrice - Math.round(extraDiscount) - totalDiscount + Math.round(totalGst || totalIgst + totalSgst);

//   // Redirect if user not logged in
//   useEffect(() => {
//     if (!getUserData()) navigate('/login');
//   }, [navigate]);

//   return (
//     <section className="cart-section pt-120 pb-120">
//       {loading && <Preloader />}
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="w-100 table-responsive mb-60">
//               <table className="table cw-cart-table mb-0">
//                 <thead>
//                   <tr>
//                     <th />
//                     <th className="product-name">Product</th>
//                     <th className="product-qty">Quantity</th>
//                     <th className="product-price">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartData?.data?.map((item, i) => (
//                     <tr key={i}>
//                       <td className="text-center">
//                         <Link onClick={() => handleRemoveToCart(item?.product)}>
//                           <i className="fas fa-times text-dark" />
//                         </Link>
//                       </td>
//                       <td>
//                         <div className="product-thumbnail">
//                           <img src={item?.product?.image?.[0]?.path || img1} alt="product_thumbnail" />
//                         </div>
//                         <Link to="/shop-detail" state={{ product: item?.product }} className="text-dark">
//                           {item?.product?.name}
//                         </Link>
//                       </td>
//                       <td>
//                         <div className="quantity-box d-flex align-items-center">
//                           <button type="button" onClick={() => updateCartData(item, false)} className="btn btn-outline-dark btn-sm">
//                             <i className="fal fa-minus" />
//                           </button>
//                           <input type="text" className="mx-2 form-control form-control-sm text-center" value={item?.qty} readOnly />
//                           <button type="button" onClick={() => updateCartData(item, true)} className="btn btn-outline-dark btn-sm">
//                             <i className="fal fa-plus" />
//                           </button>
//                         </div>
//                       </td>
//                       <td>₹ {item?.total}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//                 <tfoot>
//                   <tr>
//                     <td colSpan={4}>
//                       <button onClick={() => navigate('/shop-left')} className="btn btn-dark float-left">
//                         Continue Shopping
//                       </button>
//                     </td>
//                   </tr>
//                 </tfoot>
//               </table>
//             </div>

//             <div className="row">
//               <div className="offset-lg-6 col-lg-6">
//                 <table className="table table-borderless">
//                   <tbody>
//                     <tr>
//                       <td><strong>Price ({cartData?.data?.length} items)</strong></td>
//                       <td className="text-right">₹ {totalPrice}</td>
//                     </tr>
//                     <tr>
//                       <td><strong>Discount</strong></td>
//                       <td className="text-right">- ₹ {totalDiscount}</td>
//                     </tr>
//                     {extraDiscount > 0 && (
//                       <tr>
//                         <td><strong>Extra Discount</strong></td>
//                         <td className="text-right">- ₹ {Math.round(extraDiscount)}</td>
//                       </tr>
//                     )}
//                     {totalGst > 0 && (
//                       <tr>
//                         <td><strong>GST</strong></td>
//                         <td className="text-right">+ ₹ {Math.round(totalGst)}</td>
//                       </tr>
//                     )}
//                     {totalIgst > 0 && (
//                       <tr>
//                         <td><strong>IGST</strong></td>
//                         <td className="text-right">+ ₹ {Math.round(totalIgst)}</td>
//                       </tr>
//                     )}
//                     {totalSgst > 0 && (
//                       <tr>
//                         <td><strong>SGST</strong></td>
//                         <td className="text-right">+ ₹ {Math.round(totalSgst)}</td>
//                       </tr>
//                     )}
//                     <tr>
//                       <td><strong>Total</strong></td>
//                       <td className="text-right">₹ {total}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 {cartData?.data?.length <= 0 ? (
//                   <button className="btn btn-dark w-100" disabled>
//                     Proceed to Checkout
//                   </button>
//                 ) : (
//                   <Link to="/checkout" className="btn btn-dark w-100">
//                     Proceed to Checkout
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Content;
