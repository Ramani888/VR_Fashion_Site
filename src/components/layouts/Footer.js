// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

// import logo from "../../assets/img/logo.png";

// const Footer = () => {
//   const [isTop, setIsTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsTop(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const Map = ReactMapboxGl({
//     accessToken:
//       "pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg",
//   });

//   const openInstagram = () => {
//     window.open(
//       "https://www.instagram.com/vr_fashion01?igsh=MWQzOXIzdXNtNTF3Zg==",
//       "_blank"
//     );
//   };

//   const openYouTube = () => {
//     window.open(
//       "https://youtube.com/@pratham3968?si=Wq6qmEEmr_sIzQv-",
//       "_blank"
//     );
//   };

//   const openWhatsApp = () => {
//     const phoneNumber = "8141851456"; 
//     const message = "Hello!"; 
//     window.open(
//       `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

//   return (
//     <footer className="sigma-footer">
//       <div className="sigma-footer-top">
//         <div className="container-fluid">
//           <div className="row no-gutters">
//             <div className="col-lg-8">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="sigma-backto-top">
//                     <Link
//                       to="#"
//                       className="back-to-top"
//                       id="backToTop"
//                       onClick={scrollToTop}
//                     >
//                       <i className="fal fa-chevron-up" /> Back to Top
//                     </Link>
//                   </div>
//                 </div>
//                 {/* <div className="col-lg-6">
//                   <div className="h-100 d-flex align-items-center justify-content-end">
//                     <select className="nice-select">
//                       <option>English</option>
//                       <option>Español</option>
//                     </select>
//                     <select className="nice-select">
//                       <option>USD</option>
//                       <option>GBP</option>
//                       <option>INR</option>
//                     </select>
//                   </div>
//                 </div> */}
//               </div>
//               <div className="sigma-footer-box">
//                 <div className="sigma-footer-box-top">
//                   <div className="ft-logo">
//                     <Link to="/">
//                       <img src={logo} alt="Logo" />
//                     </Link>
//                   </div>
//                   <ul className="ft-social-media">
//                     <li>
//                       <Link to="#" onClick={openWhatsApp}>
//                         <i className="fab fa-whatsapp" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#" onClick={openInstagram}>
//                         <i className="fab fa-instagram" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#" onClick={openYouTube}>
//                         <i className="fab fa-youtube" />
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="sigma-footer-nav">
//                   <ul className="ft-nav">
//                     <li className="menu-item">
//                       <Link to="/">Home</Link>
//                     </li>
//                     <li className="menu-item">
//                       <Link to="/about">About Us</Link>
//                     </li>
//                     {/* <li className="menu-item">
//                       <Link to="/blog-grid">News</Link>
//                     </li>
//                     <li className="menu-item">
//                       <Link to="/gallery">Gallery</Link>
//                     </li> */}
//                     <li className="menu-item">
//                       <Link to="/contact">Contact</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="col-lg-4">
//               <Map
//                 style="mapbox://styles/mapbox/light-v10"
//                 className="contact-maps"
//               >
//                 <Layer
//                   type="symbol"
//                   id="marker"
//                   layout={{ "icon-image": "marker-15" }}
//                 >
//                   <Feature coordinates={[-77.04, 38.907]} zoom={11.5} />
//                 </Layer>
//               </Map>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       <div className="sigma-footer-bottom">
//         <div className="container-fluid">
//           <div className="sigma-footer-bottom-inner">
//             <div className="row no-gutters align-items-end">
//               <div className="col-lg-6">
//                 <div className="sigma-footer-contact">
//                   <ul>
//                     <li>
//                       <i className="flaticon-phone" />
//                       <Link to="tel:">
//                         <span>Phone Number</span> +91 8141851456
//                       </Link>
//                     </li>
//                     <li>
//                       <i className="flaticon-message" />
//                       <Link to="mailto:">
//                         <span>Email Address</span>{" "}
//                         vrfashionjewellery0044@gmail.com
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               {/* <div className="col-lg-3">
//                 <div className="sigma-footer-search">
//                   <form>
//                     <div className="input-group">
//                       <div className="input-group-prepend">
//                         <button>
//                           <i className="fal fa-search" />
//                         </button>
//                       </div>
//                       <input
//                         type="text"
//                         name="#"
//                         className="form-control"
//                         placeholder="Search..."
//                       />
//                     </div>
//                   </form>
//                 </div>
//               </div> */}
//               <div className="col-lg-3">
//                 <div className="sigma-footer-contact style-2">
//                   <ul>
//                     <li>
//                       <i className="flaticon-location-pin" />
//                       <Link to="#">
//                         <span style={{textAlign:'left'}}>Office Address</span> A-34, 2nd Floor Laxmidhara
//                         Complex, Baroda Pristage, Varachha Road, Surat - 395006,
//                         Gujrat, India
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="sigma-copyright">
//         <div className="container-fluid">
//           <div className="sigma-copyright-inner">
//             <div className="row">
//               <div className="col-lg-6 col-md-5 order-2 order-md-1">
//                 <p className="sigma-copyright-text">
//                   Copyright By@<Link to="#">Example</Link> - 2022
//                 </p>
//               </div>
//               <div className="col-lg-6 col-md-7 order-1 order-md-2">
//                 <div className="sigma-copyright-menu">
//                   <ul>
//                     <li>
//                       <Link to="#">Terms of use</Link>
//                     </li>
//                     <li>
//                       <Link to="#">Privacy Environmental Policy</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import logo from "../../assets/img/logo.png";

const Footer = () => {
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg",
    });

    const openInstagram = () => {
        window.open(
            "https://www.instagram.com/vr_fashion01?igsh=MWQzOXIzdXNtNTF3Zg==",
            "_blank"
        );
    };

    const openYouTube = () => {
        window.open(
            "https://youtube.com/@pratham3968?si=Wq6qmEEmr_sIzQv-",
            "_blank"
        );
    };

    const openWhatsApp = () => {
        const phoneNumber = "8141851456";
        const message = "Hello!";
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <footer className="footer bg-dark text-light pt-5 pb-3" style={{ backgroundColor: '#1e1e20' }}>
            <div className="container">
                <div className="row">
                    {/* Logo and About Section */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={logo} alt="Logo" className="mb-3" style={{ width: "150px", marginTop: '10px' }} />
                        <p>Experience the beauty and elegance of fine jewelry with us.</p>
                        <p style={{ marginTop: '10px' }}>&copy; 2025 VR Fashion</p>
                    </div>

                    {/* Useful Links Section */}
                    {/* <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-light">Delivery Info</Link></li>
              <li><Link to="#" className="text-light">International Shipping</Link></li>
              <li><Link to="#" className="text-light">Payment Options</Link></li>
              <li><Link to="#" className="text-light">Returns & Refunds</Link></li>
            </ul>
          </div> */}

                    {/* Contact Information Section */}
                    <div className="col-lg-3 col-md-6 mb-4 ml-30">
                        <h5 className="text-uppercase" style={{ marginBottom: '10px' }}>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li style={{ marginBottom: '10px' }}><i className="fas fa-phone-alt"></i> <Link to="tel:+918141851456" className="text-light">+91 8141851456</Link></li>
                            <li style={{ marginBottom: '10px' }}><i className="fas fa-envelope"></i> <Link to="mailto:vrfashionjewellery0044@gmail.com" className="text-light">vrfashionjewellery0044@gmail.com</Link></li>
                            <li style={{ marginBottom: '10px' }}><i className="fas fa-map-marker-alt"></i> A-34, Laxmidhara Complex, Surat, Gujarat, India</li>
                        </ul>
                    </div>

                    {/* Social Media & Map Section */}
                    <div className="col-lg-4 col-md-6 mb-4 ml-50">
                        <h5 className="text-uppercase" style={{ marginBottom: '10px' }}>Follow Us</h5>
                        <div className="d-flex mb-3 ">
                            <Link to="#" className="text-light me-3"><i className="fab fa-whatsapp fa-2x" onClick={openWhatsApp}></i></Link>
                            <Link to="#" className="text-light me-3"><i className="fab fa-instagram fa-2x" onClick={openInstagram}></i></Link>
                            <Link to="#" className="text-light"><i className="fab fa-youtube fa-2x" onClick={openYouTube}></i></Link>
                        </div>
                        <Map
                            style="mapbox://styles/mapbox/light-v10"
                            containerStyle={{ height: "150px", width: "100%", borderRadius: "10px", overflow: "hidden" }}
                        >
                            <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
                                <Feature coordinates={[-77.04, 38.907]} />
                            </Layer>
                        </Map>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="row mt-4 border-top pt-3">
                    <div className="col-md-6">
                        <p>All rights reserved. | <Link to="#" className="text-light">Terms & Conditions</Link> | <Link to="#" className="text-light">Privacy Policy</Link></p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p>Designed by <Link to="#" className="text-light">Your Company</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

