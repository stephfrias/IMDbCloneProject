import React from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center space-x-6 dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title={"Popular"} param="fetchPopular" />
      <NavbarItem title={"Top Rated"} param="fetchTopRated" />
      <Link href="/favorites" className="mx-4">
        Favorites
      </Link>
    </div>
  );
};

export default Navbar;
