import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyBookedService = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const axiosSecure = useAxiosSecure()

  const [bookedServices, setBookedServices] = useState([]);
  const [loading, setLoading] = useState(true);


  // Fetch booking data
  const fetchBookingData = async () => {
    try {
      const { data } = await axiosSecure.get(
        `${import.meta.env.VITE_API_URL}/booked-collection?email=${userEmail}`
      );
 
      setBookedServices(data);
    } catch (error) {
      console.error("Failed to fetch booked services. Please try again later.", error);
     
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when userEmail is available
  useEffect(() => {
    if (userEmail) fetchBookingData();
  }, [userEmail]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-extrabold text-gray-800 mb-6 border-b pb-2 border-gray-300">
        My Booked Services
      </h1>

      {loading && (
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Loading your booked services...
          </p>
        </div>
      )}



      {!loading  && bookedServices.length > 0 ? (
        <ul className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 items-start">
          {bookedServices.map((service) => (
            <li
              key={service._id}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300"
            >
              <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {service.category || "General"}
              </span>

             

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-500 transition-colors">
                  {service.serviceName}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <p className="text-lg font-semibold text-green-500">
                  ${service.serviceprice}
                </p>

                <p className="text-gray-500 text-xs mt-2">
                  Provider Email:{" "}
                  <span className="text-gray-700">{service.providerEmail}</span>
                </p>

                <button className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-all">
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
       
        !loading &&
        (
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">No services booked yet.</p>
            <p className="text-gray-500 mt-2">
              Explore and book your first service!
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default MyBookedService;
