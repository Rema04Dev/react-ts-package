/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // Arrange
    render(<App />);
    // Act
    // Expect
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'React + TS boilerplate using by Vite',
    );
  });
});
