import {nanoid} from "nanoid";
import Url from "../models/url.model.js";

export const createShortUrl = async (originalUrl: string) => {
    const shortCode = nanoid(7);
    const newUrl = await Url.create({
     original_url: originalUrl,
     short_code: shortCode,   
    });
    return newUrl;
}

export const getUrlByCode = async (shortCode: string) => {
    const url = await Url.findOne({ short_code: shortCode});
    return url;
}

export const incrementClickCount  = async (shortCode: string) => {
    const url = await Url.findOneAndUpdate(
        {
            short_code: shortCode
        },
        {
            $inc: { click_count: 1}
        },
        {
            new: true
        }
    );
    return url;
}

export const getAllUrls = async () => {
    const urls = await Url.find().sort({created_at: -1})
    return urls;
}