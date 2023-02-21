declare module "joi-objectid" {
    import Joi from "joi";
    function objectId(): Joi.AlternativesSchema;
    function joiObjectId(joi: Joi.Root, message?: string): typeof objectId;
    export = joiObjectId;
}
