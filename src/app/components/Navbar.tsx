"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Container from "./Container";
import { useShopingContextCustim } from "../context/shoppingContext";
import Cookies from "js-cookie";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { totalitemsqty } = useShopingContextCustim();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { title: "Home", href: "/" },
    { title: "Store", href: "/store" },
    { title: "Dashboard", href: "/dashboard" },
    { title: "Login", href: "/login" },
  ];

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-md py-3 mb-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-sky-500">MyShop</div>

          <div className="hidden md:flex gap-6 items-center">
            {navlinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-sky-500 ${
                  pathname === item.href ? "text-sky-500 font-semibold" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}

            <Link href="/cart" className="relative flex items-center">
              <ShoppingCart className="w-5 h-5" />
              {totalitemsqty > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {totalitemsqty}
                </span>
              )}
            </Link>

            <button
              onClick={handleLogout}
              className="text-red-500 hover:underline text-sm"
            >
              Log Out
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 flex flex-col gap-4 text-sm">
            {navlinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href ? "text-sky-500 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}

            <div className="flex items-center gap-2">
              <Link href="/cart" className="flex items-center gap-1">
                <ShoppingCart className="w-4 h-4" />
                {totalitemsqty > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {totalitemsqty}
                  </span>
                )}
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:underline"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
