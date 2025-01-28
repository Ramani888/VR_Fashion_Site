// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// // Context Providers
// import { CartProvider } from "./hooks/CartContext";
// import { DialogProvider } from "./components/Dialog/DialogContext";

// // CSS Imports
// import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "animate.css/animate.css";
// import "magnific-popup/dist/magnific-popup.css";
// import "./assets/css/font-awesome.min.css";
// import "./assets/css/flaticon.css";
// import "./assets/fonts/flaticon/flaticon-2.css";
// import "./assets/css/default.css";
// import "./assets/css/style.css";

// // Service Worker
// import * as serviceWorkerRegistration from "./serviceWorker";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter basename="/VR-Fashion">
//       <CartProvider>
//         <DialogProvider>
//           <App />
//         </DialogProvider>
//       </CartProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // Register service worker for PWA features
// serviceWorkerRegistration.register();



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Context Providers
import { CartProvider } from "./hooks/CartContext";
import { DialogProvider } from "./components/Dialog/DialogContext";

// CSS Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.css";
import "magnific-popup/dist/magnific-popup.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/flaticon.css";
import "./assets/fonts/flaticon/flaticon-2.css";
import "./assets/css/default.css";
import "./assets/css/style.css";

// Service Worker
import * as serviceWorkerRegistration from "./serviceWorker";

// Create the root element
const rootElement = document.getElementById("root");

// Check if the root element exists
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <CartProvider>
          <DialogProvider>
            <App />
          </DialogProvider>
        </CartProvider>
      </BrowserRouter>
    </React.StrictMode>
  );

  // Register service worker for PWA features
  serviceWorkerRegistration.register();
} else {
  console.error("Root element not found. Unable to render the application.");
}
