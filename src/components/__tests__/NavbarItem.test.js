import React from 'react';
import { render, screen } from "@testing-library/react";
import NavbarItem from "../NavbarItem";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(() => {
    return {
      get: jest.fn(() => 'mockedGenre')
    };
  }),
}));

describe("NavbarItem component", () => {
  it("should render the NavbarItem component with the correct title and link", () => {
    render(
      <MemoryRouter>
        <NavbarItem title="Popular" param="fetchPopular" />
      </MemoryRouter>
    );

   
    const titleElement = screen.getByText("Popular");
    expect(titleElement).toBeInTheDocument();

 
    const linkElement = titleElement.closest('a');
    expect(linkElement).toHaveAttribute('href', '/?genre=fetchPopular');
  });
});
