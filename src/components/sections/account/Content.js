import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import useAccount from "./useAccount";
import Preloader from "../../layouts/Preloader";
import UploadDialog from "../../Custome/UploadDialog/UploadDialog";

const Content = () => {
  const {
    userData,
    loading,
    orderData,
    handleLogout,
    setOpen,
    open,
    showAlert,
    setOrderId,
    orderId
  } = useAccount();

  return (
    <section className="account-sec pt-120 pb-60">
      {loading && <Preloader />}
      <Tab.Container defaultActiveKey="dashboard">
        <div className="container">
          <div className="row order-container">
            <div className="col-lg-12">
              <div className="account-tabs">
                <Nav variant="tabs" style={{ display: 'flex', alignItems: 'center', gap: '20px'}} className="border-0">
                  <Nav.Item style={{marginBottom: '-13px'}}>
                    <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders">Orders</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="logout" onClick={() => handleLogout()}>
                      <i className="fal fa-power-off" /> Logout
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="col-lg-12">
              <Tab.Content>
                <Tab.Pane eventKey="dashboard">
                  <div className="dashboard-content">
                    <p className="text-white mb-30">
                      Hello <b>{userData?.name}</b> (not <b>{userData?.name}</b>?
                      <Link to="/">Log Out</Link>)
                    </p>
                    <p className="text-white">
                      From Your Account Dashboard You can View Your{" "}
                      <Link to="#">Recent Orders</Link>, Manage Your
                      <Link to="#">Shipping and Billing Addresses</Link> and{" "}
                      <Link to="#">Edit Your Password and Account Details</Link>
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="orders">
                  <div>
                    <div className="content-heading mb-50">
                      <h3>My Orders</h3>
                    </div>
                    <div className="order-table" style={{ overflowX: 'auto' }}>
                      <table className="table mb-0" style={{ width: '100%', minWidth: '1000px' }}>
                        <thead>
                          <tr>
                            <th />
                            <th scope="col" className="product-name">Payment Id</th>
                            <th scope="col" className="product-name">Date</th>
                            <th scope="col" className="product-name">Product</th>
                            <th scope="col" className="product-name">Qty</th>
                            <th scope="col" className="product-name">Status</th>
                            <th scope="col" className="product-price">Total Amount</th>
                            <th scope="col" className="product-price">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderData?.length < 1 && (
                            <tr>
                              <td className="product-price text-white cw-align has-title text-center" colSpan={8}>
                                No Data Found
                              </td>
                            </tr>
                          )}
                          {orderData?.map((order, orderIndex) => {
                            return order.productDetails?.map((product, productIndex) => (
                              <tr key={`${order.paymentId}-${productIndex}`}>
                                {productIndex === 0 && (
                                  <>
                                    <td rowSpan={order.productDetails.length} className="product-remove text-center cw-align">
                                      <Link to="#"><i className="fas fa-times" /></Link>
                                    </td>
                                    <td rowSpan={order.productDetails.length} className="product-price text-white cw-align has-title">
                                      {order?.paymentId}
                                    </td>
                                    <td rowSpan={order.productDetails.length} className="product-price text-white cw-align has-title">
                                      {order?.createdAt}
                                    </td>
                                  </>
                                )}
                                <td data-title="Product" className="has-title">
                                  <div className="product-thumbnail">
                                    <img src={product?.product?.image?.[0]?.path} alt="product_thumbnail" />
                                  </div>
                                  <Link to="/shop-detail">{product?.product?.name}</Link>
                                </td>
                                <td className="product-price text-white cw-align has-title">
                                  {product?.qty}
                                </td>
                                {productIndex === 0 && (
                                  <>
                                    <td rowSpan={order.productDetails.length} className="product-price text-white cw-align has-title">
                                      {order?.status}
                                    </td>
                                    <td rowSpan={order.productDetails.length} className="product-price text-white cw-align has-title">
                                      ₹{order.totalAmount}
                                    </td>
                                    <td rowSpan={order.productDetails.length} className="product-price text-white cw-align has-title">
                                      {order?.status === 'Pending' && (
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() => showAlert(order?._id?.toString(), order?.paymentId, order?.totalAmount)}
                                        >
                                          Cancel Order
                                        </button>
                                      )}

                                      {order?.status !== 'Delivered' && order?.trackingDetails && (
                                        <button
                                          className="btn btn-primary btn-sm"
                                          onClick={() => {
                                            setOrderId(order?._id);
                                            setOpen(true);
                                          }}
                                        >
                                          Upload Video/Image
                                        </button>
                                      )}
                                    </td>
                                  </>
                                )}
                              </tr>
                            ));
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="downloads">
                  <div className="content-heading download-content">
                    <h3>You Haven't Downloaded Any Product</h3>
                    <p>
                      You still havent saved any products yet, Go back to the
                      products page and check some of your favorite products
                    </p>
                    <Link
                      to="/shop-left"
                      className="main-btn btn-outline mt-20"
                    >
                      Browse Products
                    </Link>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="addresses">
                  <div className="address-content">
                    <p className="mb-30">
                      The Following Address will Be Used on Checkout Page by
                      Default
                    </p>
                    <div className="extra-info mb-30">
                      <div className="billing-info">
                        <h3>Billing Address</h3>
                        <p>John Benjamin</p>
                      </div>
                      <Link to="#" className="btn-link">
                        Edit
                      </Link>
                    </div>
                    <div className="extra-info">
                      <div className="shipping-info">
                        <h3>Shipping Address</h3>
                        <p>You have not Setup this Type of Address Yet.</p>
                      </div>
                      <Link to="#" className="btn-link">
                        Add
                      </Link>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="acdetails">
                  <div className="profile-content">
                    <div className="content-heading mb-50">
                      <h3>Welcome Back</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <form method="post">
                      <div className="row">
                        <div className="col-lg-6 input-group input-group-two mb-20">
                          <label>
                            First Name
                            <span className="text-danger">*</span>
                          </label>
                          <input type="text" placeholder="John" name="fname" />
                        </div>
                        <div className="col-lg-6 input-group input-group-two mb-20">
                          <label>
                            Last Name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Benjamin"
                            name="lname"
                          />
                        </div>
                        <div className="col-12 input-group input-group-two mb-20">
                          <label>
                            Display Name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="John Benjamin"
                            name="dname"
                          />
                          <p className="mt-2">
                            This is how your Name will be Displayed in the
                            Account Section and Reviews..
                          </p>
                        </div>
                        <div className="col-12 input-group input-group-two mb-20">
                          <label>
                            Email Address
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="abc@email.com"
                            name="email"
                          />
                        </div>
                        <div className="col-12 input-group input-group-two mb-20">
                          <label>
                            Current Password(Leave Blank to Leave Unchanged)
                          </label>
                          <input
                            type="text"
                            placeholder="Current Password"
                            name="c-password"
                          />
                        </div>
                        <div className="col-12 input-group input-group-two mb-20">
                          <label>
                            New Password(Leave Blank to Leave Unchanged)
                          </label>
                          <input
                            type="text"
                            placeholder="New Password"
                            name="n-password"
                          />
                        </div>
                        <div className="col-12 input-group input-group-two mb-20">
                          <label>Confirm New Password</label>
                          <input
                            type="text"
                            placeholder="Confirm Password"
                            name="c-password"
                          />
                        </div>
                      </div>
                      <button type="submit" className="main-btn btn-filled">
                        Save Changes
                      </button>
                    </form>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </div>
      </Tab.Container>

      <UploadDialog isOpen={open} onClose={() => setOpen(false)} orderId={orderId}/>
    </section>
  );
};

export default Content;
