"use client"; 
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

const SearchBar = () => {
  const [query, setQuery] = useState(""); 
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (query.trim() === "") return;

    router.push(`/search?query=${encodeURIComponent(query)}`);

    setQuery("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center justify-center mb-0"  
      style={{ height: "40px" }}  
    >
      <input
        type="text"
        placeholder="Search movies/shows..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 w-80 border border-gray-300 rounded-lg focus:outline-none"
        style={{ height: "100%" }}  
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ml-2"
        style={{ height: "100%" }}  
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
