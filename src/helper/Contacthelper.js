import React, { useState } from "react";

const Contacthelper = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    isVerified: false,
  });

  const onNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const onPhoneChange = (event) => {
    setFormData({ ...formData, phone: event.target.value });
  };

  const onEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const onSubjectChange = (event) => {
    setFormData({ ...formData, subject: event.target.value });
  };

  const onMessageChange = (event) => {
    setFormData({ ...formData, message: event.target.value });
  };

  // REcaptcha - if needed in functional component
  const reCaptchaLoaded = (value) => {
    console.log("Captcha Successfully Loaded", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://metropolitanhost.com/scripts/sendmail.php", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.id !== "") {
          document
            .getElementById("server_response_success")
            .classList.add("d-block");
          resetForm();
          setFormData({
            ...formData,
            isVerified: true,
          });
        } else {
          document
            .getElementById("server_response_danger")
            .classList.add("d-block");
        }
      });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return <React.Fragment />;
};

export default Contacthelper;
