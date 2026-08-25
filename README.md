# CI/CD Express Demo

![CI Pipeline](https://github.com/YOUR_USERNAME/cicd-express-demo/workflows/CI%20Pipeline/badge.svg)

A simple Express.js API with automated testing using GitHub Actions.

## Features

- ✅ Health check endpoint
- ✅ Calculator API (add, subtract, multiply, divide)
- ✅ Users API
- ✅ Automated tests with Jest
- ✅ Code linting with ESLint
- ✅ CI/CD with GitHub Actions

## Installation

```bash
npm install
```

## Running Locally

```bash
npm start
```

## Running Tests

```bash
npm test
```

## API Endpoints

### GET /health
Returns server health status.

### POST /calculate
Performs calculations.

**Body:**
```json
{
  "operation": "add",
  "a": 5,
  "b": 3
}
```

### GET /users
Returns all users.

### GET /users/:id
Returns user by ID.

## CI/CD Pipeline

Every push to main triggers:
1. Linting with ESLint
2. Automated tests with Jest
3. Tests run on Node.js 18.x and 20.x