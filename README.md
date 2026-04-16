# Project Documentation Wiki

## Table of Contents

1. [Project Overview](#project-overview)

   * [Purpose](#purpose)
   * [Main Features](#main-features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)

   * [Prerequisites](#prerequisites)
   * [Installation](#installation)
   * [Running the Project](#running-the-project)
5. [Available Scripts](#available-scripts)
6. [Pages and Components](#pages-and-components)

   * [Components](#components)
   * [Pages](#pages)
7. [Internationalization (i18n)](#internationalization-i18n)
8. [How the Calculator Works](#how-the-calculator-works)

   * [Emission Factors](#emission-factors)
   * [Calculation Logic](#calculation-logic)
9. [PDF Generation](#pdf-generation)
10. [Contribution](#contribution)

---

## 1. Project Overview

### Purpose

The **Carbon Credit Calculator** is an open-source web application designed to raise awareness about carbon emissions and empower users to calculate their carbon footprint. The application provides an interactive tool to estimate emissions across various sectors such as transportation, energy consumption, and industrial processes.

In addition to calculation, the tool suggests the number of carbon credits a user would need to purchase to offset their emissions, offering an actionable step toward carbon neutrality.

### Main Features

* **Multi-Sector Emissions Calculation**: Calculates carbon emissions for Transportation, Energy, Industrial, and Waste sectors.
* **Dynamic Forms**: The UI adapts based on user selections to collect relevant data.
* **Results Visualization**: Displays results clearly, including total emissions in kg of CO2 and suggested carbon credits.
* **Interactive Charts**: Uses bar charts to visualize emissions and credits distribution.
* **PDF Reports**: Generates downloadable PDF reports summarizing calculations and inputs.
* **Multi-language Support**: Available in Portuguese and English.
* **Dark/Light Theme**: Includes a theme toggle for better user experience.

---

## 2. Tech Stack

This project is built using modern web technologies to ensure a robust, scalable, and maintainable user experience.

* **Frontend Framework**: React (v18.2.0)
* **Build Tool**: Vite
* **Language**: TypeScript
* **Styling**:

  * Tailwind CSS
  * Material-UI (MUI)
* **Routing**: React Router DOM (v6)
* **Internationalization**: i18next with react-i18next
* **Charts**: Chart.js with react-chartjs-2
* **PDF Generation**: jsPDF
* **Linting**: ESLint

---

## 3. Project Structure

The source code is organized in a modular structure to promote separation of concerns and scalability.

```
/
├── public/
│   └── (Static assets)
├── src/
│   ├── assets/
│   │   └── (Images, logos, etc.)
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── locales/
│   │   ├── en.json
│   │   └── pt.json
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Articles.tsx
│   │   ├── Calculator.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── i18n.ts
├── .gitignore
├── package.json
├── README.md
└── vite.config.ts
```

* **`public/`**: Contains static assets not processed by Vite.
* **`src/assets/`**: Stores images and assets imported into components.
* **`src/components/`**: Reusable React components.
* **`src/locales/`**: Translation JSON files.
* **`src/pages/`**: Each `.tsx` file represents a route/page.
* **`src/App.tsx`**: Root component handling routing and layout.
* **`src/main.tsx`**: Entry point that renders `App`.
* **`src/i18n.ts`**: i18next configuration file.

---

## 4. Getting Started

### Prerequisites

* Node.js (version 18.x or higher)
* npm (comes with Node.js)

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/your-username/carbon-credit-calculator.git
cd carbon-credit-calculator
```

2. **Install dependencies:**

```sh
npm install
```

### Running the Project

```sh
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

---

## 5. Available Scripts

* **`npm run dev`**: Starts development server with HMR.
* **`npm run build`**: Builds the project for production.
* **`npm run lint`**: Runs ESLint.
* **`npm run preview`**: Previews the production build.

---

## 6. Pages and Components

### Components

* **Header.tsx**

  * Displays logo and navigation
  * Language selector
  * Theme toggle

* **Footer.tsx**

  * Copyright info
  * Social/contact links

### Pages

* **Home.tsx**: Landing page
* **About.tsx**: Project description and mission
* **Articles.tsx**: Blog/articles section
* **Contact.tsx**: Contact form/info
* **Calculator.tsx**: Main calculator page

---

## 7. Internationalization (i18n)

Uses `i18next`.

### Translation Files

Located in:

```
src/locales/
```

### Adding a New Language

1. Create `xx.json`
2. Add translations
3. Register in `i18n.ts`

### Usage Example

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

return <h1>{t('welcomeMessage')}</h1>;
```

---

## 8. How the Calculator Works

### Emission Factors

Predefined values inside `Calculator.tsx`:

```javascript

const emissionFactors = {
  transportation: {
    gasoline: 2.31,
    diesel: 2.68,
  },
  energy: {
    coal: 0.937,
  },
};

```

### Calculation Logic

1. User selects sector
2. Inputs data
3. System calculates:

```
Emissions = Input × Emission Factor
```

4. Conversion:

```
Carbon Credits = Emissions (kg) / 1000
```

---

## 9. PDF Generation

* Uses `jsPDF`
* Triggered after calculation
* Includes:

  * Title and date
  * Total emissions
  * Suggested credits
  * Input data table
---

## 10. Contribution

1. Fork repository
2. Create branch:
```sh
git checkout -b feature/my-feature
```
3. Make changes
4. Run lint:
```
npm run lint
```
5. Commit changes
6. Push:
```sh
git push origin feature/my-feature
```
7. Open Pull Request
