"use client";
import React from 'react';
import { ThemeProvider } from "next-themes";
import { FavoritesProvider } from "@/context/FavoritesContext";  

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <FavoritesProvider>  
        <div className="dark:text-gray-200 dark:bg-gray-700 text-black transition-colors duration-300 min-h-screen select-none z-10">
          {children}
        </div>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default Providers;
