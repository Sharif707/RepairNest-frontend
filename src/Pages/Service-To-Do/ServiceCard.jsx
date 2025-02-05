import React from "react";

const ServiceCard = ({ bookedService, handleStatusChange }) => {
  const {
    _id,
    serviceName,
    providerName,
    providerEmail,
    serviceStatus,
    serviceprice,
    providerImage,
    userEmail,
    serviceImage,
    description,
  } = bookedService || {};
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src={serviceImage || "service image"}
          alt="Service"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">{serviceName}</h2>
        <p className="text-gray-600 mt-2">{description.slice(0, 160)}</p>
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
          <h2 className="text-sm font-normal ">{serviceStatus}</h2>
        </div>
        <p className="text-gray-600 mt-2">{providerName}</p>

        <p className="text-lg font-semibold text-green-500">${serviceprice}</p>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <select
          
          onChange={(e) => handleStatusChange(_id, serviceStatus, e.target.value)}
         
          value={serviceStatus}
          className="w-full px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Pending</option>
          <option
           onClick={() => handleStatusChange(_id, serviceStatus, "working")}
            value="working"
            disabled={serviceStatus === "working" || serviceStatus === "completed"}
            
            className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
          >
            Working
          </option>
          <option
            value="completed"
            onClick={() => handleStatusChange(_id, serviceStatus, "completed")}
            disabled={serviceStatus === "completed"}
            className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
          >
            Completed
          </option>
        </select>
      </div>
    </div>
  );
};

export default ServiceCard;
