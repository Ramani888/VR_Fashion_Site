import React, { useState } from "react";
import "./LoginPopup.css";

const CustomeLoginPopup = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("state:", state);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-header">
          <h2>Login</h2>
        </div>
        <div className="popup-body">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Mobile No.</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="input-group">
              <label>State</label>
              <input
                type="State"
                placeholder="Enter your State"
                value={state}
                onChange={handleStateChange}
                required
              />
            </div>

            <div className="input-group">
              <label>City</label>
              <input
                type="password"
                placeholder="Enter your city"
                value={city}
                onChange={handleCityChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Pincode</label>
              <input
                type="pincode"
                placeholder="Enter your pincode"
                value={pincode}
                onChange={handlePincodeChange}
                required
              />
            </div>
            <button
              type="submit"
              className="login-button"
              style={{ marginTop: "15px" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomeLoginPopup;
