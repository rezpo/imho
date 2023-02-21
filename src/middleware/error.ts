import { logger } from "@startup/index";
import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";

process.on("unhandledRejection", (res, prs) => {
    logger.error(`Unhandled rejection at
    Promise: ${prs}
    Reasons: ${res}`);
});

process.on("uncaughtException", (err) => {
    logger.error(`Uncaught exception: ${err}\n${err.stack}`);
    process.exit(1);
});

export default function (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    logger.error(err.message, err);
    res.status(500).send(err);
}
