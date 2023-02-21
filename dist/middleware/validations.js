import { Types } from "mongoose";
const { ObjectId } = Types;
export default function validUSer(req, res, next) {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: "Invalid ID" });
    }
    next();
}
export function validFields(validator) {
    return (req, res, next) => {
        const { error } = validator(req.body);
        if (error) {
            return res
                .status(400)
                .send(error.details.map((err) => err.message));
        }
    };
}
//# sourceMappingURL=validations.js.map