import React, { Suspense } from 'react';
import Results from "@/components/Results";

const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchPopular"; 

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "movie/popular" 
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {
      next: { revalidate: 100000 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed To Load Movie Data");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <Suspense fallback={<div>Loading movies...</div>}>
      <div>
        <Results results={results} />
      </div>
    </Suspense>
  );
}
