import mongoose from "mongoose";
import { schema } from "./schema";

const Category = mongoose.model("Category", schema);
export default Category;

export { schema, categoryValidator } from "./schema";
