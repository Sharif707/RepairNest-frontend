import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import ServiceCard from "./ServiceCard";
import toast from "react-hot-toast";

const ServiceToDo = () => {
  const [serviceTodo, setServiceTodo] = useState([]);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const fetchBookingCollectionData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/service-collection?email=${user?.email}`
    );
    
    setServiceTodo(data);
  };

  const handleStatusChange = async (_id, prevStatus, serviceStatus) => {
    if (prevStatus === serviceStatus || prevStatus === "completed")
      return toast.error("Not Allowed");

    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/service-status-update/${_id}`,
        { serviceStatus }
      );
   
      toast.success(`Status Changed To ${serviceStatus}`);
      // refresh ui
      fetchBookingCollectionData();
    } catch (err) {
    
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchBookingCollectionData();
  }, [user?.email]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
      {serviceTodo.length > 0 ? (
        serviceTodo.map((bookedService) => (
          <ServiceCard
            key={bookedService._id}
            handleStatusChange={handleStatusChange}
            bookedService={bookedService}
          />
        ))
      ) : (
        <p className="text-3xl font-semibold my-4 text-center">No Data Found</p>
      )}
    </div>
  );
};

export default ServiceToDo;
