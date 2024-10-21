# @nodesandbox/response-kit

`@nodesandbox/response-kit` is a collection of TypeScript-based handlers for building robust APIs using Express.js. This package is designed to simplify error handling and response formatting in your Node.js applications.

## Features

- **TypeScript Support:** Built with TypeScript for type safety and improved development experience.
- **Express.js Integration:** Seamlessly integrates with Express.js to manage API responses and errors.
- **Modular Structure:** Organized handlers for different types of responses and errors.

## Installation

You can install the package via npm:

```bash
npm install @nodesandbox/response-kit
```

### Peer Dependency

Please note that this package requires `express` to function properly. You need to install `express` in your project as well:

```bash
npm install express @types/express
```

## Usage

Here's a quick example of how to use the response and error handlers in your Express application:

```typescript
import express from 'express';
import { GlobalErrorHandler, NotFoundHandler } from '@nodesandbox/response-kit';

const app = express();

// Your routes go here

// Use the global error handler
app.use(GlobalErrorHandler);

// Use the not found handler
app.use(NotFoundHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Scripts

- `npm run build`: Compiles TypeScript files to JavaScript.
- `npm test`: Run tests (currently not specified).

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.