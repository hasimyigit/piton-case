import { Button } from "@/components/ui/button";
import { get } from "@/lib/service";
import { Product } from "@/lib/types";
import { ChevronLeft, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Products = {
  product: Product[];
};

type Params = {
  params: { id: string };
  searchParams: { name: string };
};

const BookDetailPage = async ({ params, searchParams }: Params) => {
  const categoryId = params.id[0];
  const name = searchParams.name;
  const { product } = await get<Products>("products", `/${categoryId}`);

  const selectedProduct = product.find((p) => p.name.trimEnd() === name);

  const iconClass =
    "w-[50px] h-[50px] flex justify-center items-center bg-[#F4F4FF] rounded-full";
  return (
    <div className="flex flex-col ">
      {/* Book Detail LINK*/}
      <Link
        className="cursor-pointer font-bold text-[#090937] text-[32px] flex items-center"
        href={`/home`}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-[#090937] text-[32px] flex items-center">
            <ChevronLeft width={32} height={32} className="mr-[10px]" />
            Book Details
          </h3>
        </div>
      </Link>
      {/* Book Detail DESC*/}
      <div className="flex mt-[31px] gap-[80px] flex-col md:flex-row">
        <div className="md:min-w-[420] h-[570]  p-[60px] bg-[#F4F4FF] rounded-md ">
          <Image
            src="/dune.png"
            alt=""
            width={100}
            height={100}
            className="w-full h-full "
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between">
            <h3 className="font-semibold text-black text-[40px]">
              {selectedProduct?.name}
            </h3>
            <span className={iconClass}>
              <Heart />
            </span>
          </div>

          <h6 className="font-semibold text-[#00000060] text-[32px]">
            {selectedProduct?.author}
          </h6>
          <span className="font-bold text-[#090937] text-[24px] mt-[50px]">
            Summary
          </span>
          <span className="text-[#09093760] text-[20px]">
            {selectedProduct?.description}
          </span>
        </div>
      </div>
      <Button className="flex justify-between px-[20px] py-[10px] w-[400px] mt-[130px] bg-[#EF6B4A] self-end"><span>{selectedProduct?.price} $</span> Buy Now </Button>
    </div>
  );
};

export default BookDetailPage;
