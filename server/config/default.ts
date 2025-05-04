import dotenv from "dotenv"

dotenv.config()

export default {
    port: 4000,
    dbUri: process.env.dbUri,
    host: 'localhost',
    corsOrigin: "http://localhost:3000",
}