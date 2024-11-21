import React, { useState } from "react";
import Contacthelper from "../../../helper/Contacthelper";
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from "react-bootstrap";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Content = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [serverResponse, setServerResponse] = useState({
    success: false,
    error: false,
  });

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    // Example: You can call a method from Contacthelper class
    // this.handleSubmit();

    // Simulate server response for demonstration
    // Replace with actual server interaction in your application
    if (name && email && phone && subject && message) {
      setServerResponse({ success: true, error: false });
      setTimeout(() => {
        setServerResponse({ success: false, error: false });
      }, 3000);
    } else {
      setServerResponse({ success: false, error: true });
    }
  };

  return (
    <section className="contact-part pt-115 pb-20">
      <div className="container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-10">
              <div className="info-box">
                <div className="icon">
                  <i className="flaticon-home" />
                </div>
                <div className="desc">
                  <h4>Office Address</h4>
                  <p>A-34, 2nd Floor Laxmidhara Complex, Baroda Pristage, Varachha Road, Surat - 395006, Gujrat, India</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-10">
              <div className="info-box">
                <div className="icon">
                  <i className="flaticon-phone" />
                </div>
                <div className="desc">
                  <h4>Phone Number</h4>
                  <p>
                  +91 8141851456 <br /> +91 8141851456
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-10">
              <div className="info-box">
                <div className="icon">
                  <i className="flaticon-message" />
                </div>
                <div className="desc">
                  <h4>Email Address</h4>
                  <p>
                  vrfashionjewellery0044@gmail.com <br /> vrfashionjewellery0044@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Maps */}
        {/* <Map
          // eslint-disable-next-line react/style-prop-object
          style="mapbox://styles/mapbox/light-v10"
          className="contact-maps mb-30"
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[-77.04, 38.907]} zoom={11.5} />
          </Layer>
        </Map> */}
        {/* Contact Form */}
        {/* <div className="contact-form">
          <form onSubmit={handleSubmit} method="GET">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group mb-30">
                  <span className="icon">
                    <i className="far fa-user" />
                  </span>
                  <input
                    type="text"
                    placeholder="Your full name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-30">
                  <span className="icon">
                    <i className="far fa-envelope" />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-30">
                  <span className="icon">
                    <i className="far fa-phone" />
                  </span>
                  <input
                    type="text"
                    placeholder="Add phone number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-30">
                  <span className="icon">
                    <i className="far fa-book" />
                  </span>
                  <input
                    type="text"
                    placeholder="Select Subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group textarea mb-30">
                  <span className="icon">
                    <i className="far fa-pen" />
                  </span>
                  <textarea
                    placeholder="Enter messages"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12 text-center">
                <ReCAPTCHA
                  sitekey="6LdxUhMaAAAAAIrQt-_6Gz7F_58S4FlPWaxOh5ib"
                  onChange={() => {}}
                  size="invisible"
                />
                <button type="submit" className="main-btn btn-filled">
                  Get Free Quote
                </button>
                {serverResponse.success && (
                  <Alert variant="success" className="mt-3 mb-0">
                    <strong>Success!</strong> Contact form has been successfully
                    submitted.
                  </Alert>
                )}
                {serverResponse.error && (
                  <Alert variant="danger" className="mt-3 mb-0">
                    <strong>Oops!</strong> Something bad happened. Please try
                    again later.
                  </Alert>
                )}
              </div>
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default Content;
