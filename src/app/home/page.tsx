import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import { get } from "@/lib/service";
import { Category } from "@/lib/types";



const HomePage = async () => {
  const categories =  await get<Category[]>('categories')
 
  
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
