"use client"
import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import { AppThunkDispatch, IRootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/lib/features/categorySlice";
import { Category } from "@/lib/types";




const HomePage =  () => {
  const dispatch: AppThunkDispatch = useDispatch();

  const { categories } = useSelector((state: IRootState) => state.CategoryReducer)

  useEffect(() => {
    dispatch(fetchCategories())
  }, []) 

  return (
    <>
      <Carousel />
      <div className="flex flex-col gap-[60px] mt-[92px]">
        {categories.length > 0 && categories.map((cat:Category)=>(
          <Categories key={cat.id} categoryId={cat.id} title={cat.name}  cardType="horizontal" />
        ))}
       
      </div>
    </>
  );
};

export default HomePage;
