import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isShowPassword, setisShowPassword] = useState(false);
  const { loginUser, signInwithGoogle, setUser } = useAuth();
  const [error, setError] = useState({});
  const location = useLocation();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((user) => {
        const currentUser = user.user;
        setUser(currentUser);
        toast.success("Successfully logged in");
        navigate(location ? location?.state : "/");
        setError({});
      })
      .catch((err) => {
        setError({ ...error, registerError: err.message });
      });
  };

  const handleGoogleLogin = () => {
    signInwithGoogle()
      .then((response) => {
        setUser(response.user);
        navigate(location ? location?.state : "/");
      })
      .catch((err) => {
        setError({ ...error, registerError: err.message });
      });
  };
  const togglePasswordVisibility = () => setisShowPassword(!isShowPassword);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 my-8">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-600">
          Login to access your account
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
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
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-indigo-500`}
              placeholder="Enter your password"
            />
            <button
              onClick={togglePasswordVisibility}
              type="button"
              className="absolute mt-3 top-1/2 right-2 transform -translate-y-1/2"
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
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account? <span></span>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {error && (
          <p className="mt-1 text-sm text-red-500">{error.registerError}</p>
        )}

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-600 bg-white">Or</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <FcGoogle className="w-6 h-6 mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
