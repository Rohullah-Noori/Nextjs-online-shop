"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handlePageClick = (e: { selected: number }) => {
    console.log(e.selected);
    const page = e.selected + 1;
    const currentseachParams = new URLSearchParams(searchParams.toString());
    currentseachParams.set("page", page);
    currentseachParams.set("page", search);

    router.push(`store/?page=${page}&per_page=6`);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className=" flex gap-x-4 bg-blue-200 p-2  cursor-pointer rounded-lg"
      />
    </div>
  );
}
