# Express Hello World API

A simple Express.js API that returns "Hello, World!" with GitHub Actions CI/CD integration.

## Project Structure

```
.
├── .github/
│   └── workflows/      # GitHub Actions workflow files
│       └── ci.yml      # CI configuration for running tests
├── src/
│   ├── index.js        # Server setup and entry point
│   └── routes/
│       └── index.js    # API route definitions
├── tests/
│   └── api.test.js     # API endpoint tests
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Prerequisites

- Node.js (16.x or 18.x)
- npm

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-hello-world-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

- Development mode with auto-reload:
  ```
  npm run dev
  ```

- Production mode:
  ```
  npm start
  ```

## Testing

Run the tests:
```
npm test
```

## CI/CD

This project uses GitHub Actions for Continuous Integration. The workflow automatically:

1. Runs on every push to main branch and on pull requests
2. Tests the application with Node.js versions 16.x and 18.x
3. Checks out the code, installs dependencies, and runs tests

The CI configuration can be found in `.github/workflows/ci.yml`. 