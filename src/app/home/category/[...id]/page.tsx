import React from "react";
import Categories from "../../../components/Categories";

type Params = {
  params: { id: string };
  searchParams: { title: string };
};

const CategoryPage = ({ params, searchParams }: Params) => {
  const id = Number(params.id[0]);
  const title = searchParams.title;

  return (
    <div className="flex flex-col gap-[60px]">
      <Categories title={title} categoryId={id} cardType="vertical" />
    </div>
  );
};

export default CategoryPage;
