// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import { Tab, Nav } from "react-bootstrap";
// import useShopDetail from "./useShopDetail";

// const Shopinfo = ({ product }) => {
//     // console.log('00000000000',product)
//   const {
//     productData,
//     categoryData,
//     handleCart,
//     handleChange,
//     IncrementItem,
//     DecreaseItem,
//     clicks
//   } = useShopDetail(product)
//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);
//   // const [clicks, setClicks] = useState(1);

//   const slider1 = useRef(null);
//   const slider2 = useRef(null);

//   useEffect(() => {
//     setNav1(slider1.current);
//     setNav2(slider2.current);
//   }, []);

//   const settings = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: false,
//     infinite: true,
//     autoplay: false,
//     arrows: false,
//     dots: false,
//   };


//     const settings2 = {
//         slidesToShow: Math.min(productData?.image?.length || 1, 5),
//         slidesToScroll: 1,
//         fade: false,
//         infinite: true,
//         autoplay: false,
//         arrows: false,
//         dots: false,
//         focusOnSelect: true,
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: Math.min(productData?.image?.length || 1, 4),
//             },
//         }],
//     };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <section className="Shop-section pt-120 pb-20">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-5">
//             <div className="shop-detail-image">
//               <Slider
//                 // className="detail-slider-1"
//                 {...settings}
//                 asNavFor={nav2}
//                 ref={slider1}
//               >
//                 {productData?.image?.map((item, i) => (
//                   <div key={i} className="slide-item">
//                     <div className="image-box" style={{ height: '500px' }}>
//                       <Link>
//                         <img src={item?.path} className="img-fluid" alt="img" />
//                       </Link>
//                       {/* <span className="price">{item.tag}</span> */}
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//               <div className="mt-2">
//               <Slider
//                 // className="detail-slider-2"
//                 {...settings2}
//                 asNavFor={nav1}
//                 ref={slider2}
//               >
//                 {productData?.image?.map((item, i) => (
//                   <div key={i} className="slide-item" style={{display:'inline-block'}}>
//                     <div className="image-box" style={{ height: '100px' }}>
//                       <img src={item?.path} className="img-fluid" alt="img" />
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-7">
//             <div className="shop-detail-content">
//               <h3 className="product-title mb-10">
//                 {productData?.name}
//               </h3>
//               <div className="desc mb-10 pb-10 border-bottom">
//                 <span className="price">
//                   ₹{productData?.price}{" "}
//                   <span>₹{productData?.mrp}</span>
//                 </span>
//               </div>
//               <div className="mt-10 mb-20">
//                 <div className="d-inline-block other-info">
//                   <h6>
//                     Availability:
//                     <span className="text-success ml-5">In Stock</span>
//                   </h6>
//                 </div>
//               </div>
//               <div className="short-descr mb-10">
//                 <p>{productData?.description}</p>
//               </div>
//               {productData?.productColorCode && (
//                 <div className="color-sec mb-10">
//                   <label>Color</label>
//                   <div className="color-box">
//                     <label className="m-0">
//                       <input 
//                         type="radio" 
//                         name="color" 
//                         value={productData.productColorCode} 
//                       />
//                       <span 
//                         className={`choose-color ${productData.productColorCode}`} 
//                         style={{ backgroundColor: productData.productColorCode }} 
//                       />
//                     </label>
//                   </div>
//                 </div>
//               )}
//               {productData?.productColorName && (
//                 <div className="color-sec mb-10">
//                   <label>Material</label>
//                   <div className="color-box">
//                     <label className="m-0">
//                       <input type="radio" name="material" value={productData?.productColorName} defaultChecked />
//                       <span className="choose-material">{productData?.productColorName}</span>
//                     </label>
//                   </div>
//                 </div>
//               )}
//               <div className="quantity-cart d-block d-sm-flex">
//                 <div className="quantity-box">
//                   <button
//                     type="button"
//                     className="minus-btn"
//                     onClick={DecreaseItem}
//                   >
//                     <i className="fal fa-minus" />
//                   </button>
//                   <input
//                     type="text"
//                     className="input-qty"
//                     name="name"
//                     value={clicks}
//                     onChange={handleChange}
//                     readOnly
//                   />
//                   <button
//                     type="button"
//                     className="plus-btn"
//                     onClick={IncrementItem}
//                   >
//                     <i className="fal fa-plus" />
//                   </button>
//                 </div>
//                 <div className="cart-btn pl-40">
//                   <Link onClick={() => handleCart(productData)} className="main-btn btn-border">
//                     {productData?.isCart ? 'View in Cart' : 'Add to Cart'}
//                   </Link>
//                 </div>
//               </div>
//               <div className="other-info flex mt-20">
//                 <h6>Category:</h6>
//                 <ul>
//                   <li className="list-inline-item mr-2">
//                     <Link to="#" className="grey">
//                       {categoryData?.name}
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="other-info flex mt-20">
//                 <h6>Code:</h6>
//                 <ul>
//                   <li className="list-inline-item mr-2">
//                     <Link to="#" className="grey">
//                       {productData?.code}
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="col-12">
//             <div className="product-description mt-40">
//               <Tab.Container defaultActiveKey="addinfo">
//                 <div className="tabs">
//                   <Nav variant="tabs" className="justify-content-center">
//                     <Nav.Item>
//                       <Nav.Link eventKey="description">Description</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="addinfo">Additional Info</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content>
//                     <Tab.Pane eventKey="description">
//                       <p>
//                         {productData?.description}
//                       </p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="addinfo" className="additional-info">
//                       <div>
//                         <h3 className="text-white mb-20">
//                           Additional Information
//                         </h3>
//                         <table className="table">
//                           <thead>
//                             <tr>
//                               <th>Attributes</th>
//                               <th>Values</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td>
//                                 <b>Base Metal</b>
//                               </td>
//                               <td className="value">{productData?.productBaseMetalName}</td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <b>Brand</b>
//                               </td>
//                               <td className="value">{productData?.productBrandName}</td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <b>Color Code</b>
//                               </td>
//                               <td className="value">{productData?.productColorCode}</td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <b>Color Name</b>
//                               </td>
//                               <td className="value">{productData?.productColorName}</td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <b>Occasion</b>
//                               </td>
//                               <td className="value">{productData?.productOccasionName}</td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <b>Plating</b>
//                               </td>
//                               <td className="value">{productData?.productPlatingName}</td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <b>Stone Type</b>
//                               </td>
//                               <td className="value">{productData?.productStoneTypeName}</td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <b>Trend</b>
//                               </td>
//                               <td className="value">{productData?.productTrendName}</td>
//                             </tr>
//                             <tr>
//                               <td>
//                                 <b>Weight</b>
//                               </td>
//                               <td className="value">{productData?.weight}</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </div>
//               </Tab.Container>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Shopinfo;




import React, { useState, useEffect, useRef } from "react";
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

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
        window.scrollTo(0, 0); // Ensure the page scrolls to the top on load
    }, []);

    // Slider settings
    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        arrows: false,
        dots: false,
        asNavFor: nav2,
    };

    const thumbnailSliderSettings = {
        slidesToShow: Math.min(productData?.image?.length || 1, 5),
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(productData?.image?.length || 1, 4),
                },
            },
        ],
        asNavFor: nav1,
    };

    return (
        <section className="Shop-section pt-120 pb-20">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Product Images */}
                    <div className="col-lg-5">
                        <div className="shop-detail-image">
                            <Slider {...mainSliderSettings} ref={slider1}>
                                {productData?.image?.map((item, i) => (
                                    <div key={i} className="slide-item">
                                        <div className="image-box" style={{ height: "500px" }}>
                                            <Link>
                                                <img
                                                    src={item?.path || "/default-image.jpg"}
                                                    className="img-fluid"
                                                    alt={`Product Image ${i + 1}`}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <Slider {...thumbnailSliderSettings} ref={slider2} >
                                {productData?.image?.map((item, i) => (
                                    <div key={i} className="slide-item">
                                        <div className="image-box" style={{ height: "100px" }}>
                                            <img
                                                src={item?.path || "/default-thumbnail.jpg"}
                                                className="img-fluid"
                                                alt={`Thumbnail ${i + 1}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="col-lg-7">
                        <div className="shop-detail-content">
                            <h3 className="product-title mb-10">{productData?.name || "Product Name"}</h3>
                            <div className="desc mb-10 pb-10 border-bottom">
                                <span className="price">
                                    ₹{productData?.price || "0"}{" "}
                                    <span>₹{productData?.mrp || "0"}</span>
                                </span>
                            </div>
                            <div className="mt-10 mb-20">
                                <div className="d-inline-block other-info">
                                    <h6>
                                        Availability:
                                        <span className="text-success ml-5">
                                            {productData?.availability ? "In Stock" : "Out of Stock"}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                            <div className="short-descr mb-10">
                                <p>{productData?.description || "No description available."}</p>
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
                                        <i className="fal fa-plus" />
                                    </button>
                                </div>
                                <div className="cart-btn pl-40">
                                    <Link
                                        onClick={() => handleCart(productData)}
                                        className="main-btn btn-border"
                                    >
                                        {productData?.isCart ? "View in Cart" : "Add to Cart"}
                                    </Link>
                                </div>
                            </div>

                            {/* Category and Code */}
                            <div className="other-info flex mt-20">
                                <h6>Category:</h6>
                                <ul>
                                    <li>
                                        <Link to="#" className="grey">
                                            {categoryData?.name || "Uncategorized"}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="other-info flex mt-20">
                                <h6>Code:</h6>
                                <ul>
                                    <li>
                                        <Link to="#" className="grey">
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
                            <Tab.Container defaultActiveKey="description">
                                <Nav variant="tabs" className="justify-content-center">
                                    <Nav.Item>
                                        <Nav.Link eventKey="description">Description</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="addinfo">Additional Info</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="description">
                                        <p>{productData?.description || "No description available."}</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="addinfo">
                                        <h3 className="mb-2">Additional Information</h3>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th>Price</th>
                                                    <td>₹{productData?.price || "0"} (MRP: ₹{productData?.mrp || "0"})</td>
                                                </tr>
                                                <tr>
                                                    <th>Availability</th>
                                                    {console.log('productData?.availability',productData?.availability)}
                                                    <td>
                                                        {productData?.availability ? (
                                                            <span className="text-success">In Stock</span>
                                                        ) : (
                                                            <span className="text-danger">Out of Stock</span>
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Description</th>
                                                    <td>{productData?.description || "No description available."}</td>
                                                </tr>
                                                <tr>
                                                    <th>Category</th>
                                                    <td>{categoryData?.name || "Uncategorized"}</td>
                                                </tr>
                                                <tr>
                                                    <th>Code</th>
                                                    <td>{productData?.code || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th>Base Metal</th>
                                                    <td>{productData?.productBaseMetalName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th>Brand</th>
                                                    <td>{productData?.productBrandName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th>Color</th>
                                                    <td>
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
                                                    <th>Material</th>
                                                    <td>{productData?.productColorName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th>Occasion</th>
                                                    <td>{productData?.productOccasionName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th>Plating</th>
                                                    <td>{productData?.productPlatingName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th>Stone Type</th>
                                                    <td>{productData?.productStoneTypeName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th>Trend</th>
                                                    <td>{productData?.productTrendName || "N/A"}</td>
                                                </tr>
                                                <tr>
                                                    <th>Weight</th>
                                                    <td>{productData?.weight || "N/A"}</td>
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
