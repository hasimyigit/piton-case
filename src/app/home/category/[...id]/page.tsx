"use client"
import React from "react";
import Categories from "../../../components/Categories";
import { useSelector } from "react-redux";
import { IRootState } from "@/lib/store";
import { Category } from "@/lib/types";

type Params = {
  params: { id: string };

};

const CategoryPage = ({ params }: Params) => {
  const {categories} :{categories:Category[]} = useSelector((state: IRootState) => state.CategoryReducer)
 
  const id = Number(params.id[0]);
  const category = categories.find((c:Category)=>c.id === id)
    const title = category && category.name

  

  return (
    <div className="flex flex-col gap-[60px]">
      <Categories title={title || ''} categoryId={id} cardType="vertical" />
    </div>
  );
};

export default CategoryPage;
