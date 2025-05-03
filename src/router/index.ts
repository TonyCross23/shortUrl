import {Express, Request, Response} from "express"
import validationResource from "../middlewares/validationResource";
import { createShortUrlSchema } from "../schemas/createShortUrl.schema";
import { createShortUrl } from "../controllers/shortUrl.controller";

const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
     res.send("App is healthy");
  })

  app.post("/api/url", validationResource(createShortUrlSchema), createShortUrl)
}

export default routes