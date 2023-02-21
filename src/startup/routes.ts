import express, { Express } from "express";
import { categories } from "@routes/index";

export default function (app: Express) {
    app.use(express.json());
    app.use("/api/categories", categories);
}
