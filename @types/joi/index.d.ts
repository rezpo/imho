import { Schema as Sh } from "joi";

declare module "joi" {
    interface Root {
        objectId(): Sh;
    }
}
