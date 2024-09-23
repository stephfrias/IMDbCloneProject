import React from 'react';
import Results from "@/components/Results"; 

const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

const SearchPage = async ({ searchParams }) => {
  const query = searchParams.query || "";

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to load search results");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length > 0 ? (
        <Results results={results} />
      ) : (
        <h2 className="text-center p-4">No results found for "{query}".</h2>
      )}
    </div>
  );
};

export default SearchPage;
