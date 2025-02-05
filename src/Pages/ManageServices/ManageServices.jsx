import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";

const ManageServices = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  const fetchAddedData = async () => {
    try {
      const { data } = await axiosSecure.get(`/managed-product/${user?.email}`);
      <Loading />;

      setServices(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAddedData();
  }, [user?.email]);

  const handleDelete = (service) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure.delete(
          `${import.meta.env.VITE_API_URL}/delete-product/${service}`
        );
        setServices((prevServices) => {
          return prevServices.filter(
            (singleservice) => singleservice._id !== service
          );
        });
        if (data.deletedCount === 1) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Manage Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length >= 1 ? (
          services.map((service) => (
            <div
              key={service._id}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-4">
                {service.description.slice(0, 203)}
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => navigate(`/update-service/${service._id}`)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(service._id);
                  }}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-3xl font-semibold my-4 text-center">
            No Data Found
          </p>
        )}
      </div>
    </div>
  );
};

export default ManageServices;
