import React from "react";
import Image from "next/image";

export interface IProductsProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function Products({ image, title, price }: IProductsProps) {
  return (
    <div>
      <div className="shadow-lg p-3 rounded-lg px-10 ">
        <Image
          src={image} // your image URL
          alt="A cool photo"
          width={500} // required
          height={400} // required
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
