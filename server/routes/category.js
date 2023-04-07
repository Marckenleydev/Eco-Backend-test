import express from "express"
import { createCategory, deleteCategory, updateCategory,getallCategory,getCategory } from "../controllers/category.js";
import { verifyAdmin,verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.post("/",verifyAdmin,createCategory)
// router.put("/:id",verifyAdmin,updateCategory)
// router.delete("/:id",verifyAdmin,deleteCategory)
// router.get("/find/:id",verifyUser,getCategory)
// router.get("/allcategory",verifyUser,getallCategory)

router.post("/",createCategory)
router.put("/:id",updateCategory)
router.delete("/:id",deleteCategory)
router.get("/find/:id",getCategory)
router.get("/allcategory",getallCategory)


export default router