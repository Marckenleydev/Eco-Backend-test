import express from "express"
import { createCoupon, deleteCoupon, getCoupon, updateCoupon,getallCoupon } from "../controllers/coupon.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()
// router.post("/",verifyAdmin,createCoupon)
// router.put("/:id",verifyAdmin,updateCoupon)
// router.delete("/:id",verifyAdmin,deleteCoupon)
// router.get("/:id",verifyAdmin,getCoupon)
// router.get("/find/allcoupons",verifyAdmin,getallCoupon)

router.post("/",createCoupon)
router.put("/:id",updateCoupon)
router.delete("/:id",deleteCoupon)
router.get("/:id",getCoupon)
router.get("/find/allcoupons",getallCoupon)

export default router