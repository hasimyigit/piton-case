import React from "react";
import Card from "./Card";
import Link from "next/link";


   interface categoriesProps {
    title: string;
    view: string;
    cardType: "horizontal" | "vertical";
  }

const Categories = ({ title, view, cardType }: categoriesProps) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-[#090937] text-[32px]">{title}</h3>
        {cardType === "horizontal" && (
          <Link
            className="font-bold text-[#EF6B4A] text-[20px]"
            href={`/${view}`}
          >
            View All
          </Link>
        )}
      </div>

      <div className="flex gap-[20px]">
        {[1, 2, 3, 4].map(() => (
          <Card type={cardType} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
