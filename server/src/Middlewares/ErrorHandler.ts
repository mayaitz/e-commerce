import { NextFunction, Request, Response } from "express";
import CustomError from "./CustomError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    // Handle specific error types
    res.status(err.statusCode).json({ error: err.message });
  } else {
    // Handle generic errors
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}