"use client";

import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import CartItem from "../components/CartItem";
import { useShopingContextCustim } from "../context/page";
import axios from "axios";
import { IProductsProps } from "../components/Products";
import { formatNumber } from "@/utils/number";

export default function Cart() {
  const { cart } = useShopingContextCustim();

  const [data, setData] = useState<IProductsProps[]>([]);

  useEffect(() => {
    axios(`http://localhost:3004/products`).then((res) => {
      const { data } = res;
      setData(data);
    });
  }, []);

  console.log(data);

  return (
    <Container>
      <h1>Cart Shop</h1>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className="shadow bg-gray-50 gap-y-3 px-10 py-5 ">
        <p>
          General Price :
          <span>
            {formatNumber(
              cart.reduce((total, item) => {
                const selectedproduct = data.find(
                  (product) => product.id == item.id.toString()
                );
                return total + (selectedproduct?.price ?? 0) * item.qty;
              }, 0)
            )}
          </span>
        </p>
        <p>
          your discount : <span>20 $</span>{" "}
        </p>
        <p>
          final Price : <span>60 $</span>
        </p>
        <div className=" flex justify-start gap-x-3">
          <button className=" px-3 py-1 rounded-lg bg-sky-300 text-white">
            Submit
          </button>
          {/* <input
            type="text"
            value={"please enter your discount code"}
            className="w-[300px] bg-sky-50 rounded-lg px-3 text-gray-400"
          /> */}
        </div>
      </div>
    </Container>
  );
}
