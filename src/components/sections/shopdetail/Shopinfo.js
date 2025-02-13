import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Tab, Nav } from "react-bootstrap";
import useShopDetail from "./useShopDetail";

const Shopinfo = ({ product }) => {
    const {
        productData = {}, // Provide a default empty object to prevent crashes
        categoryData = {},
        handleCart,
        handleChange,
        IncrementItem,
        DecreaseItem,
        clicks,
    } = useShopDetail(product);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    return (
        <section className="Shop-section pt-120 pb-20">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Product Images */}
                    <div className="col-lg-5">
                        <div className="shop-detail-image">
                        <Slider {...settings}>
                            {productData?.image?.map((item, i) => {
                                return (
                                    <div className="image-box" style={{ height: "500px" }}>
                                        <img
                                            src={item?.path || "/default-image.jpg"}
                                            className="img-fluid"
                                            alt={`Product Image ${i + 1}`}
                                        />
                                    </div>
                                )
                            })}
                        </Slider>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="col-lg-7">
                        <div className="shop-detail-content">
                            <h3 className="product-title mb-10" style={{color: 'black'}}>{productData?.name || "Product Name"}</h3>
                            <div className="desc mb-10 pb-10 border-bottom">
                                <span className="price" style={{color: 'black'}}>
                                    ₹{productData?.price || "0"}{" "}
                                    <span >₹{productData?.mrp || "0"}</span>
                                </span>
                            </div>
                            <div className="mt-10 mb-20">
                                <div className="d-inline-block other-info">
                                    <h6 style={{color: 'black'}}>
                                        Availability:
                                        <span className="text-success ml-5" style={{color: 'black'}}>
                                            {productData?.availability ? "In Stock" : "In Stock"}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                            <div className="short-descr mb-10">
                                <p style={{color: 'black'}}>{productData?.description || "No description available."}</p>
                            </div>

                            {/* Product Colors */}
                            {productData?.productColorCode && (
                                <div className="color-sec mb-10">
                                    <label>Color</label>
                                    <div className="color-box">
                                        <label className="m-0">
                                            <input type="radio" name="color" value={productData.productColorCode} />
                                            <span
                                                className="choose-color"
                                                style={{ backgroundColor: productData.productColorCode }}
                                            />
                                        </label>
                                    </div>
                                </div>
                            )}

                            {/* Quantity and Cart */}
                            <div className="quantity-cart d-block d-sm-flex">
                                <div className="quantity-box">
                                    <button type="button" className="minus-btn" onClick={DecreaseItem}>
                                        <i className="fal fa-minus" />
                                    </button>
                                    <input
                                        type="text"
                                        className="input-qty"
                                        name="quantity"
                                        value={clicks}
                                        onChange={handleChange}
                                        readOnly
                                    />
                                    <button type="button" className="plus-btn" onClick={IncrementItem}>
                                        <i className="fal fa-plus text-white" />
                                    </button>
                                </div>
                                <div className="cart-btn pl-40">
                                    <div
                                        onClick={() => handleCart(productData)}
                                        className="main-btn btn-border text-black"
                                    >
                                        {productData?.isCart ? "View in Cart" : "Add to Cart"}
                                    </div>
                                </div>
                            </div>

                            {/* Category and Code */}
                            <div className="other-info flex mt-20">
                                <h6 style={{color: 'black'}}>Category:</h6>
                                <ul>
                                    <li>
                                        <Link className="grey" style={{ textDecoration: 'none' }}>
                                            {categoryData?.name || "Uncategorized"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="other-info flex mt-20">
                                <h6 style={{color: 'black'}}>Code:</h6>
                                <ul>
                                    <li>
                                        <Link className="grey" style={{ textDecoration: 'none' }}>
                                            {productData?.code || "N/A"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Product Tabs */}
                    <div className="col-12">
                        <div className="product-description mt-40">
                            <Tab.Container defaultActiveKey="addinfo">
                                <Nav variant="tabs" className="justify-content-center">
                                    <Nav.Item>
                                        <Nav.Link eventKey="addinfo" style={{color: 'black'}}>Additional Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="description" style={{color: 'black'}}>Description</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="description">
                                        <p>{productData?.description || "No description available."}</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="addinfo" className="additional-info">
                                        <h3 className="mb-2" style={{color: 'black'}}>Additional Information</h3>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th style={{color: 'black'}}>Price</th>
                                                    <td className="value text-black">₹{productData?.price || "0"} (MRP: ₹{productData?.mrp || "0"})</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Availability</th>
                                                    {console.log('productData?.availability',productData?.availability)}
                                                    <td className="value">
                                                        {productData?.availability ? (
                                                            <span className="text-success">In Stock</span>
                                                        ) : (
                                                            <span className="text-success">In Stock</span>
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Description</th>
                                                    <td className="value text-black">{productData?.description || "No description available."}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Category</th>
                                                    <td className="value text-black">{categoryData?.name || "Uncategorized"}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Code</th>
                                                    <td className="value text-black">{productData?.code || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Base Metal</th>
                                                    <td className="value text-black">{productData?.productBaseMetalName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Brand</th>
                                                    <td className="value text-black">{productData?.productBrandName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Color</th>
                                                    <td className="value text-black">
                                                        {productData?.productColorCode ? (
                                                            <span
                                                                style={{
                                                                    display: "inline-block",
                                                                    width: "20px",
                                                                    height: "20px",
                                                                    backgroundColor: productData.productColorCode,
                                                                    borderRadius: "50%",
                                                                }}
                                                            ></span>
                                                        ) : (
                                                            "N/A"
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Material</th>
                                                    <td className="value text-black">{productData?.productColorName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Occasion</th>
                                                    <td className="value text-black">{productData?.productOccasionName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Plating</th>
                                                    <td className="value text-black">{productData?.productPlatingName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Stone Type</th>
                                                    <td className="value text-black">{productData?.productStoneTypeName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Trend</th>
                                                    <td className="value text-black">{productData?.productTrendName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th style={{color: 'black'}}>Weight</th>
                                                    <td className="value text-black">{productData?.weight || "N/A"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shopinfo;
