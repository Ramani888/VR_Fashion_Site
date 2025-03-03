// import React from "react";
// import useHome from "./useHome";
// import { useNavigate } from "react-router-dom";
// import Preloader from '../../layouts/Preloader';

// const Ourcategory = () => {
//   const {
//     categoryData,
//     loading
//   } = useHome();

//   const navigate = useNavigate();

//   // Function to handle navigation
//   const handleNavigation = (path, category) => {
//     navigate(path, {state: { category: category }}); // Use history.push() for navigation
//   };

//   return (
//     <section className="restaurant-tab-area mb-50" style={{ backgroundColor: "white" }}>
//       {loading && <Preloader />}
//       <div className="container-fluid">
//         <div className="section-title mb-10">
//           <span className="title-tag" style={{color:'black'}}> Categories </span>
//           {/* <h2>Our Categories</h2> */}
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             overflowX: 'auto',
//             whiteSpace: 'nowrap',
//              backgroundColor: "white"
//           }}
//           className="no-scrollbar"
//         >
//           {categoryData?.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 style={{
//                   display: 'inline-flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   margin: '0 10px',
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => handleNavigation("/classification", item)}
//               >
//                 <div
//                   style={{
//                     width: '100px',
//                     height: '100px',
//                     borderRadius: '50%',
//                     marginBottom: '10px',
//                   }}
//                 >
//                   <img
//                     src={item?.imagePath}
//                     alt={item?.name}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       borderRadius: '50%',
//                       objectFit: 'cover', // Ensures the image is properly cropped
//                       objectPosition: 'center',
//                     }}
//                   />
//                 </div>
//                 <span style={{width: '100%', overflow: 'hidden', whiteSpace: 'wrap', textAlign: 'center',color:'black'}} className="title">{item?.name}</span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   )
// };

// export default Ourcategory;

import React, { useState, useEffect, useRef, useCallback } from "react";
import useHome from "./useHome";
import { useNavigate } from "react-router-dom";
import Preloader from "../../layouts/Preloader";

const Ourcategory = () => {
  const { categoryData, loading } = useHome();
  const navigate = useNavigate();

  const ITEMS_PER_LOAD = 5; // Load 5 categories at a time
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [count, setCount] = useState(ITEMS_PER_LOAD);
  const observer = useRef(null);

  useEffect(() => {
    setVisibleCategories(categoryData?.slice(0, count) || []);
  }, [categoryData, count]);

  const loadMore = () => {
    setCount((prev) => prev + ITEMS_PER_LOAD);
  };

  // Intersection Observer to detect when last item is visible
  const lastCategoryRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const handleNavigation = (path, category) => {
    navigate(path, { state: { category } });
  };

  return (
    <section
      className="restaurant-tab-area mb-30"
      style={{ backgroundColor: "white" }}
    >
      {loading && <Preloader />}
      <div className="container-fluid">
        <div className="section-title mb-10">
          <span className="title-tag" style={{ color: "black" }}>
            Categories
          </span>
        </div>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            whiteSpace: "nowrap",
            backgroundColor: "white",
          }}
          className="no-scrollbar"
        >
          {visibleCategories.map((item, index) => (
            <div
              key={index}
              ref={
                index === visibleCategories.length - 1 ? lastCategoryRef : null
              }
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 10px",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("/classification", item)}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={item?.imagePath}
                  alt={item?.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <span
                style={{
                  width: "100%",
                  overflow: "hidden",
                  whiteSpace: "wrap",
                  textAlign: "center",
                  color: "black",
                }}
                className="title"
              >
                {item?.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourcategory;
