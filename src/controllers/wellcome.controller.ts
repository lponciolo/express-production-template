import { Request, Response, NextFunction } from "express";
import {getWelcomeService} from "../services/welcome.service"

import createError from 'http-errors'

const getWelcomeController = async function (req: Request, res: Response, next: NextFunction) {
    try {
        var serviceMessage = await getWelcomeService()
        return res.status(200).json({ status: 200, message: serviceMessage });
    } catch (e) {
        return next(createError(500, e.message))
    }

}


export { getWelcomeController}