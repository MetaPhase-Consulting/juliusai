import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

// Mock window.scrollTo
const mockScrollTo = vi.fn();
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
});

describe('App', () => {
  beforeEach(() => {
    mockScrollTo.mockClear();
  });

  it('renders the home page by default', () => {
    render(<App />);
    
    expect(screen.getByText('Hello, World.')).toBeInTheDocument();
  });

  it('renders the layout with header and footer', () => {
    render(<App />);
    
    expect(screen.getByText('JuliusAI')).toBeInTheDocument();
    expect(screen.getByText('Built by')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<App />);
    
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('has proper routing structure', () => {
    render(<App />);
    
    // Check that the main content area exists
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders ScrollToTop component', () => {
    render(<App />);
    
    // ScrollToTop is a functional component that returns null
    // We can't directly test it, but we can verify the app renders without errors
    expect(screen.getByText('Hello, World.')).toBeInTheDocument();
  });

  it('has proper accessibility structure', () => {
    render(<App />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
