"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { json } from "stream/consumers";

type IshopContextProps = {
  children: React.ReactNode;
};

type cartItems = {
  id: number;
  qty: number;
};

type TshopingContext = {
  cart: cartItems[];
  HandleincreasetoCard: (id: number) => void;
  getProductqty: (id: number) => number;
  totalitemsqty: number;
  handledecreasetoCard: (id: number) => void;
  RemovehandleSubmit: (id: number) => void;
};

const shopingContext = createContext({} as TshopingContext);

export const useShopingContextCustim = () => {
  return useContext(shopingContext);
};

export default function ConextShop({ children }: IshopContextProps) {
  const [cart, setCart] = useState<cartItems[]>([]);

  const getProductqty = (id: number) => {
    return cart.find((item) => item.id == id)?.qty ?? 0;
  };

  const totalitemsqty = cart.reduce((totalgqty, item) => {
    return totalgqty + item.qty;
  }, 0);

  const HandleincreasetoCard = (id: number) => {
    setCart((prev) => {
      const isnotExist = prev.find((item) => item.id === id) == null;
      if (isnotExist) {
        return [...prev, { id: id, qty: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handledecreasetoCard = (id: number) => {
    setCart((prev) => {
      const islastOne = prev.find((item) => item.id == id)?.qty == 1;
      if (islastOne) {
        return prev.filter((item) => item.id != id);
      } else {
        return prev.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const RemovehandleSubmit = (id: number) => {
    setCart((prev) => {
      return prev.filter((item) => item.id != id);
    });
  };

  useEffect(() => {
    const StoredCards = localStorage.getItem("cart");
    if (StoredCards) {
      setCart(JSON.parse(StoredCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <shopingContext.Provider
      value={{
        cart,
        HandleincreasetoCard,
        getProductqty,
        totalitemsqty,
        handledecreasetoCard,
        RemovehandleSubmit,
      }}
    >
      {children}
    </shopingContext.Provider>
  );
}
