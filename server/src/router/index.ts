import { Express, Request, Response } from 'express';
import validate from '../middlewares/validationResource';
import { createShortUrlSchema } from '../schemas/createShortUrl.schema';
import {
  createShortUrl,
  handleRedirect,
} from '../controllers/shortUrl.controller';

const routes = (app: Express) => {
  app.get('/', (req: Request, res: Response) => {
    res.send('App is healthy');
  });

  app.post('/api/url', validate(createShortUrlSchema), createShortUrl);

  app.get('/:shortId', handleRedirect);
};

export default routes;
