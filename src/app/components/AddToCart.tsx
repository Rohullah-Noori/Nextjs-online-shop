"use client";

import { useShopingContextCustim } from "../context/page";
type IcardProp = {
  id: string;
};

export default function AddToCart({ id }: IcardProp) {
  const {
    cart,
    HandleincreasetoCard,
    getProductqty,
    handledecreasetoCard,
    RemovehandleSubmit,
  } = useShopingContextCustim();
  console.log(cart, "cartItems");
  return (
    <div>
      <div>
        <div className="mt-10 ">
          <button
            onClick={() => HandleincreasetoCard(parseInt(id))}
            className="bg-sky-300 font-bold px-2  rounded-lg"
          >
            +
          </button>
          <span className="px-2">{getProductqty(parseInt(id))}</span>
          <button
            className="bg-sky-300 font-bold px-2  rounded-lg"
            onClick={() => handledecreasetoCard(parseInt(id))}
          >
            -
          </button>
        </div>
      </div>
      <button
        className="bg-red-500 py-1 px-3 rounded-lg mt-2"
        onClick={() => RemovehandleSubmit(parseInt(id))}
      >
        Delet all from Cart
      </button>
    </div>
  );
}
