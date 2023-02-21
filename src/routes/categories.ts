import { Request, Response, Router } from "express";
import Category from "@models/categories";
const router = Router();

router.get("/", async (_req: Request, res: Response) => {
    const categories = await Category.find();
    res.send(categories);
});

export default router;
