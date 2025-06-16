import React from "react";
import Container from "../components/Container";
import Products from "../components/Products";
import Link from "next/link";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface IStoreProduct {
  searchParams: { page?: string; per_page?: string; title?: string };
}

async function Store({ searchParams }: IStoreProduct) {
  const page = searchParams.page ?? "1";
  const per_page = searchParams.per_page ?? "6";
  const title = searchParams.title ?? "";

  const res = await fetch(
    `http://localhost:3004/products?_page=${page}&_limit=${per_page}&title_like=${title}`,
    { cache: "no-store" }
  );
  const products = (await res.json()) as Product[];
  const total = Number(res.headers.get("X-Total-Count"));
  const pageCount = Math.ceil(total / Number(per_page));

  return (
    <Container>
      <div>
        <Search />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-10 mb-8 ">
        {products.map((item) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <Products {...item} />
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-center p-3">
        <Pagination pageCount={pageCount} />
      </div>
    </Container>
  );
}
export default Store;
