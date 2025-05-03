import { Request, Response } from "express"
import shortUrl from "../models/shortUrl.model"
import analytics from "../models/analytics.model";


export const createShortUrl = async (req: Request,res: Response): Promise<void> => {
    const {destination} = req.body
    
    // create url
    const newUrl = await shortUrl.create({ destination});

    res.status(200).json({newUrl});
}

export const handleRedirect = async (req: Request, res: Response): Promise<void> => {
    const {shortId} = req.params

    const short = await shortUrl.findOne({shortId}).lean()

    if(!short) {
      res.sendStatus(404);
      return;
    }

    analytics.create({shortUrl: short._id})

    res.redirect(short.destination);
}