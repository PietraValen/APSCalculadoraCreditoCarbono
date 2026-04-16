# Carbon Credit Calculator

> An interactive web application designed to calculate cross-sector carbon footprints and suggest actionable carbon credit offsets.

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

## Key Features

*   **Multi-Sector Emission Calculation:** Accurately estimates carbon emissions across Transportation, Energy, Industrial, and Waste sectors.
*   **Dynamic Data Input Forms:** Adaptive user interfaces that display context-specific fields based on the selected emission sector.
*   **Interactive Data Visualization:** Integrates Chart.js to render responsive bar charts illustrating emission breakdowns and suggested credits.
*   **Client-Side PDF Reporting:** Generates downloadable, styled PDF summaries of the calculated emissions and input data directly in the browser.
*   **Internationalization (i18n):** Full bilingual support (English and Portuguese) using `react-i18next` with persistent language preferences.
*   **Theming Engine:** Supports dynamic light and dark modes via Material-UI's theme provider with local storage persistence.

## Architecture & Design Patterns

*   **Component-Based Architecture:** The UI is constructed using modular, reusable React components (e.g., `Header`, `Footer`, separated page views) to ensure maintainability and separation of concerns.
*   **Single Page Application (SPA):** Utilizes `react-router-dom` for seamless client-side routing, providing a fluid user experience without page reloads.
*   **State Management:** Leverages React's built-in Hooks (`useState`, `useMemo`, `useEffect`) for localized state management, handling complex form data and global UI configurations (theming and language).
*   **Strategy-like Pattern for Calculations:** Employs a structured dictionary of emission factors (`emissionFactors`), allowing the application to dynamically apply different calculation logics based on user selection without complex conditional trees.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
*   Node.js (v18.x or later)
*   npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/carbon-credit-calculator.git
    cd carbon-credit-calculator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Access the application:**
    Open your browser and navigate to `http://localhost:5173`.

## Technical Highlights

*   **Client-Side Document Generation:** Implemented `jsPDF` to generate comprehensive reports entirely on the client side, eliminating the need for a backend service for document creation and ensuring data privacy.
*   **Dynamic Theming Integration:** Successfully integrated Tailwind CSS with Material-UI's (`@mui/material`) theming engine, allowing for a cohesive UI that seamlessly transitions between light and dark modes while persisting user preferences via `localStorage`.
*   **Robust i18n Implementation:** Architected a scalable internationalization setup using `i18next`. Language files are structured modularly, and the selected locale is preserved across sessions, demonstrating a strong understanding of globalized application development.
*   **Optimized Build Process:** Configured Vite and TypeScript for rapid development and optimized production builds, incorporating strict linting (`ESLint`) to enforce code quality and consistency.
