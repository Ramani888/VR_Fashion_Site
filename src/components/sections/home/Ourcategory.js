import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import img1 from "../../../assets/img/shop/01.jpg";
import img2 from "../../../assets/img/shop/02.jpg";
import img3 from "../../../assets/img/shop/03.jpg";
import useHome from "./useHome";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Preloader from '../../layouts/Preloader';

const ringsposts = [
  { img: img3, discount: 10, title: "Diamond Ring.", price: 890 },
  { img: img1, discount: 15, title: "Stud Earrings ", price: 580 },
  { img: img2, discount: 40, title: "Ankle Bracelet", price: 290 },
  { img: img3, discount: 10, title: "Diamond Ring.", price: 890 },
];

const earingposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const necklessposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const braceletposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const armletsposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const ankletsposts = [
  { img: img1, discount: 15, title: "Ankle Bracelet", price: 390 },
  { img: img2, discount: "", title: "Stud Earrings", price: 290 },
  { img: img3, discount: 10, title: "Crumpled Ring", price: 450 },
  { img: img1, discount: 15, title: "Golden Pendant", price: 780 },
];

const Ourcategory = () => {
  const {
    categoryData,
    loading
  } = useHome();

  const history = useHistory();

  // Function to handle navigation
  const handleNavigation = (path, category) => {
    history.push(path, category); // Use history.push() for navigation
  };

  return (
    <section className="restaurant-tab-area pb-70">
      {loading && <Preloader />}
      <div className="container-fluid">
        <div className="section-title mb-50">
          <span className="title-tag"> Categories </span>
          <h2>Our Categories</h2>
        </div>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {categoryData?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  margin: '0 10px',
                  cursor: 'pointer',
                }}
                onClick={() => handleNavigation("/classification", item)}
              >
                <div 
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginBottom: '10px',
                  }}
                >
                  <img
                    src={item?.imagePath}
                    alt={item?.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover', // Ensures the image is properly cropped
                      objectPosition: 'center',
                    }}
                  />
                </div>
                <span style={{width: '100%', overflow: 'hidden', whiteSpace: 'wrap', textAlign: 'center'}} className="title">{item?.name}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )

  // return (
  //   <section className="restaurant-tab-area pb-90">
  //     {loading && <Preloader />}
  //     <div className="container">
  //       <div className="section-title mb-50">
  //         <span className="title-tag"> Categories </span>
  //         <h2>Our Categories</h2>
  //       </div>
  //       <Tab.Container defaultActiveKey="earrings">
  //         <Nav
  //           variant="pills"
  //           className="restaurant-rood-list row justify-content-center mb-30"
  //         >
  //           {categoryData?.map((item) => {
  //             return (
  //               <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6" onClick={() => handleNavigation("/classification", item)}>
  //                 <Nav.Link eventKey={item?.name}>
  //                   {/* <i className="flaticon-ring" /> */}
  //                   <img
  //                     src={item?.imagePath}
  //                     alt="images"
  //                     // className="flaticon-ring"
  //                     className="category-image"
  //                   />
  //                   <span className="title">{item?.name}</span>
  //                 </Nav.Link>
  //               </Nav.Item>
  //             )
  //           })}
  //           {/* <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
  //             <Nav.Link eventKey="earrings">
  //               <i className="flaticon-earrings" />
  //               <span className="title">Earrings</span>
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
  //             <Nav.Link eventKey="necklaces">
  //               <i className="flaticon-necklace" />
  //               <span className="title">Necklaces</span>
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
  //             <Nav.Link eventKey="bracelets">
  //               <i className="flaticon-bracelet-2" />
  //               <span className="title">Bracelets</span>
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
  //             <Nav.Link eventKey="armlets">
  //               <i className="flaticon-bracelet" />
  //               <span className="title">Armlets</span>
  //             </Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
  //             <Nav.Link eventKey="anklets">
  //               <i className="flaticon-bracelet-1" />
  //               <span className="title">Anklets</span>
  //             </Nav.Link>
  //           </Nav.Item> */}
  //         </Nav>
  //         {/* <Tab.Content>
  //           <Tab.Pane eventKey="rings">
  //             <div className="row">
  //               {ringsposts.map((item, i) => (
  //                 <div key={i} className="col-lg-3 col-md-6">
  //                   <div className="food-box shop-box">
  //                     <div className="thumb">
  //                       <img src={item.img} alt="images" />
  //                       <div className="badges">
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price">Sale</span>
  //                         ) : (
  //                           ""
  //                         )}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price discounted">
  //                             -{item.discount}%
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </div>
  //                       <div className="button-group">
  //                         <Link to="#">
  //                           <i className="far fa-heart" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-sync-alt" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-eye" />
  //                         </Link>
  //                       </div>
  //                     </div>
  //                     <div className="desc">
  //                       <h4>
  //                         <Link to="/shop-detail">{item.title}</Link>
  //                       </h4>
  //                       <span className="price">
  //                         ${item.price}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span>
  //                             {" "}
  //                             ${Math.ceil(
  //                               item.price * (item.discount / 100)
  //                             )}{" "}
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </span>
  //                       <Link to="/shop-detail" className="link">
  //                         <i className="fal fa-arrow-right" />
  //                       </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </Tab.Pane>
  //           <Tab.Pane eventKey="earrings">
  //             <div className="row">
  //               {earingposts.map((item, i) => (
  //                 <div key={i} className="col-lg-3 col-md-6">
  //                   <div className="food-box shop-box">
  //                     <div className="thumb">
  //                       <img src={item.img} alt="images" />
  //                       <div className="badges">
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price">Sale</span>
  //                         ) : (
  //                           ""
  //                         )}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price discounted">
  //                             -{item.discount}%
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </div>
  //                       <div className="button-group">
  //                         <Link to="#">
  //                           <i className="far fa-heart" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-sync-alt" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-eye" />
  //                         </Link>
  //                       </div>
  //                     </div>
  //                     <div className="desc">
  //                       <h4>
  //                         <Link to="/shop-detail">{item.title}</Link>
  //                       </h4>
  //                       <span className="price">
  //                         ${item.price}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span>
  //                             {" "}
  //                             ${Math.ceil(
  //                               item.price * (item.discount / 100)
  //                             )}{" "}
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </span>
  //                       <Link to="/shop-detail" className="link">
  //                         <i className="fal fa-arrow-right" />
  //                       </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </Tab.Pane>
  //           <Tab.Pane eventKey="necklaces">
  //             <div className="row">
  //               {necklessposts.map((item, i) => (
  //                 <div key={i} className="col-lg-3 col-md-6">
  //                   <div className="food-box shop-box">
  //                     <div className="thumb">
  //                       <img src={item.img} alt="images" />
  //                       <div className="badges">
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price">Sale</span>
  //                         ) : (
  //                           ""
  //                         )}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price discounted">
  //                             -{item.discount}%
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </div>
  //                       <div className="button-group">
  //                         <Link to="#">
  //                           <i className="far fa-heart" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-sync-alt" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-eye" />
  //                         </Link>
  //                       </div>
  //                     </div>
  //                     <div className="desc">
  //                       <h4>
  //                         <Link to="/shop-detail">{item.title}</Link>
  //                       </h4>
  //                       <span className="price">
  //                         ${item.price}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span>
  //                             {" "}
  //                             ${Math.ceil(
  //                               item.price * (item.discount / 100)
  //                             )}{" "}
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </span>
  //                       <Link to="/shop-detail" className="link">
  //                         <i className="fal fa-arrow-right" />
  //                       </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </Tab.Pane>
  //           <Tab.Pane eventKey="bracelets">
  //             <div className="row">
  //               {braceletposts.map((item, i) => (
  //                 <div key={i} className="col-lg-3 col-md-6">
  //                   <div className="food-box shop-box">
  //                     <div className="thumb">
  //                       <img src={item.img} alt="images" />
  //                       <div className="badges">
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price">Sale</span>
  //                         ) : (
  //                           ""
  //                         )}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price discounted">
  //                             -{item.discount}%
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </div>
  //                       <div className="button-group">
  //                         <Link to="#">
  //                           <i className="far fa-heart" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-sync-alt" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-eye" />
  //                         </Link>
  //                       </div>
  //                     </div>
  //                     <div className="desc">
  //                       <h4>
  //                         <Link to="/shop-detail">{item.title}</Link>
  //                       </h4>
  //                       <span className="price">
  //                         ${item.price}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span>
  //                             {" "}
  //                             ${Math.ceil(
  //                               item.price * (item.discount / 100)
  //                             )}{" "}
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </span>
  //                       <Link to="/shop-detail" className="link">
  //                         <i className="fal fa-arrow-right" />
  //                       </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </Tab.Pane>
  //           <Tab.Pane eventKey="armlets">
  //             <div className="row">
  //               {armletsposts.map((item, i) => (
  //                 <div key={i} className="col-lg-3 col-md-6">
  //                   <div className="food-box shop-box">
  //                     <div className="thumb">
  //                       <img src={item.img} alt="images" />
  //                       <div className="badges">
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price">Sale</span>
  //                         ) : (
  //                           ""
  //                         )}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price discounted">
  //                             -{item.discount}%
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </div>
  //                       <div className="button-group">
  //                         <Link to="#">
  //                           <i className="far fa-heart" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-sync-alt" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-eye" />
  //                         </Link>
  //                       </div>
  //                     </div>
  //                     <div className="desc">
  //                       <h4>
  //                         <Link to="/shop-detail">{item.title}</Link>
  //                       </h4>
  //                       <span className="price">
  //                         ${item.price}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span>
  //                             {" "}
  //                             ${Math.ceil(
  //                               item.price * (item.discount / 100)
  //                             )}{" "}
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </span>
  //                       <Link to="/shop-detail" className="link">
  //                         <i className="fal fa-arrow-right" />
  //                       </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </Tab.Pane>
  //           <Tab.Pane eventKey="anklets">
  //             <div className="row">
  //               {ankletsposts.map((item, i) => (
  //                 <div key={i} className="col-lg-3 col-md-6">
  //                   <div className="food-box shop-box">
  //                     <div className="thumb">
  //                       <img src={item.img} alt="images" />
  //                       <div className="badges">
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price">Sale</span>
  //                         ) : (
  //                           ""
  //                         )}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span className="price discounted">
  //                             -{item.discount}%
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </div>
  //                       <div className="button-group">
  //                         <Link to="#">
  //                           <i className="far fa-heart" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-sync-alt" />
  //                         </Link>
  //                         <Link to="#">
  //                           <i className="far fa-eye" />
  //                         </Link>
  //                       </div>
  //                     </div>
  //                     <div className="desc">
  //                       <h4>
  //                         <Link to="/shop-detail">{item.title}</Link>
  //                       </h4>
  //                       <span className="price">
  //                         ${item.price}
  //                         {item.discount > 0 || item.discount !== "" ? (
  //                           <span>
  //                             {" "}
  //                             ${Math.ceil(
  //                               item.price * (item.discount / 100)
  //                             )}{" "}
  //                           </span>
  //                         ) : (
  //                           ""
  //                         )}
  //                       </span>
  //                       <Link to="/shop-detail" className="link">
  //                         <i className="fal fa-arrow-right" />
  //                       </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </Tab.Pane>
  //         </Tab.Content> */}
  //       </Tab.Container>
  //     </div>
  //   </section>
  // );
};

export default Ourcategory;
