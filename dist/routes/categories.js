import { Router } from "express";
import Category from "@models/categories";
const router = Router();
router.get("/", async (req, res) => {
    const categories = await Category.find();
    res.send(categories);
});
export default router;
//# sourceMappingURL=categories.js.map