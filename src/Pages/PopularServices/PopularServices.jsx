import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const { data } = await axiosSecure.get(
          `${import.meta.env.VITE_API_URL}/all-services`
        );
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Popular Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {services.slice(0, 6).map((service) => (
            <div
              key={service._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
              data-aos="fade-up"
            >
              <img
                referrerPolicy="no-referrer"
                src={service.image}
                alt={service.name}
                className="w-full h-60 object-cover rounded-lg"
              />

              <div className="mt-4 flex-1">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description.length > 100
                    ? service.description.slice(0, 100) + "..."
                    : service.description}
                </p>
                <p className="text-lg font-bold text-green-600 mt-4">
                  ${service.price}
                </p>
              </div>

              <div className="flex items-center mt-4">
               {
                user &&  <img
                src={service.providerImage}
                alt={service.providerName}
                className="w-10 h-10 rounded-full object-cover"
              />
               }
                <p className="ml-3 text-gray-700">{service.providerName}</p>
              </div>

            
             <Link to={`/service-details/${service._id}`}>
             <button
               
               className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
             >
               View Details
             </button></Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to={"/all-services"}>
            <button className="bg-[#343995] hover:-translate-x-[5px] hover:bg-green-500 hover:duration-300 text-white py-2 px-6 rounded-lg btn">
             Check All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
