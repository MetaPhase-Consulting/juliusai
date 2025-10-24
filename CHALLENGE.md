# JuliusAI Challenge Requirements

# "Fresh Imports with JuliusAI"

*Build a new search experience for JuliusAI, a MetaPhase innovation, that accelerates and simplifies fruit imports, allowing users to explore, filter, and enrich data from the Harmonized Tariff Schedule in an engaging, accessible way.*

## Challenge Use Case

JuliusAI is a MetaPhase protoware application designed to modernize how importers, brokers, and analysts navigate the U.S. Harmonized Tariff Schedule (HTS). Every year, the import process for agricultural products — especially perishable fruits — is slowed by complex classification codes and inefficient manual lookups. JuliusAI demonstrates how MetaPhase brings radical efficiency and accelerated innovation to the federal mission through AI-assisted design, intuitive search, and mission-ready technology.

For this hackathon, teams will extend the public JuliusAI site (juliusai.dev) with a new Fruit Search feature. The goal: make exploring fruit-related HTS codes fast, clear, and enjoyable. Using the USITC's public REST API and the provided HTS fruit dataset, teams will enable users to search, filter, and sort fruit data, then enrich each result with Wikipedia links, fruit images, and emojis — transforming raw tariff data into a vibrant and informative experience.

This challenge highlights front-end innovation and design excellence — all data should be handled client-side (no database or login). Teams must ensure 508 compliance, maintain robust unit test coverage, and adhere to MetaPhase standards of clarity and performance. Each team will customize JuliusAI to reflect its team color, create an AI-generated fruit mascot, update all on-site text, and produce a short AI-generated Sora video showcasing their concept — making JuliusAI uniquely fresh, functional, and mission-focused.

## Requirements

The following 20 requirements are organized into four categories, prioritized in order of importance: Navigation & Search Integration (core functionality), Data (content and integration), Design (visual and user experience), and Quality (standards and compliance). While all requirements are important for a complete solution, teams should focus first on the core search functionality before moving to visual enhancements and quality standards.

### Search

1. **Navigation & Search Integration** – Add a global navigation bar that includes the new fruit search feature and provides consistent routing across all pages.

2. **Search HTS Fruit Data** – Implement a search bar that filters fruit-related HTS codes in real time using the local dataset and/or the USITC API.

3. **Display Fruit Details** – Show structured information for each fruit: name, HTS code, tariff description, and duty rate.

4. **Filter by Attributes** – Add filtering by tariff chapter, fruit type, or origin code.

5. **Sort Results** – Enable sorting results alphabetically, by code, or by tariff rate.

### Data

6. **Local Data Store** – Maintain enriched fruit data in a public, client-side JSON file; no persistent backend or database needed.

7. **Wikipedia Integration** – Link each fruit entry to its corresponding Wikipedia article.

8. **Map Integration** – Display a small map or geographic visualization showing the typical origin or import source region for each fruit.

9. **Fruit Emojis** – Include a fruit emoji beside each entry to visually distinguish results.

10. **Download Results** – Allow users to download their current search results as a JSON or CSV file for reuse and analysis.

### Design

11. **Team Color Theme** – Update the site's color palette and visuals to reflect each team's assigned color.

12. **Content Rewrite** – Replace all placeholder and lorem ipsum text with clear, relevant, fruit-themed content.

13. **Responsive Layout** – Ensure the interface adapts smoothly across desktop, tablet, and mobile devices.

14. **Fruit Mascot Logo** – Replace the JuliusAI logo with an AI-generated mascot representing the team's fruit.

15. **AI-Generated Video** – Create a short AI-generated video that explains or promotes the "Fresh Imports with JuliusAI" project.

### Quality

16. **User Story Format** – Write each user story in the "As a user, I want…" format with acceptance criteria expressed in Gherkin syntax (Given / When / Then).

17. **Unit Test Coverage** – Maintain at least 80% code coverage across components and pages.

18. **Section 508 Compliant** – Validate color contrast, keyboard navigation, focus order, and ARIA labels to meet Section 508 accessibility standards.

19. **Latest Dependencies** – Ensure all project dependencies are current and free of known security vulnerabilities.

20. **Automated Deployment** – Package and deploy the updated JuliusAI site through the existing automated build and release pipeline.
