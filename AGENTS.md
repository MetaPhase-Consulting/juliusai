# AI Agent Documentation

This document provides guidance for AI agents working on the JuliusAI codebase.

## Project Overview

JuliusAI is a mission-focused platform built for federal agencies and mission-critical operations. It's a React-based web application with a focus on delivering radical efficiency, accelerated innovation, and uncompromising delivery.

## Architecture Patterns

### Component Structure
- **Functional Components**: All components use React functional components with hooks
- **TypeScript**: Strict typing throughout the codebase
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing for navigation

### Key Directories

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation with routing
│   ├── Footer.tsx      # Site footer
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Route components
│   ├── Home.tsx        # Landing page with hero section
│   ├── About.tsx       # About page with hackathon info
│   ├── Mission.tsx     # Mission statement and values
│   └── Technology.tsx  # Technology showcase
├── App.tsx             # Main app with routing setup
└── main.tsx           # Application entry point
```

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/`
2. Add route to `App.tsx`
3. Update navigation in `Header.tsx`
4. Follow existing styling patterns with Tailwind CSS

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the dark theme pattern (bg-neutral-900, text-white, etc.)
- Use consistent spacing and typography
- Implement hover effects and transitions

### Component Patterns
- Use Lucide React for icons
- Implement responsive design with Tailwind breakpoints
- Use semantic HTML elements
- Follow accessibility best practices

### State Management
- Currently using React's built-in state management
- No external state management library
- Use useState and useEffect hooks as needed

## Development Workflow

1. **Code Changes**: Make changes to components or pages
2. **Styling**: Use Tailwind classes for consistent styling
3. **Testing**: Run `npm run dev` to test changes
4. **Linting**: Run `npm run lint` to check code quality
5. **Type Checking**: Run `npm run typecheck` for TypeScript validation

## Key Technologies

- **React 18**: Latest React with concurrent features
- **TypeScript**: Type safety and better development experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Icon library

## Best Practices

- Keep components small and focused
- Use TypeScript interfaces for props
- Follow the existing naming conventions
- Maintain consistent code formatting
- Use meaningful component and variable names
- Implement proper error boundaries where needed

## Common Issues

- **Routing**: Ensure all routes are properly defined in App.tsx
- **Styling**: Use Tailwind classes consistently
- **Icons**: Import icons from lucide-react
- **TypeScript**: Define proper types for all props and state
