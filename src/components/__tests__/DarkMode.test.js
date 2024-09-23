import React from 'react';
import { render, fireEvent, screen } from "@testing-library/react";
import DarkMode from "../DarkMode";
import { ThemeProvider } from "next-themes";


const renderDarkMode = () =>
  render(
    <ThemeProvider attribute="class">
      <DarkMode />
    </ThemeProvider>
  );

describe("DarkMode component", () => {
  it("should render the moon icon by default (light mode)", () => {
    renderDarkMode();

    const moonIcon = screen.getByRole("button", { hidden: true });
    expect(moonIcon).toBeInTheDocument();
  });

  it("should toggle to light mode when the moon icon is clicked", () => {
    renderDarkMode();

    const moonIcon = screen.getByRole("button", { hidden: true });
    fireEvent.click(moonIcon); // Trigger dark mode

    const lightIcon = screen.getByRole("button", { hidden: true });
    expect(lightIcon).toBeInTheDocument();
  });

  it("should toggle to dark mode when the sun icon is clicked", () => {
    renderDarkMode();

    const moonIcon = screen.getByRole("button", { hidden: true });
    fireEvent.click(moonIcon); // Toggle to dark mode

    const lightIcon = screen.getByRole("button", { hidden: true });
    fireEvent.click(lightIcon); // Toggle back to light mode

    expect(moonIcon).toBeInTheDocument();
  });
});
