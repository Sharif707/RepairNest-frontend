import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },

      async (error) => {
        if(error.response.status === 401 || error.response.status === 403){
           logOut()
            navigate('/signin')
            
        }
      }
    );
  }, [logOut, navigate]);
  return axiosInstance;
};

export default useAxiosSecure;
