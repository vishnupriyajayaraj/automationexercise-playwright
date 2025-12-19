_Overview_

This repository contains automated UI tests for AutomationExercise
 using Playwright with TypeScript.

_The suite covers:_

User authentication (Signup, login, invalid login)

Add to Cart & Cart Management

Checkout

The project follows Page Object Model (POM) for maintainability and reusable test components.

_Tech Stack_

Node.js v18+

Playwright v1.45+

TypeScript

Page Object Model (POM) for UI interactions

Data-driven testing for negative scenarios

__Install dependencies:_

npm install


Install Playwright browsers:

npx playwright install

_Running Tests_

Run all tests
npx playwright test
