import Image from "next/image";
import React from "react";

const Card = ({ type }: { type: "horizontal" | "vertical" }) => {
  const cardFrame = `bg-[#09093710] flex ${
    type === "horizontal"
      ? `w-[320px] h-[200px]  gap-[20px] p-[10px]`
      : `flex-col items-center w-[300px] h-[433px]   p-[20px]`
  }`;

  const cardImage = `relative ${
    type === "horizontal" ? `w-[120px] h-[180px]` : `w-[200px] h-[300px]`
  }
  `;

  const cardDesc = `flex  justify-between  ${
    type === "horizontal" ? `flex-col py-[10px]` : `w-full items-end mt-[20px]`
  }
  `;

  return (
    <div className={cardFrame}>
      <div className={cardImage}>
        <Image src="/dune.png" alt="" fill />
      </div>

      <div className={cardDesc}>
        <div className="flex flex-col">
          <span className="font-semibold text-[#090937] text-[20px]">Dune</span>
          <span className="font-semibold text-[#09093760] text-[16px]">
            Frank Herbert
          </span>
        </div>

        <span className="font-bold text-[#6251DD] text-[24px] ">87,75 $</span>
      </div>
    </div>
  );
};

export default Card;
