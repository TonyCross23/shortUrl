import { Request, Response } from "express"
import shortUrl from "../models/shortUrl.model"


export const createShortUrl = async (req: Request,res: Response): Promise<void> => {
    const {destination} = req.body
    console.log(req.body);
    
    // create url
    const newUrl = await shortUrl.create({ destination});
    console.log(newUrl);
    

    res.status(200).json({newUrl});
}