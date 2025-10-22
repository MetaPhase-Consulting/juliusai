import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Mission from '../Mission';

describe('Mission', () => {
  it('renders the main heading', () => {
    render(<Mission />);
    
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
  });

  it('renders the mission description', () => {
    render(<Mission />);
    
    expect(screen.getByText(/JuliusAI is designed to serve federal agencies/)).toBeInTheDocument();
    expect(screen.getByText(/mission-critical operations/)).toBeInTheDocument();
  });

  it('renders the three mission cards', () => {
    render(<Mission />);
    
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Impact')).toBeInTheDocument();
    expect(screen.getByText('Constraints')).toBeInTheDocument();
  });

  it('renders card descriptions', () => {
    render(<Mission />);
    
    // Check for Lorem ipsum content in cards
    const loremTexts = screen.getAllByText(/Lorem ipsum dolor sit amet/);
    expect(loremTexts.length).toBe(3);
  });

  it('has proper styling classes', () => {
    render(<Mission />);
    
    const mainHeading = screen.getByText('Our Mission');
    expect(mainHeading).toHaveClass('text-5xl', 'sm:text-6xl', 'font-bold', 'text-white');
  });

  it('renders all card headings with correct styling', () => {
    render(<Mission />);
    
    const usersHeading = screen.getByText('Users');
    const impactHeading = screen.getByText('Impact');
    const constraintsHeading = screen.getByText('Constraints');
    
    expect(usersHeading).toHaveClass('text-2xl', 'font-bold', 'text-white');
    expect(impactHeading).toHaveClass('text-2xl', 'font-bold', 'text-white');
    expect(constraintsHeading).toHaveClass('text-2xl', 'font-bold', 'text-white');
  });

  it('has proper accessibility structure', () => {
    render(<Mission />);
    
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(4); // Main heading + 3 card headings
  });

  it('renders all icons', () => {
    render(<Mission />);
    
    // Icons are rendered as SVG elements
    const svgElements = document.querySelectorAll('svg');
    expect(svgElements.length).toBe(3); // Users, Target, Shield icons
  });
});
