import React from "react";
import { useForm } from "react-hook-form";

const Modal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    reset();
    const modal = document.getElementById("my_modal_5");
    modal.close(); 
  };

  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle text-black"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Free Consultancy Request</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Number</label>
              <input
                type="tel"
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.number.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Select Service
              </label>
              <select
                {...register("service", {
                  required: "Please select a service",
                })}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Choose a service
                </option>
                <option value="home-repair">Home Repair</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrician">Electrician</option>
                <option value="gardening">Gardening</option>
                <option value="custom-service">Custom Service</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.service.message}
                </p>
              )}
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
                Proceed to Request
              </button>
              <button
                type="button"
                onClick={() => {
                  document.getElementById("my_modal_5").close();
                }}
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

export default Modal;
