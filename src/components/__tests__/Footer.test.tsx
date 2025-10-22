import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders the GitHub link', () => {
    render(<Footer />);
    
    const githubLink = screen.getByLabelText('View source code on GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/MetaPhase-Consulting/');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the GitHub icon and text', () => {
    render(<Footer />);
    
    expect(screen.getByText('Open Source')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View source code on GitHub' })).toBeInTheDocument();
  });

  it('renders the MetaPhase attribution', () => {
    render(<Footer />);
    
    expect(screen.getByText('Built by')).toBeInTheDocument();
    expect(screen.getByText('MetaPhase')).toBeInTheDocument();
  });

  it('has proper link attributes for MetaPhase', () => {
    render(<Footer />);
    
    const metaPhaseLink = screen.getByText('MetaPhase');
    expect(metaPhaseLink).toHaveAttribute('href', 'https://metaphase.tech');
    expect(metaPhaseLink).toHaveAttribute('target', '_blank');
    expect(metaPhaseLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has proper accessibility attributes', () => {
    render(<Footer />);
    
    const githubIcon = screen.getByRole('link', { name: 'View source code on GitHub' }).querySelector('svg');
    expect(githubIcon).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies correct styling classes', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-black', 'border-t', 'border-neutral-800', 'py-8');
  });
});
