import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AuthProvider from "./AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import Modal from "./Components/Modal/Modal";






createRoot(document.getElementById("root")).render(
  <StrictMode>
  
     
     <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
        <Modal />
      </AuthProvider>
 
  
  </StrictMode>
);
