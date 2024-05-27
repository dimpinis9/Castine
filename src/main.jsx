import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./CartContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

console.log("Rendering the application");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
