import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import LoginForm from "../Pages/Login/LoginForm";
import AddProduct from "../Pages/AddProducts/AddProduct";
import PrivateRoute from "../Pages/PrivateRoutes/PrivateRoute";
import axios from "axios";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ManageServices from "../Pages/ManageServices/ManageServices";
import MyBookedService from "../Pages/MyBookedService/MyBookedService";
import UpdateService from "../Pages/UpdateService/UpdateService";
import ServiceToDo from "../Pages/Service-To-Do/ServiceToDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const { data } = await axios.get(
              `${import.meta.env.VITE_API_URL}/banner-slider`
            );
            return data;
          } catch (error) {
            console.log(error);
          }
        },
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <LoginForm />,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />,
          </PrivateRoute>
        ),
      },
      {
        path: "/all-services",
        element: (
          <PrivateRoute>
            <AllServices />,
          </PrivateRoute>
        ),
      },
      {
        path: "/service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/service-details/${params.id}`
          ),
      },
      {
        path: "/manage-services",
        element: (
          <PrivateRoute>
            <ManageServices />,
          </PrivateRoute>
        ),
      },
      {
        path: "/booked-services",
        element: (
          <PrivateRoute>
            <MyBookedService />,
          </PrivateRoute>
        ),
      },
      {
        path: "/update-service/:id",
        element: <PrivateRoute>
           <UpdateService />,
        </PrivateRoute>
      },
      {
        path: "/service-to-do",
        element: <PrivateRoute>
          <ServiceToDo></ServiceToDo>
        </PrivateRoute>
      }
    ],
  },
]);

export default router;
