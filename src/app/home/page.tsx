import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";



const HomePage = async () => {

  
  return (
    <>
      <Carousel />
      <div className="flex flex-col gap-[60px] mt-[92px]">
        <Categories title="Best Seller" view="best" cardType="horizontal" />
        <Categories title="Classics" view="classic" cardType="horizontal" />
      </div>
    </>
  );
};

export default HomePage;
