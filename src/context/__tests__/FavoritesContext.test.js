import React from 'react'; 
import { renderHook, act } from '@testing-library/react-hooks';
import { FavoritesProvider, FavoritesContext } from '../FavoritesContext';


beforeEach(() => {
  localStorage.clear();
});

describe('FavoritesContext', () => {
  test('loads favorites from localStorage', () => {
    const initialFavorites = [{ id: 1, title: 'Inception' }];
    localStorage.setItem('favorites', JSON.stringify(initialFavorites));

    const { result } = renderHook(() => React.useContext(FavoritesContext), {
      wrapper: FavoritesProvider,
    });

    expect(result.current.favorites).toEqual(initialFavorites);
  });

  test('adds a movie to favorites', () => {
    const { result } = renderHook(() => React.useContext(FavoritesContext), {
      wrapper: FavoritesProvider,
    });

    act(() => {
      result.current.addFavorite({ id: 2, title: 'The Matrix' });
    });

    expect(result.current.favorites).toEqual([{ id: 2, title: 'The Matrix' }]);
    expect(localStorage.getItem('favorites')).toEqual(
      JSON.stringify([{ id: 2, title: 'The Matrix' }])
    );
  });

  test('removes a movie from favorites', () => {
    const initialFavorites = [
      { id: 1, title: 'Inception' },
      { id: 2, title: 'The Matrix' },
    ];
    localStorage.setItem('favorites', JSON.stringify(initialFavorites));

    const { result } = renderHook(() => React.useContext(FavoritesContext), {
      wrapper: FavoritesProvider,
    });

    act(() => {
      result.current.removeFavorite(1);
    });

    expect(result.current.favorites).toEqual([{ id: 2, title: 'The Matrix' }]);
    expect(localStorage.getItem('favorites')).toEqual(
      JSON.stringify([{ id: 2, title: 'The Matrix' }])
    );
  });
});
