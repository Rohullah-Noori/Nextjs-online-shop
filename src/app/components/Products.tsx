import React from "react";
import Image from "next/image";

export interface IProductsProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface IProductList {
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number;
  prev: number | null;
  data: IProductsProps[];
}
export default function Products({ image, title, price }: IProductsProps) {
  return (
    <div className="w-full max-w-sm">
      <div className="shadow-lg p-3 rounded-lg  ">
        <Image
          src={image}
          alt="A cool photo"
          width={500}
          height={400}
          className="rounded-t-lg w-3xl h-60 object-cover "
        />
        <div className="pt-4 pb-4">
          <h2 className="">title : {title}</h2>
          <span>price : {price} $ </span>
        </div>
      </div>
    </div>
  );
}
