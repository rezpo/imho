import { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
const { ObjectId } = Types;

export default function validUSer(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: "Invalid ID" });
    }
    next();
}

export function validFields(
    validator: (arg: { [key: string]: any }) => { [key: string]: any }
) {
    return (req: Request, res: Response, _next: NextFunction) => {
        const { error } = validator(req.body);
        if (error) {
            return res
                .status(400)
                .send(
                    error.details.map(
                        (err: { [key: string]: any }) => err.message
                    )
                );
        }
    };
}
