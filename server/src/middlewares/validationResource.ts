import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        res.status(400).send(e.errors);
      } else {
        res.status(500).send('Unexpected validation error.');
      }
    }
  };

export default validate;
