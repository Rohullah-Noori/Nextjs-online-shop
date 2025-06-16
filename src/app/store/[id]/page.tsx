import AddToCart from "@/app/components/AddToCart";
import Container from "@/app/components/Container";
import { IProductsProps } from "@/app/components/Products";

import React from "react";

interface Iproductspropchild {
  params: Promise<{ id: string }>;
  searchParams: {};
}

export default async function Product({ params }: Iproductspropchild) {
  const id = await params;
  const result = await fetch(`http://localhost:3004/products/${id.id}`);
  const data = (await result.json()) as IProductsProps;

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 shadow-lg py-10 px-4">
        <div className="md:col-span-4 flex justify-center">
          <img
            src={data.image}
            alt={data.title}
            className="w-full max-w-xs md:max-w-sm rounded-lg object-cover"
          />
        </div>

        <div className="md:col-span-8">
          <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
          <p className="text-gray-700 mb-4">{data.description}</p>
          <p className="text-lg font-semibold text-sky-600 mb-6">
            Price: <span>{data.price} $</span>
          </p>
          <AddToCart id={id.id} />
        </div>
      </div>
    </Container>
  );
}
