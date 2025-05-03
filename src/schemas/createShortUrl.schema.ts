import { object, string } from "zod";


export const createShortUrlSchema =  object({
    body: object({
        destination: string({
            required_error: "Destination is required"
        }).url("Must be a valid URL")
    })
})