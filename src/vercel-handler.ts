import { app } from "./app"; // Import your existing Express app
import { createServer } from "http";

// Vercel expects a default export that handles the request
export default (req: any, res: any) => {
  app(req, res);
};