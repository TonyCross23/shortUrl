import bodyParser from 'body-parser';
import express from 'express';
import log from './log/logger';
import config from 'config';
import db from './databases/db';
import routes from './router';
import cors from 'cors';

const port = config.get('port') as number;
// const host = config.get('host') as string;

const app = express();

app.use(
  cors({
    origin: config.get('corsOrigin'),
  })
);

app.use(bodyParser.json());

app.listen(port, () => {
  log.info(`Server is running on http://localhost:${port}`);
  db();
  routes(app);
});

export default app