// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   MenuItem,
//   Button,
//   Box,
//   Typography,
// } from "@mui/material";
// import { useDialog } from "./DialogContext";

// const LoginDialog = () => {
//   const { open, closeDialog } = useDialog();

//   const [state, setState] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [city, setCity] = useState("");
//   const [pincode, setPincode] = useState("");

//   const states = ["State 1", "State 2", "State 3"];

//   const handleSubmit = () => {
//     console.log({ mobile, state, city, pincode });
//     closeDialog();
//   };

//   return (
//     <Dialog open={open} onClose={closeDialog}>
//       <DialogTitle>
//         <Box display="flex" justifyContent="center" alignItems="center">
//           <img
//             src="logo.png"
//             alt="VR Fashion Logo"
//             style={{ width: "50px", marginRight: "8px" }}
//           />
//           <Typography variant="h6" fontWeight="bold">
//             Login to VR Fashion
//           </Typography>
//         </Box>
//       </DialogTitle>
//       <DialogContent>
//         <Box display="flex" flexDirection="column" gap={2}>
//           <TextField
//             label="Mobile No."
//             type="text"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             fullWidth
//           />
//           <TextField
//             label="State"
//             select
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//             fullWidth
//           >
//             {states.map((state, index) => (
//               <MenuItem key={index} value={state}>
//                 {state}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             label="City"
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             fullWidth
//           />
//           <TextField
//             label="Pincode"
//             type="text"
//             value={pincode}
//             onChange={(e) => setPincode(e.target.value)}
//             fullWidth
//           />
//           <Button
//             variant="contained"
//             onClick={handleSubmit}
//             style={{
//               backgroundColor: "#000",
//               color: "#fff",
//               borderRadius: "8px",
//               padding: "10px",
//             }}
//           >
//             Continue
//           </Button>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default LoginDialog;




import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap"; // Using react-bootstrap for modal
import popupimg from "../../assets/img/popup.jpg"; // Background image

const LoginDialog = () => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    handleClose(); // Close the modal after submitting
  };

  // Handle dialog state properly when switching pages
  useEffect(() => {
    const body = document.querySelector("body");
    if (show) {
      body.style.overflow = "hidden"; // Prevent body scrolling when modal is open
    } else {
      body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    }
  }, [show]);

  return (
    <Modal
      show={show}
      className="on-load-modal"
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        className="modal-content"
        style={{ backgroundImage: `url(${popupimg})` }} // Background image
      >
        <Modal.Header>
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">×</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-inner">
            <h3 className="title">Login to Your Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control"
                />
              </div>
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


