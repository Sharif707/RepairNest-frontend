import axios from "axios";

import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateService = () => {
  const {id: serviceId} = useParams();
 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();

  const userEmail = user?.email;


  const onSubmit = async (submitteddata) => {
    try {
       await axios.put(
        `${import.meta.env.VITE_API_URL}/update-product/${serviceId}`,
        submitteddata
      );
      toast.success("Successfully updated");
    } 
    catch (error) {
      console.log(error);
    }

  
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h3 className="text-xl font-semibold text-center mb-4">
        Update Document
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-center mb-4">
          <img
            referrerPolicy="no-referrer"
            src={user?.displayURL}
            alt="User"
            className="w-12 h-12 object-cover rounded-full border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Name
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Service Name is required",
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Provider Email
          </label>
          <input
            type="email"
            {...register("providerEmail")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Provider Name
          </label>
          <input
            type="text"
            {...register("providerName", {
              required: "Provider Name is required",
            })}
            value={user?.displayName || ""}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Provider Image
          </label>
          <input
            type="url"
            {...register("providerImage")}
            value={user?.photoURL}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            UserName
          </label>
          <input
            type="text"
            {...register("userName", { required: "username is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            UserEmail
          </label>
          <input
            type="email"
            {...register("useremail")}
            value={user?.email}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Date
          </label>
          <input
            required
            type="date"
            {...register("date")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            {...register("price")}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Instruction:
          </label>
          <textarea
            {...register("specialInstruction")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 resize-none"
            rows="4"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
            placeholder="Briefly describe your situation"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            rows="4"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Update
          </button>
          <button
            type="button"
            
            className="px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
