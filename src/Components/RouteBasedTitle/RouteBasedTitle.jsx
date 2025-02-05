import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();
  const dynamicpages = {
    "/": "Home",
    "/all-services": "All Services ",
    "/signup": "SignUp",
    "/signin": "SignIn ",
    "service-details/:id": "Service Details",
    "/manage-services": "Manage Services ",

    "/add-product": "Add Product",
    "/booked-services": "Booked Services",
    "*": "Page Not Found",
  };

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/service-details")) {
      document.title = dynamicpages["/service-details/:id"];
    } else {
      document.title = dynamicpages[path] || "RepairNest";
    }
  }, [location.pathname]);

  return null;
};

export default DynamicTitle;
