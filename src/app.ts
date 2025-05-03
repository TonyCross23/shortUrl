import bodyParser from "body-parser"
import express from "express"

const app = express()

app.use(bodyParser.json())


app.listen(1334, () => {
    console.log("Server is running on port 1334");
    
})