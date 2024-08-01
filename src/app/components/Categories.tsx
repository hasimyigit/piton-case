"use client"
import React, { useEffect } from "react";
import Card from "./Card";
import Link from "next/link";
import { Product } from "@/lib/types";

import { ChevronLeft } from "lucide-react";
import { fetchProducts, selectProduct } from "@/lib/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch, IRootState } from "@/lib/store";
import { useRouter } from "next/navigation";

interface categoriesProps {
  title: string;
  categoryId:number,
  cardType: "horizontal" | "vertical";
}

type Products = {
  product: Product[]
}

const Categories =  ({ title, cardType, categoryId }: categoriesProps) => {
  const dispatch: AppThunkDispatch = useDispatch();
    
  const products = useSelector((state: IRootState) => state.ProductReducer[categoryId])

  const router = useRouter();
  useEffect(() => {
    dispatch(fetchProducts(categoryId))
  }, [categoryId]) 

  const catCardFrame = 
  `flex gap-[20px] ${
    cardType === "horizontal"
      ? ``
      : `flex-wrap`
  }`;
  const titleHref = `${cardType === "horizontal"
      ? `home/category/${categoryId}`
      : `/home`}`
  
      const handleClick = (product:Product) => {
        dispatch(selectProduct(product))
        router.push('/home/book')
      }
  return (
    <div className="flex flex-col gap-[20px]">
      <Link className="cursor-pointer" href={`${titleHref}`}>
        <div className="flex justify-between items-center ">
          <h3 className="font-bold text-[#090937] text-[32px] flex items-center">{cardType === "vertical" && (
            <ChevronLeft width={32} height={32} className="mr-[10px]"/>
          )}{title}</h3>
          {cardType === "horizontal" && (
            <span className="font-bold text-[#EF6B4A] text-[20px]">
              View All
            </span>
          )}
        </div>
      </Link>
      <div className={catCardFrame}>
        {products?.length > 0 && products.slice(0, cardType === 'vertical'? products.length : 4 ).map((p:Product) => (
          <div onClick={()=>handleClick(p)}>
             <Card  type={cardType} name={p.name} author={p.author} price={p.price} categoryId={categoryId}  />
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default Categories;
