import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import { get } from "@/lib/service";
import { Category } from "@/lib/types";


type Categories = {
  category:Category[]
}

const HomePage = async () => {
  const {category} =  await get<Categories>('categories')

  return (
    <>
      <Carousel />
      <div className="flex flex-col gap-[60px] mt-[92px]">
        {category.length > 0 && category.map((cat)=>(
          <Categories key={cat.id} categoryId={cat.id} title={cat.name}  cardType="horizontal" />
        ))}
       
      </div>
    </>
  );
};

export default HomePage;
