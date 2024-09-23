"use client";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { FavoritesContext } from "@/context/FavoritesContext";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Failed to load movie data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]); // fetch movie when movieId changes

  if (loading) {
    return <div>Loading...</div>; // Show a loading state
  }

  if (!movie) {
    return <div>Error loading movie details</div>; // Handle error state
  }

  const isFavorited = favorites.some((fav) => fav.id === movie.id);

  const handleFavorite = () => {
    if (isFavorited) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          alt="movie image"
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3">{movie.title || movie.name}</h2>
          <p className="mb-3 text-lg">
            <span className="font-semibold mr-1">Overview: </span>
            {movie.overview}
          </p>
          <p className="p-2">
            <span className="font-semibold mr-1">Released Date: </span>
            {movie.first_air_date || movie.release_date}
          </p>
          <p className="flex items-center p-2">
            <span className="font-semibold mr-1">Rating: </span>
            <AiFillHeart className="text-red-500 ml-3 mr-1" /> {movie.vote_count}
          </p>

          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className={`p-2 ${isFavorited ? "bg-red-500" : "bg-gray-500"} text-white rounded mt-3`}
          >
            {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
