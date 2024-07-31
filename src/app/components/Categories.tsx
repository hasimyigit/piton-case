import React from "react";
import Card from "./Card";
import Link from "next/link";
import { Product } from "@/lib/types";
import { get } from "@/lib/service";
import { ChevronLeft } from "lucide-react";

interface categoriesProps {
  title: string;
  categoryId:number,
  cardType: "horizontal" | "vertical";
}

type Products = {
  product: Product[]
}

const Categories = async ({ title, cardType, categoryId }: categoriesProps) => {
const {product} = await get<Products>('products',`/${categoryId}`)
  const catCardFrame = 
  `flex gap-[20px] ${
    cardType === "horizontal"
      ? ``
      : `flex-wrap`
  }`;
  const titleHref = `${cardType === "horizontal"
      ? `home/category/${categoryId}?title=${title}`
      : `/home`}`
  
  return (
    <div className="flex flex-col gap-[20px]">
      <Link className="cursor-pointer" href={`${titleHref}`}>
        <div className="flex justify-between items-center">
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
        {product.length > 0 && product.slice(0, cardType === 'vertical'? product.length : 4 ).map((p) => (
          <Card type={cardType} name={p.name} author={p.author} price={p.price} categoryId={categoryId}  />
        ))}
      </div>
    </div>
  );
};

export default Categories;
