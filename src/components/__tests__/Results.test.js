import { render, screen } from '@testing-library/react';
import Results from '../Results';
test('displays correct movie release dates', () => {
  const releaseDate = '2024-08-21'; 

  render(<Results />); 


  expect(screen.getByText((content, element) => {
    const hasText = (text) => text.includes(releaseDate);
    const elementHasText = hasText(element.textContent);
    return elementHasText;
  })).toBeInTheDocument();
});
