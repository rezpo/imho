import config from "config";

export default function () {
    if (!config.get("jwtkey")) {
        throw new Error("FATAL ERROR: secret key is not defined");
    }
}
