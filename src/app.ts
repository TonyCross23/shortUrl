import bodyParser from "body-parser"
import express from "express"
import log from "./log/logger"
import config from 'config'
import db from "./databases/db";
import routes from "./router";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express()

app.use(bodyParser.json())


app.listen(port, () => {
    log.info(`Server is running on http://${host}:${port}`);
    db();
    routes(app)
})