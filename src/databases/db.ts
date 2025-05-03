import config from "config"
import log from "../log/logger";
import mongoose from "mongoose";

const db = async () => {
    const dbUri = config.get("dbUri") as string;

    try {
        await mongoose.connect(dbUri)
        log.info("connect to database")
    } catch (error) {
        log.error("db is not connected")
    }
}

export default db