import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("Navbar component", () => {
  it("should render the Navbar component with all links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check if Popular and Top Rated links are rendered
    expect(screen.getByText("Popular")).toBeInTheDocument();
    expect(screen.getByText("Top Rated")).toBeInTheDocument();
    
    // Check if Favorites link is rendered
    const favoritesLink = screen.getByText("Favorites");
    expect(favoritesLink).toBeInTheDocument();
    expect(favoritesLink.closest('a')).toHaveAttribute('href', '/favorites');
  });
});
