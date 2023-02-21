import winston from "winston";
import { MongoDB } from "winston-mongodb";
const { combine, timestamp, printf } = winston.format;
const startuplog = winston.createLogger({
    format: combine(timestamp(), printf((info) => `${info.timestamp} ${info.level}: ${info.message}}`)),
});
const log = winston.createLogger({
    format: combine(timestamp(), printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)),
    transports: [
        new MongoDB({
            db: "mongodb://localhost/imho",
            level: "info",
        }),
        new winston.transports.File({ filename: "logfile.log" }),
    ],
    exceptionHandlers: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "exceptions.log" }),
    ],
    rejectionHandlers: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "rejection.log" }),
    ],
});
process.on("unhandledRejection", (res, prs) => {
    log.error(`Unhandled rejection at:
        Promise: ${prs}
        Reason: ${res}`);
});
process.on("uncaughtException", (err) => {
    log.error(`Caught exception: ${err}\n${err.stack}`);
    process.exit(1);
});
export default startuplog;
//# sourceMappingURL=logger.js.map