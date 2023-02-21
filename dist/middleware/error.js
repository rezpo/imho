import { logger } from "@startup/index";
process.on("unhandledRejection", (res, prs) => {
    logger.error(`Unhandled rejection at
    Promise: ${prs}
    Reasons: ${res}`);
});
process.on("uncaughtException", (err) => {
    logger.error(`Uncaught exception: ${err}\n${err.stack}`);
    process.exit(1);
});
export default function (err, req, res, next) {
    logger.error(err.message, err);
    res.status(500).send(err);
}
//# sourceMappingURL=error.js.map