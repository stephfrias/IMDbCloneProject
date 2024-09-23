import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar'; 

describe('SearchBar', () => {
  it('renders the search bar correctly', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('calls the search function when a search term is entered', () => {
    const searchMock = jest.fn();
    render(<SearchBar onSearch={searchMock} />);
    
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Test Movie' } });
    
    expect(searchInput.value).toBe('Test Movie');
  
  });
});
