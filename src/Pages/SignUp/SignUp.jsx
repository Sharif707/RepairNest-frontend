import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const { createUser, setUser, signInwithGoogle } = useAuth();
  const [error, setError] = useState({});
  const [isShowPassword, setisShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const togglePasswordVisibility = () => setisShowPassword(!isShowPassword);

  const onSubmit = (data) => {
  
    const { email, password } = data;

    createUser(email, password)
      .then((user) => {
        const currentUser = user.user;
        setUser(currentUser);
        setError({});
      })
      .catch((err) => {
        setError({ ...err, registerErr: err.message });
      });
  };

  const handleGoogleSignup = () => {
    signInwithGoogle()
      .then((user) => {
     
        setUser(user);
        setError({});
      })
      .catch((err) => {
        setError({ ...err, registerErr: err.message });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 my-8">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("displayName", {
                required: "Email is required.",
               
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address.",
                },
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
            <button
              onClick={togglePasswordVisibility}
              type="button"
              className="absolute right-2 top-1/2 mt-3 transform -translate-y-1/2"
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error.registerErr}</p>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          >
            <FaGoogle className="mr-2" /> Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
