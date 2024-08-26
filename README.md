# React project for VET.CT


## Overview
This project is a web application designed for veterinary professionals to efficiently manage and view case information. The application includes features such as:

- Searchable Case List: Filter cases by patient name or species.
- Pagination: Navigate through paginated lists of cases.
- Detailed Case View: Expandable rows to view detailed information about each case.

## Getting started
1. **Clone the Front-End Repository**:

   ```bash
   git clone https://github.com/NiamhBrown/vetct-project.git
   cd vetct-project
   ```
2. **Install NPM Packages**:
   ```
   npm install
   ```
3. **Configure Environment Variables**:
Create a .env file in the root directory of the project containing the back-end URL:
    ```
    VITE_BACKEND_URL="YOUR_BACKEND_URL_HERE"
    ```
4. **Start the Development Server**:
   ```
   npm run dev
   ```
   Open your browser and go to http://localhost:3000 to view the application.

## Running tests
The project uses [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Vitest](https://vitest.dev/). To execute tests for the project, use:
   ```
   npm test
   ```
*Please note testing is still in progress. 

## Formatting 
The project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). To check linting issues, run:
   ```
   npm run lint
   ```
