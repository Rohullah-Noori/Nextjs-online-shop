import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProductsProps } from "./Products";
import Image from "next/image";
import AddToCart from "./AddToCart";

interface IcartitemProps {
  id: number;
  qty: number;
}

export default function CartItem({ id, qty }: IcartitemProps) {
  const [data, setData] = useState({} as IProductsProps);
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    axios(`http://localhost:3004/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-lg">
        <span>Loading...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <span>Data failed</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-gray-100 gap-5 mt-4 p-4 rounded-lg">
      <div className="md:col-span-3 flex justify-center">
        <Image
          src={data.image}
          width={250}
          height={240}
          alt="Product"
          className="w-full max-w-xs h-60 object-cover rounded-md"
        />
      </div>

      <div className="md:col-span-9 flex flex-col justify-center space-y-3">
        <h1 className="text-xl font-semibold">{data.title}</h1>
        <h4 className="text-gray-700">Total: {qty}</h4>
        <p className="text-gray-800 font-medium">
          Price: <span>{data.price}</span> $
        </p>
        <div>
          <AddToCart id={id.toString()} />
        </div>
      </div>
    </div>
  );
}
