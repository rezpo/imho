import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
    if (!req.body.isAdmin)
        return res.status(403).send({ message: "Access denied" });

    return next();
}
