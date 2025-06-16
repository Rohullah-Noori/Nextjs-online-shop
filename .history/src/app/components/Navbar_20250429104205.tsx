"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import Container from "./Container";
import { useShopingContextCustim } from "../context/page";

export default function Navbar() {
  const { totalitemsqty } = useShopingContextCustim();
  const pathname = usePathname();
  const navlinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "store",
      href: "/store",
    },
  ];

  return (
    <nav className="  flex p-3 mb-4 text-lg  shadow-xl  ">
      <Container>
        <div className="flex justify-between my-3 ">
          <div>
            {navlinks.map((item) => (
              <Link
                key={item.href}
                className={`mr-4 ${
                  pathname === item.href ? "text-sky-400" : ""
                }`}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <span className="bg-red-400 rounded-4xl p-1">{totalitemsqty}</span>
            <Link href="/cart">cart</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
