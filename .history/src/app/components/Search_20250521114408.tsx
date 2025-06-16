"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Search() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const handleclick = () => {
    router.push(`/store/?title=${search}`);
  };

  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="bg-gray-300 border-blue-300 "
      />
      <button
        onClick={handleclick}
        className="p-2 bg-blue-400 rounded-xl text-black"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
