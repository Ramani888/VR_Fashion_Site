import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap"; // Using react-bootstrap for modal
import { StateData } from "../../helper/RegisterHelper";
import { serverRegisterLogin } from "../../services/serverApi";
import { useLocation, useNavigate } from "react-router-dom";

const LoginDialog = ({ open, closeDialog, openDialog }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: "",
    state: "",
    city: "",
    pinCode: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await serverRegisterLogin({...formData, country: 'India'});
      if (res?.userDataAndToken) {
        localStorage.setItem('user', JSON.stringify(res?.userDataAndToken));
        navigate(location?.pathname === '/login' ? '/' : location?.pathname)
      }
      closeDialog();
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle dialog state properly when switching pages
  useEffect(() => {
    const body = document.querySelector("body");
    if (open) {
      body.style.overflow = "hidden"; // Prevent body scrolling when modal is open
    } else {
      body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    }
  }, [open]);

  return (
    <Modal
      show={open}
      className="on-load-modal"
      onHide={closeDialog}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        className="modal-content"
      >
        <Modal.Header>
          <button type="button" className="close" onClick={closeDialog} style={{ background: '#1d1b19', border: 'none' }}>
            <span aria-hidden="true">×</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-inner">
            <h3 className="title">Login to Your Account</h3>
            <form onSubmit={handleSubmit}>
              {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ color: '#ffffff', textAlign: 'left' }}>Email Address</label>
                <input
                  type="number"
                  id="mobileNumber"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={String()}
                  onChange={(e) => {}}
                  required
                  className="form-control"
                />
              </div> */}
              <div className="input-group input-group-two mb-20">
                <input
                  type="number"
                  placeholder="Enter Mobile Number"
                  name="mobileNumber"
                  onChange={handleInputChange}
                  value={formData?.mobileNumber}
                  required
                />
              </div>
              <div className="input-group input-group-two mb-20">
                <select name="state" className="nice-select" required onChange={handleInputChange} value={formData?.state}>
                  <option disabled>Select State</option>
                  {StateData?.map((item) => {
                    return (
                      <option value={item?.name}>{item?.name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="input-group input-group-two mb-20">
                <input
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  onChange={handleInputChange}
                  value={formData?.city}
                  required
                />
              </div>
              <div className="input-group input-group-two mb-20">
                <input
                  type="number"
                  placeholder="Enter Pincode"
                  name="pinCode"
                  onChange={handleInputChange}
                  value={formData?.pinCode}
                  required
                />
              </div>
              {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ color: '#ffffff', textAlign: 'left' }}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  value={''}
                  onChange={(e) => {}}
                  required
                  className="form-control"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ color: '#ffffff', textAlign: 'left' }}>Email Address</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={''}
                  onChange={(e) => {}}
                  required
                  className="form-control"
                />
              </div> */}
              <button
                type="submit"
                className="main-btn btn-filled"
                name="button"
              >
                Login
              </button>
            </form>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default LoginDialog;


