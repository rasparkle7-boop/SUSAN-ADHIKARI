import express, { Request, Response, NextFunction } from 'express';
import pinoHttp from 'pino-http';

const app = express();

// Use pino-http correctly as middleware
app.use(pinoHttp());

// Example route with proper TypeScript types
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World');
});

// Start the server (adjust port as needed)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
