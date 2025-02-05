import React from "react";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-6xl text-blue-500 mb-6">
        <FaTools />
      </div>
      <h1 className="text-4xl font-bold mb-4">Oops! Something broke!</h1>
      <p className="text-lg mb-6 text-gray-600">
        We're sorry, but the page you're looking for doesn't exist or might be under repair.
      </p>
      <div className="flex space-x-4">
        <Link to="/">
          <button className="btn btn-primary px-6 py-3">Go Home</button>
        </Link>
        <Link to="/contact">
          <button className="btn btn-outline px-6 py-3">Contact Support</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
