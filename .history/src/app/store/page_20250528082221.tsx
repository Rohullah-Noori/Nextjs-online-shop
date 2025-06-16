interface IStoreProduct {
  searchParams: { page?: string; per_page?: string; title?: string };
}

async function Store({ searchParams }: IStoreProduct) {
  const page = searchParams.page ?? "1";
  const per_page = searchParams.per_page ?? "6";
  const title = searchParams.title ?? "";

  const result = await fetch(
    `http://localhost:3004/products?_page=${page}&_per_page=${per_page}&title=${title}`,
    { cache: "no-store" }
  );

  const data = (await result.json()) as IProductList;

  return (
    <Container>
      <div>
        <Search />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-10 mb-8 ">
        {data.data.map((item) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <Products {...item} />
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-center p-3">
        <Pagination pageCount={data.pages} />
      </div>
    </Container>
  );
}

export default Store;
