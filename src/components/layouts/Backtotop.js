import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Backtotop = () => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const backtotop = isTop ? "active" : "";

  return (
    <Link
      to="#"
      className={`back-to-top ${backtotop}`}
      id="backToTop"
      onClick={scrollToTop}
    >
      <i className="fal fa-angle-double-up" />
    </Link>
  );
};

export default Backtotop;
