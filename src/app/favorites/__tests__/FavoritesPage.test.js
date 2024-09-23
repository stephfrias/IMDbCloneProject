import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritesPage from '../page';
import { FavoritesContext } from '@/context/FavoritesContext';

describe('FavoritesPage', () => {
  it('displays "You have no favorites yet." if there are no favorites', () => {
    // Provide empty favorites to the context
    const contextValue = { favorites: [] };
    render(
      <FavoritesContext.Provider value={contextValue}>
        <FavoritesPage />
      </FavoritesContext.Provider>
    );
    
    expect(screen.getByText(/you have no favorites yet/i)).toBeInTheDocument();
  });

  it('renders the favorite movies when available', () => {
    // Provide a favorite movie to the context
    const contextValue = {
      favorites: [
        {
          id: 1,
          title: 'Test Movie',
          overview: 'Test overview',
          poster_path: '/testposter.jpg',
          vote_count: 123,
        },
      ],
    };
    render(
      <FavoritesContext.Provider value={contextValue}>
        <FavoritesPage />
      </FavoritesContext.Provider>
    );
    
    expect(screen.getByText(/test movie/i)).toBeInTheDocument();
    expect(screen.getByText(/test overview/i)).toBeInTheDocument();
  });
});
