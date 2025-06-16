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
        // const { data } = res;
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
      <div className="w-80 h-60 bg-gray-200 flex items-center justify-center rounded-lg">
        <span>loading .... </span>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <span>data failed</span>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-12 bg-amber-50 gap-x-5 mt-4 px-10 py-5">
      <div className="col-span-3">
        <Image
          src={data.image}
          width={250}
          height={240}
          alt=""
          className="w-80 h-60"
        />
      </div>

      <div className="col-span-9">
        <h1>{data.title}</h1>
        <h4> total: {qty}</h4>
        <p>
          price : <span>{data.price}</span> $
        </p>
        {/* <div className="mt-10 ">
          <button className="bg-sky-300 font-bold px-2  rounded-lg">+</button>
          <span className="px-2">{qty}</span>
          <button className="bg-sky-300 font-bold px-2  rounded-lg">-</button>
        </div> */}
        <AddToCart id={id.toString()} />
      </div>
    </div>
  );
}
