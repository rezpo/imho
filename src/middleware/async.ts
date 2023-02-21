import { NextFunction, Request, Response } from "express";
import error from "./error";

export default function (handler: (req: Request, res: Response) => void) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res);
        } catch (err: any) {
            error(err, req, res, next);
        }
    };
}
