"use client"; 
import React, { useContext, Suspense } from "react";
import { FavoritesContext } from "@/context/FavoritesContext";
import Card from "@/components/Card";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext); 

  if (favorites.length === 0) {
    return <h2 className="text-center p-4">You have no favorites yet.</h2>;
  }

  return (
    <Suspense fallback={<div>Loading favorites...</div>}>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-5xl mx-auto py-4">
        {favorites.map((movie) => (
          <Card key={movie.id} result={movie} />
        ))}
      </div>
    </Suspense>
  );
};

export default FavoritesPage;
