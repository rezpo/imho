import error from "./error";
export default function (handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res);
        }
        catch (err) {
            error(err, req, res, next);
        }
    };
}
//# sourceMappingURL=async.js.map