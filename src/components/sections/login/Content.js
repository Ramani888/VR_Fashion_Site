import React, { useState } from "react";
import { Link } from "react-router-dom";

import loginbg from "../../../assets/img/login.png";
import { apiPost } from "../../Api/ApiService";
import Api from "../../Api/EndPoint";
import { serverLogin } from "../../../services/serverApi";
import { useNavigate } from "react-router-dom";
import Preloader from "../../layouts/Preloader";

const Content = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      setLoading(true);
      const res = await serverLogin(formData);
      if (res?.userDataAndToken) {
        localStorage.setItem('user', JSON.stringify(res?.userDataAndToken));
        navigate('/account');
      }
    } catch (error) {
      console.error("Error fetching trending data:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="login-sec pt-120 pb-120">
      {loading && <Preloader />}
      <div className="container">
        <div className="account-wrapper">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div
                className="login-content"
                style={{ backgroundImage: `url(${loginbg})` }}
              >
                <div className="description text-center">
                  <h2>Welcome Back!</h2>
                  <p className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login-form">
                <h2>Log in</h2>
                <form onSubmit={handleLogin}>
                  <div className="input-group input-group-two mb-20">
                    <input
                      type="number"
                      placeholder="Mobile Number"
                      name="mobileNumber"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group input-group-two mb-30">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleInputChange}
                    />
                  </div>
                  <Link to="#">Forgot Password?</Link>
                  <button
                    type="submit"
                    className="main-btn btn-filled mt-20 login-btn"
                  >
                    Login
                  </button>
                  <div className="form-seperator">
                    <span>OR</span>
                  </div>
                  <p>
                    Don't have an Account?{' '}
                    <Link to="/register" className="d-inline-block">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
