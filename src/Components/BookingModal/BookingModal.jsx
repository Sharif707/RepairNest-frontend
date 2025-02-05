import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const BookingModal = ({ handleCloseModal, service }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate()

  const userEmail = user?.email;
  const axiosSecure = useAxiosSecure()

  const {image, _id, providerName, providerEmail, providerImage, name, price } =
    service || {};
   

  const onSubmit = async (data) => {
    const bookeddata = {
      ...data,
      serviceStatus: "pending",
    };

    try {
      const { data } = await axiosSecure.post(
        `${import.meta.env.VITE_API_URL}/booked-service`,
        bookeddata
      );
      toast.success("submission successfull");
      navigate("/booked-services")

    } catch (error) {
      console.log(error);
    }

    reset();
    const modal = document.getElementById("my_booking_modal_5");
    modal.close();
  };
  return (
    <div>
      <dialog
        id="my_booking_modal_5"
        className="modal modal-bottom sm:modal-middle text-black"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg md:text-2xl">Book The Solution</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="flex justify-end items-center">
              <img
                src={providerImage}
                className="w-10 object-cover rounded-full"
              />
            </div>

            {/* Service Id */}

            <div>
              <label className="block text-sm font-medium mb-1">
                Service Image
              </label>
              <input
                type="text"
                {...register("serviceImage")}
                readOnly
                value={image}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Service Name
              </label>
              <input
                type="text"
                {...register("serviceName", { required: "Name is required" })}
                readOnly
                value={name}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Provider Email
              </label>
              <input
                type="email"
                {...register("providerEmail")}
                value={providerEmail}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Provider Name
              </label>
              <input
                type="text"
                {...register("providerName")}
                value={providerName}
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Provider Image
              </label>

              <input
                type="url"
                value={providerImage}
                {...register("providerImage")}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">UserName</label>
              <input
                type="text"
                {...register("userName")}
                readOnly
                value={user?.displayName || "Sharif"}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                UserEmail
              </label>
              <input
                type="email"
                {...register("useremail")}
                value={userEmail}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Service Date
              </label>
              <input
                required
                type="date"
                {...register("date")}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                value={price}
                {...register("serviceprice")}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label>Special Instruction:</label>
              <textarea
                {...register("specialInstruction")}
                className="textarea h-32 w-full resize-none border border-gray-300"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
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
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Purchase Now
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="btn btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookingModal;
