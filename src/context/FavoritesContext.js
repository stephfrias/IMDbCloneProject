"use client";
import React, { createContext, useState, useEffect } from "react";


export const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  
  const isLocalStorageAvailable = () => {
    try {
      const testKey = '__test_key__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      console.error("LocalStorage is not available:", error);
      return false;
    }
  };

 
  useEffect(() => {
    if (isLocalStorageAvailable()) {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
      if (storedFavorites && storedFavorites.length > 0) {
        console.log("Loaded favorites from localStorage:", storedFavorites); 
        setFavorites(storedFavorites);
      }
    }
  }, []);

  
  useEffect(() => {
    if (favorites.length > 0 && isLocalStorageAvailable()) {
      console.log("Saving favorites to localStorage:", favorites); 
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  
  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, movie];
      console.log("Added movie to favorites:", movie); 
      return updatedFavorites;
    });
  };

  
  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((fav) => fav.id !== movieId);
      console.log("Removed movie from favorites:", movieId); 
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
