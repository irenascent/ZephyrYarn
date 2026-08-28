// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZephyrYarn title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ZephyrYarn/i);
    expect(titleElement).toBeInTheDocument();
});
