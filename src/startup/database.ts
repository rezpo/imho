import mongoose, { ConnectOptions } from "mongoose";
import config from "config";
import logger from "./logger";

mongoose.set("strictQuery", false);

export default function () {
    const db: { [key: string]: any } = config.get("db");

    mongoose
        .connect(`mongodb://${db.host}/${db.name}`, {
            useUnifiedTopology: true,
        } as ConnectOptions)
        .then(() => logger.info("🚀 we are connected..."));
}
