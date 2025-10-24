# Contributing to JuliusAI

Thank you for your interest in contributing to JuliusAI! This document provides guidelines for contributing to the project.

## Code of Conduct

Please be respectful and constructive in all interactions. We are committed to providing a welcoming and inclusive environment for all contributors.

## How to Report Bugs

1. Check if the issue has already been reported
2. Create a new issue with the following information:
   - Clear description of the bug
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Environment details (browser, OS, etc.)

## How to Submit Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and linting: `npm run lint && npm run typecheck && npm run test:run`
5. Commit your changes with a clear message
6. Push to your fork and create a Pull Request

## Coding Standards

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Write tests for new components and features
- Maintain test coverage above 80%
- Use React Testing Library for component tests
- Follow accessibility best practices

## Commit Message Conventions

Use clear, descriptive commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests

Example: `feat: add user authentication component`

## Development Setup

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Run linting: `npm run lint`
4. Run type checking: `npm run typecheck`
5. Run tests: `npm run test:run`
6. Run tests with coverage: `npm run test:coverage`

## Pull Request Process

1. Ensure your code follows the project's coding standards
2. Update documentation if needed
3. Test your changes thoroughly
4. Provide a clear description of your changes
5. Link any related issues

Thank you for contributing to JuliusAI!
