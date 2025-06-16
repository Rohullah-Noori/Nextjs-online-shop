"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Loader2 } from "lucide-react";

export default function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const handlePageClick = (e: { selected: number }) => {
    setLoading(true);
    const page = e.selected + 1;

    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("per_page", "3");

    router.push(`/store?${currentSearchParams.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setLoading(false), 500); // شبیه‌سازی لودینگ
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 gap-4">
      {loading && (
        <div className="flex items-center gap-2 text-blue-600">
          <Loader2 className="animate-spin w-5 h-5" />
          <span>Loading page...</span>
        </div>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next ›"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="‹ Prev"
        renderOnZeroPageCount={null}
        containerClassName="flex flex-wrap justify-center gap-2"
        pageClassName="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-blue-100 hover:border-blue-400 transition-colors cursor-pointer"
        activeClassName="!bg-blue-500 !text-white !border-blue-600"
        previousClassName="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-blue-100 hover:border-blue-400 cursor-pointer"
        nextClassName="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-blue-100 hover:border-blue-400 cursor-pointer"
        breakClassName="px-3 py-1 text-gray-500"
      />
    </div>
  );
}
