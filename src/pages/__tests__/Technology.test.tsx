import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Technology from '../Technology';

describe('Technology', () => {
  it('renders the main heading', () => {
    render(<Technology />);
    
    expect(screen.getByText('Our Technology')).toBeInTheDocument();
  });

  it('renders the technology description', () => {
    render(<Technology />);
    
    expect(screen.getByText(/Built on modern, battle-tested technologies/)).toBeInTheDocument();
    expect(screen.getByText(/scale, security, and maintainability/)).toBeInTheDocument();
  });

  it('renders the three technology cards', () => {
    render(<Technology />);
    
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('renders card descriptions', () => {
    render(<Technology />);
    
    // Check for Lorem ipsum content in cards
    const loremTexts = screen.getAllByText(/Lorem ipsum dolor sit amet/);
    expect(loremTexts.length).toBe(3);
  });

  it('has proper styling classes', () => {
    render(<Technology />);
    
    const mainHeading = screen.getByText('Our Technology');
    expect(mainHeading).toHaveClass('text-5xl', 'sm:text-6xl', 'font-bold', 'text-white');
  });

  it('renders all card headings with correct styling', () => {
    render(<Technology />);
    
    const frontendHeading = screen.getByText('Frontend');
    const servicesHeading = screen.getByText('Services');
    const securityHeading = screen.getByText('Security');
    
    expect(frontendHeading).toHaveClass('text-2xl', 'font-bold', 'text-white');
    expect(servicesHeading).toHaveClass('text-2xl', 'font-bold', 'text-white');
    expect(securityHeading).toHaveClass('text-2xl', 'font-bold', 'text-white');
  });

  it('has proper accessibility structure', () => {
    render(<Technology />);
    
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(4); // Main heading + 3 card headings
  });

  it('renders all icons', () => {
    render(<Technology />);
    
    // Icons are rendered as SVG elements
    const svgElements = document.querySelectorAll('svg');
    expect(svgElements.length).toBe(3); // Code, Server, Lock icons
  });

  it('has consistent card styling', () => {
    render(<Technology />);
    
    const cards = screen.getAllByText(/Lorem ipsum dolor sit amet/);
    cards.forEach(card => {
      const cardElement = card.closest('.bg-neutral-800');
      expect(cardElement).toHaveClass('border', 'border-neutral-700', 'rounded-lg', 'p-8');
    });
  });
});
