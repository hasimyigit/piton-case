export type Category = {
  id: number;
  name: string;
  created_at: string;
};

export type Product = {
  id:number,
  name:string,
  author:string,
  description:string,
  price:number
};

export type Products = {
  product:Product[]
}

export type Categories = {
  category:Category[]
}