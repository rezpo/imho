import mongoose from "mongoose";
import { DateTime } from "luxon";
import Joi from "joi";
const schema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 55,
        required: true,
    },
    dateOfCreation: {
        type: Date,
        default: DateTime.now().toJSDate(),
    },
});
const categoryValidator = (fields) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(55).required(),
    });
    return schema.validate(fields);
};
export { schema, categoryValidator };
//# sourceMappingURL=schema.js.map