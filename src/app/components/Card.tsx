import Image from "next/image";
import Link from "next/link";
import React from "react";

type cardProps = {
  categoryId:number,
  type: "horizontal" | "vertical";
  name: string;
  author: string;
  price: number;
};

const Card = ({ type, name, author, price, categoryId }: cardProps) => {
  const cardFrame = `bg-[#09093710] flex ${
    type === "horizontal"
      ? `w-[320px] h-[200px]  gap-[20px] p-[10px]`
      : `flex-col items-center w-[300px] h-[433px]   p-[20px]`
  }`;

  const cardImage = `relative  ${
    type === "horizontal" ? `min-w-[120px] h-[180px]` : `min-w-[200px] h-[300px]`
  }
  `;

  const cardDesc = `flex  justify-between  ${
    type === "horizontal" ? `flex-col py-[10px]` : `w-full items-end mt-[20px]`
  }
  `;

  return (
    <Link href={`/home/book/${categoryId}?name=${name}`}>
      <div className={cardFrame}>
        <div className={cardImage}>
          <Image src="/dune.png" alt="" fill />
        </div>

        <div className={cardDesc}>
          <div className="flex flex-col">
            <span className="font-semibold text-[#090937] text-[20px]">
              {name}
            </span>
            <span className="font-semibold text-[#09093760] text-[16px]">
              {author}
            </span>
          </div>

          <span className="font-bold text-[#6251DD] text-[24px] ">{price}$</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
