import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const providerName = user?.displayName || null;
  const providerEmail = user?.email || null;
  const providerImage = user?.photoURL || null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const serviceData = {
        ...data,
        price: parseInt(data.price, 10),
        providerName,
        providerEmail,
        providerImage,
      };
      const res = await axiosSecure.post(
        `${import.meta.env.VITE_API_URL}/add-products`,
        serviceData
      );

      if (res.data.insertedId) {
        //didn't reset the form due to possible inconvenience of the examiner
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Service Successfully Added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/all-services");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md  my-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Add a New Service
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm text-gray-700">Image URL</label>
          <input
            type="url"
            {...register("image", { required: "Image URL is required" })}
            placeholder="Enter the image URL"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">
            Service Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Service Name is required" })}
            placeholder="Enter the service name"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Price</label>
          <input
            type="number"
            {...register("price", {
              required: "Price is required",
              min: { value: 1, message: "Price must be greater than 0" },
            })}
            placeholder="Enter the price"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">
            Service Area
          </label>
          <input
            type="text"
            {...register("area", { required: "Service Area is required" })}
            placeholder="Enter the service area"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
          />
          {errors.area && (
            <p className="text-red-500 text-sm mt-1">{errors.area.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters long",
              },
            })}
            placeholder="Enter a brief description"
            className="w-full p-2 border rounded focus:ring focus:ring-blue-300 "
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:ring focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
