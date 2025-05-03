import {Express, Request, Response} from "express"
import validate from "../middlewares/validationResource";
import { createShortUrlSchema } from "../schemas/createShortUrl.schema";
import { createShortUrl } from "../controllers/shortUrl.controller";

const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
     res.send("App is healthy");
  })

  app.post("/api/url", validate(createShortUrlSchema), createShortUrl)
}

export default routes