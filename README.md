# JuliusAI

**MetaPhase Hackathon 2025: Through The Wall**

A mission-focused platform delivering radical efficiency, accelerated innovation, and uncompromising delivery for federal agencies and mission-critical operations.

## Overview

JuliusAI is designed to serve federal agencies and mission-critical operations with cutting-edge AI capabilities while maintaining the highest standards of security, compliance, and operational excellence. Built for the MetaPhase Hackathon 2025 with the theme "Through The Wall," this platform breaks through barriers to deliver mission-critical solutions.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Testing**: Vitest with React Testing Library
- **Coverage**: v8 provider with 80%+ thresholds
- **Linting**: ESLint with TypeScript support

## Prerequisites

- **Node.js** (version 18 or higher)
- **npm** package manager
- **MetaPhase Enterprise ChatGPT** account (required for development)
- **Codex** access (web and CLI)
- **IDE** (optional but recommended): VS Code or Cursor

> For detailed setup instructions, see [HACKATHON.md](./HACKATHON.md#development-setup)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd juliusai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ui` - Open test UI interface

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Mission.tsx     # Mission page
│   └── Technology.tsx  # Technology page
├── App.tsx             # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Documentation

### Core Documentation
- [CHALLENGE.md](./CHALLENGE.md) - Complete challenge requirements and specifications
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [HACKATHON.md](./HACKATHON.md) - Hackathon-specific information
- [AGENTS.md](./AGENTS.md) - AI agent documentation

### Hackathon Resources
- [docs/](./docs/) - Presentation materials and templates
  - [docs/README.md](./docs/README.md) - Documentation overview
  - [MetaPhase Hackathon 2025.pptx](./docs/MetaPhase%20Hackathon%202025.pptx) - Official hackathon presentation
  - [Hackathon Presentation Template.pptx](./docs/Hackathon%20Presentation%20Template.pptx) - Team presentation template

### Data Sources
- [data/](./data/) - Fruit import data and API documentation
  - [data/README.md](./data/README.md) - Data sources and API integration guide
  - HTS fruit data in JSON, CSV, and Excel formats
  - USITC API documentation and user guide

## License

This project is part of the MetaPhase Hackathon 2025.