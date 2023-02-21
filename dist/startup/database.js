import mongoose from "mongoose";
import config from "config";
import logger from "./logger";
mongoose.set("strictQuery", false);
export default function () {
    const db = config.get("db");
    mongoose
        .connect(`mongodb://${db.host}/${db.name}`, {
        useUnifiedTopology: true,
    })
        .then(() => logger.info("🚀 we are connected..."));
}
//# sourceMappingURL=database.js.map