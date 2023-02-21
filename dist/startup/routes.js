import express from "express";
import { categories } from "@routes/index";
export default function (app) {
    app.use(express.json());
    app.use("/api/categories", categories);
}
//# sourceMappingURL=routes.js.map