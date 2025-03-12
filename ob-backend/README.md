# OneBalance Cross-Chain Swap Demo

This project demonstrates cross-chain swap functionality using the OneBalance API. It's built with TypeScript and Express.
It serves both as a way to properly marshal and test calls to the OneBalance API without running a UI, and as a way to provide a lightweight pass-through mirror of the API which the UI can then call as if it were the same service. 

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OneBalance API key

## Setup
1. Call the `setup.sh` script to install dependencies and create the necessary .env files
1. Insert your OneBalance API key into the relevant place in the env.local file and the env.test.local file

## Development
Start the development server:
```bash
npm run dev
```

## Building for Production

```bash
  # Build the project:
  npm run build
  # Start the production server:
  npm start
```

## Testing

Postman users will find a collection of sample requests in the ob-backend/docs folder. To use these, simply run the service app in VS Code or a terminal, and hit it with the requests from Postman.

```bash
# Run unit tests (Not calling the external service):
npm run test:unit
# Run e2e tests (calling out to the OneBalance API):
npm run test:e3e
# Run all tests:
npm test
```

## Project Structure

- `src/` - Source code
  - `services/` - Business logic and external service integrations
  - `middleware/` - Express middleware
  - `interface/` - DTOs and common application interfaces
  - `routes/` - API route handlers
  - `config.ts` - Application configuration
  - `index.ts` - Application entry point

## Error Handling

The application includes a global error handler that:
- Handles application-specific errors (AppError)
- Provides appropriate HTTP status codes
- Logs unhandled errors
- Returns consistent error responses

