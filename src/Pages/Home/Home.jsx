import React from "react";
import Banner from "../../Components/BannerSlider/BannerSlider";
import { useLoaderData } from "react-router-dom";
import PopularServices from "../PopularServices/PopularServices";

const Home = () => {
  const bannerData = useLoaderData();

  return (
    <div>
      <header>
        <Banner bannerData={bannerData} />
      </header>

      <main>
        <PopularServices />
      </main>
    </div>
  );
};

export default Home;
