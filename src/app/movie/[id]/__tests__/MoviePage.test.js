import { render, screen, fireEvent } from '@testing-library/react';
import MoviePage from '../page';
import { FavoritesContext } from '@/context/FavoritesContext';

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      id: 1,
      title: 'Test Movie',
      overview: 'Test overview',
      poster_path: '/testposter.jpg',
      vote_count: 123,
      release_date: '2024-09-23',
    }),
  })
);

describe('MoviePage', () => {
  it('displays movie details', async () => {
    const contextValue = { favorites: [], addFavorite: jest.fn(), removeFavorite: jest.fn() };
    
    render(
      <FavoritesContext.Provider value={contextValue}>
        <MoviePage params={{ id: '1' }} />
      </FavoritesContext.Provider>
    );
    
    expect(await screen.findByText(/test movie/i)).toBeInTheDocument();
    expect(await screen.findByText(/test overview/i)).toBeInTheDocument();
    expect(await screen.findByText(/2024-09-23/i)).toBeInTheDocument();
  });

  it('allows adding and removing from favorites', async () => {
    const addFavorite = jest.fn();
    const removeFavorite = jest.fn();
    
    const contextValue = { favorites: [], addFavorite, removeFavorite };
    
    render(
      <FavoritesContext.Provider value={contextValue}>
        <MoviePage params={{ id: '1' }} />
      </FavoritesContext.Provider>
    );
    
    const favoriteButton = await screen.findByText(/add to favorites/i);
    fireEvent.click(favoriteButton);
    expect(addFavorite).toHaveBeenCalledWith(expect.objectContaining({ id: 1 }));
  });
});
