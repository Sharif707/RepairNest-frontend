import { useState, useEffect } from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard"; 

const AllServices = () => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-services?search=${search}`
        );
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, [search]);

  const handleSearch = () => {
    setSearch(inputValue); 
  };

  return (
    <div className="container mx-auto">
      {/* Search Bar */}
      <div className="flex p-1 border rounded-lg w-fit mx-auto focus-within:ring focus-within:border-blue-400 focus-within:ring-blue-300">
        <input
          className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search services"
        />
        <button
          onClick={handleSearch}
          className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        >
          Search
        </button>
      </div>

      <h2 className="text-2xl md:text-4xl text-center my-8">
        Explore Our Services
      </h2>

      <div className="grid gap-5 lg:gap-10 grid-cols-1 md:grid-cols-9 lg:grid-cols-12 my-6">
     
        <div className="border max-h-[600px] col-span-3">
          {services.map((service) => (
            <div key={service._id} className="px-3 py-2">
              {service.name}
            </div>
          ))}
        </div>

    
        <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
