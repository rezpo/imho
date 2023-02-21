import Joi from "joi";

declare module "joi" {
    interface Root {
        objectId(): this;
    }
}
