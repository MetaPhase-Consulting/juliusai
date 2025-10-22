import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../About';

describe('About', () => {
  it('renders the main heading', () => {
    render(<About />);
    
    expect(screen.getByText('About JuliusAI')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<About />);
    
    expect(screen.getByText('Born from innovation, built for impact.')).toBeInTheDocument();
  });

  it('renders the hackathon section', () => {
    render(<About />);
    
    expect(screen.getByText('MetaPhase Hackathon 2025')).toBeInTheDocument();
    expect(screen.getAllByText('Through The Wall')).toHaveLength(2); // One in text, one as heading
  });

  it('renders the hackathon theme text', () => {
    render(<About />);
    
    expect(screen.getByText(/The theme —/)).toBeInTheDocument();
    expect(screen.getAllByText(/Through The Wall/)).toHaveLength(2);
  });

  it('renders the three value cards', () => {
    render(<About />);
    
    expect(screen.getByText('Radical Efficiency')).toBeInTheDocument();
    expect(screen.getByText('Accelerated Innovation')).toBeInTheDocument();
    expect(screen.getByText('Mission-Focused')).toBeInTheDocument();
  });

  it('renders the "Through The Wall" section', () => {
    render(<About />);
    
    expect(screen.getAllByText('Through The Wall')).toHaveLength(2); // One in text, one as heading
    expect(screen.getByText(/breaking through/)).toBeInTheDocument();
  });

  it('renders all icons', () => {
    render(<About />);
    
    // Check for SVG icons (Calendar, Zap, Target, Users)
    const svgElements = document.querySelectorAll('svg');
    expect(svgElements.length).toBe(4); // Calendar, Zap, Target, Users
  });

  it('has proper styling classes', () => {
    render(<About />);
    
    const mainHeading = screen.getByText('About JuliusAI');
    expect(mainHeading).toHaveClass('text-5xl', 'sm:text-6xl', 'font-bold', 'text-white');
  });

  it('renders all card content', () => {
    render(<About />);
    
    // Check for Lorem ipsum content in cards
    const loremTexts = screen.getAllByText(/Lorem ipsum dolor sit amet/);
    expect(loremTexts.length).toBeGreaterThan(0);
  });

  it('has proper accessibility structure', () => {
    render(<About />);
    
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });
});
