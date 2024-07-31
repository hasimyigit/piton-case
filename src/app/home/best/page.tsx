import Card from "@/app/components/Card";
import Categories from "@/app/components/Categories";
import React from "react";

const BestSellerPage = () => {
  return (
    <div className="flex flex-col gap-[60px]">
      <Card type="vertical"/>
      <Categories title="Best Seller" view="best" cardType="vertical"/>
      <Categories title="Classics" view="classics" cardType="vertical" />
    </div>
  );
};

export default BestSellerPage;
