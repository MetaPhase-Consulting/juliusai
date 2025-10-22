import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from '../Home';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Home', () => {
  it('renders the main heading', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('Hello, World.')).toBeInTheDocument();
  });

  it('renders the welcome message', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText(/Welcome to JuliusAI/)).toBeInTheDocument();
    expect(screen.getByText(/mission-focused platform/)).toBeInTheDocument();
  });

  it('renders the CTA buttons', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText('Our Technology')).toBeInTheDocument();
  });

  it('has correct links for CTA buttons', () => {
    renderWithRouter(<Home />);
    
    const missionLink = screen.getByText('Our Mission');
    const technologyLink = screen.getByText('Our Technology');
    
    expect(missionLink.closest('a')).toHaveAttribute('href', '/mission');
    expect(technologyLink.closest('a')).toHaveAttribute('href', '/technology');
  });

  it('renders the Julius logo', () => {
    renderWithRouter(<Home />);
    
    const logo = screen.getByAltText('Julius Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/Julius Outline Hackathon Brick copy.png');
  });

  it('renders the "THROUGH THE WALL" heading', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('THROUGH THE WALL')).toBeInTheDocument();
  });

  it('renders the feature cards', () => {
    renderWithRouter(<Home />);
    
    expect(screen.getByText('Born from Innovation')).toBeInTheDocument();
    expect(screen.getByText('Breaking Barriers')).toBeInTheDocument();
  });

  it('renders the "Learn More About JuliusAI" link', () => {
    renderWithRouter(<Home />);
    
    const learnMoreLink = screen.getByText('Learn More About JuliusAI');
    expect(learnMoreLink).toBeInTheDocument();
    expect(learnMoreLink.closest('a')).toHaveAttribute('href', '/about');
  });

  it('applies correct styling classes', () => {
    renderWithRouter(<Home />);
    
    const mainHeading = screen.getByText('Hello, World.');
    expect(mainHeading).toHaveClass('text-6xl', 'sm:text-7xl', 'md:text-8xl', 'lg:text-9xl');
  });

  it('has proper accessibility attributes', () => {
    renderWithRouter(<Home />);
    
    const logo = screen.getByAltText('Julius Logo');
    expect(logo).toBeInTheDocument();
  });
});
