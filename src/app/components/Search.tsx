"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();

  const handleclick = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("title", search);
    router.push(`/store?${currentSearchParams.toString()}`);
  };

  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search product..."
          className="flex-1 w-full px-4 py-2 rounded-lg border border-blue-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          onClick={handleclick}
          className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          search
        </button>
      </div>
    </div>
  );
}

export default Search;
