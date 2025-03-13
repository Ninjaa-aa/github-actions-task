# Express API with GitHub Actions CI/CD

A simple Node.js Express API with automated CI/CD using GitHub Actions.

## Features

- Express API with a "Hello, World!" endpoint
- Jest testing framework with Supertest for API testing
- GitHub Actions CI/CD pipeline
- Automatic testing on multiple Node.js versions (16.x and 18.x)

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions workflow configuration
├── src/
│   └── index.js          # Main Express application
├── tests/
│   └── api.test.js       # API tests
├── jest.config.js        # Jest configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the API locally:
   ```
   npm start
   ```
4. Run in development mode with auto-reload:
   ```
   npm run dev
   ```

## Testing

Run tests with:
```
npm test
```

## CI/CD

The project is configured with GitHub Actions to automatically run tests when:
- Code is pushed to the main or develop branch
- A pull request is created targeting the main or develop branch

The CI pipeline will:
1. Check out the repository code
2. Set up Node.js environment (testing on both 16.x and 18.x)
3. Install dependencies
4. Run the test suite

This ensures that any code changes are validated before being merged into the main branch.