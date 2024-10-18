# Carbon Credit Calculator with AI-assisted Predictions

This project is a comprehensive React.js application for a Carbon Credit Calculator using AI-assisted predictions. It features multi-page navigation, an advanced calculator, and various tools to help users understand and manage their carbon footprint.

## Project Overview

The Carbon Credit Calculator is designed to provide accurate predictions for carbon emissions and credits using artificial intelligence. It helps individuals and businesses make informed decisions to mitigate their carbon footprint and contribute to a sustainable future.

## Key Features

- Multi-page navigation using React Router
- AI-powered Carbon Credit Calculator with enhanced features
- Downloadable PDF reports
- Modern design with Material UI V5 and responsiveness
- Dark Mode/Light Mode toggle
- Accessibility features
- Multilanguage support (English and Portuguese)
- Modular project structure

## Technologies Used

- React.js
- TypeScript
- Vite
- React Router
- Material-UI V5
- Chart.js
- react-i18next
- jsPDF

## Installation Guide

1. Clone the repository:
   ```
   git clone https://github.com/your-username/carbon-credit-calculator.git
   ```

2. Navigate to the project directory:
   ```
   cd carbon-credit-calculator
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

## Project Structure

- `/src`: Source code
  - `/components`: Reusable React components
  - `/pages`: Individual page components
  - `/locales`: Language files for internationalization
  - `App.tsx`: Main application component
  - `i18n.ts`: Internationalization configuration

## Features Explanation

1. Multi-page navigation: The application uses React Router for seamless navigation between different pages (Home, About, Contact, Articles, Calculator).

2. AI-powered carbon credit calculations: The calculator page provides a comprehensive form for users to input various data points related to their carbon emissions. It simulates AI-assisted calculations to provide monthly carbon emission estimates and suggested carbon credits.

3. Downloadable PDF reports: Users can generate and download detailed PDF reports of their carbon credit calculations.

4. Dark Mode/Light Mode support: The application includes a toggle for users to switch between light and dark modes, with the preference being saved for subsequent visits.

5. Accessibility features: The project is designed with accessibility in mind, using semantic HTML, proper ARIA attributes, and ensuring good color contrast.

6. Multi-language support: The application supports both English and Portuguese, with easy language switching and persistence of language preference.

7. Graphs and charts: The calculator results include a line chart showing average emissions and carbon credits over time.

## Usage Guide

1. Navigate through the different pages using the navigation bar at the top of the page.
2. Use the calculator page to input your data and receive AI-assisted carbon credit predictions.
3. Download PDF reports of your calculations for record-keeping or further analysis.
4. Switch between light and dark modes using the toggle in the navigation bar.
5. Change the language between English and Portuguese using the language switcher in the navigation bar.

## Contributing Guide

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and commit them with descriptive commit messages.
5. Push your changes to your fork on GitHub.
6. Create a pull request from your fork to the main repository.

## Known Issues and Future Improvements

- Implement actual AI model for more accurate predictions
- Add user authentication and data persistence
- Expand language support to include more languages
- Enhance the PDF report generation with more detailed information and graphics
- Implement real-time data fetching for more accurate and up-to-date calculations

We welcome contributions and suggestions for improvements!