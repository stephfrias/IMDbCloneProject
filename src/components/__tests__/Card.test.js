import React from 'react';
import { render, screen } from "@testing-library/react";
import Card from "../Card";
import { BrowserRouter as Router } from "react-router-dom"; 

const mockMovieData = {
  id: 123,
  title: "Test Movie",
  overview: "This is a test overview for the test movie.",
  backdrop_path: "/test-image.jpg",
  poster_path: "/test-poster.jpg",
  vote_count: 100,
  release_date: "2024-08-21",
};

describe("Card Component", () => {
  it("renders the movie card with correct data", () => {
    render(
      <Router>
        <Card result={mockMovieData} />
      </Router>
    );

    // Check for the image alt text
    const movieImage = screen.getByAltText("movie image");
    expect(movieImage).toBeInTheDocument();

    // Check for the title
    const movieTitle = screen.getByText(/Test Movie/i);
    expect(movieTitle).toBeInTheDocument();

    // Check for the release date
    const releaseDate = screen.getByText(/2024-08-21/i);
    expect(releaseDate).toBeInTheDocument();

    // Check for the vote count
    const voteCount = screen.getByText(/100/i);
    expect(voteCount).toBeInTheDocument();
  });
});
