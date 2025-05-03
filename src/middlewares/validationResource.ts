import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"


const validationResource = (schema: AnyZodObject) => (req: Request,res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
          });
    } catch (e: any) {
        res.status(400).send(e.errors)
    }
}

export default validationResource