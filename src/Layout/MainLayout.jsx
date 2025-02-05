import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicTitle from "../Components/RouteBasedTitle/RouteBasedTitle";

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Run animation only once when it comes into view
    });
  }, []);
  return (
    <div>
      <DynamicTitle />
      <header className="container mx-auto">
        <Navbar />
      </header>
    <section className="my-6 md:my-12">
    <Outlet />
    </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
