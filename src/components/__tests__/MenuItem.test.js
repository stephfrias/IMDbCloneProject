import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import MenuItem from '../MenuItem'; 
import { AiFillHome } from 'react-icons/ai';
import { BrowserRouter } from 'react-router-dom';

describe('MenuItem component', () => {
  it('renders the MenuItem component with correct title and icon', () => {
    
    render(
      <BrowserRouter>
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
      </BrowserRouter>
    );
    
    // Check if the icon is rendered
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();

    // Check if the title is rendered
    expect(screen.getByText('HOME')).toBeInTheDocument();
  });

  it('has the correct href link', () => {
    render(
      <BrowserRouter>
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
      </BrowserRouter>
    );
    
    // Check if the href attribute is correct
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
