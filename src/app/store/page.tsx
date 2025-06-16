import React from "react";
import Container from "../components/Container";
import Products, { IProductList } from "../components/Products";
import Link from "next/link";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

interface IStoreProduct {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string; title: string }>;
}

async function Store({ searchParams }: IStoreProduct) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "3";
  const title = (await searchParams).title ?? "";
  const result = await fetch(
    `http://localhost:3004/products?_page=${page}&_per_page=${per_page}&title=${title}`,
    { cache: "no-store" }
  );
  console.log(title);
  const data = (await result.json()) as IProductList;
  console.log(data);

  return (
    <Container>
      <div>
        <Search />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2  ">
        {data.data.map((item) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <Products {...item} />
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-center px-3 py-1 pb-3">
        <Pagination pageCount={data.pages} />
      </div>
    </Container>
  );
}
export default Store;
