import {updateUser,deleteUser,getUser,getAllUser, getWishlist,getUserCart, saveAddress, userCart, emptyCart, applyCoupon, createOrder, getOrders, getOrderByuserId, updateOrderStatus} from "../controllers/user.js"
import express from "express"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"


const router = express.Router()
router.get("/checkedauthentication",verifyToken, (req,res,next) =>{
    res.send("hello user, you are logged in")
})
// router.put("/:id",verifyUser, updateUser)
// router.put("/save-address/:id",verifyUser, saveAddress)
// router.delete("/:id",verifyUser, deleteUser)
// router.get("/:id",verifyUser, getUser)
// router.get("/found/users",verifyAdmin, getAllUser)
// router.get("/wishlist/:id",verifyUser,getWishlist)
// router.get("/found/cart/:id",verifyUser,userCart)
// router.get("/found/usercart/",verifyUser,getUserCart)
// router.get("/found/user-orders/",verifyUser,getOrders)
// router.get("/found/user-orders/:id",verifyUser,getOrderByuserId)
// router.put("/status/orders-status/:id",verifyUser,updateOrderStatus)
// router.get("/found/emppty-cart/",verifyUser,emptyCart)
// router.post("/found/apply-coupon/",verifyUser,applyCoupon)
// router.post("/cart/cash-order/",verifyUser,createOrder)

router.put("/:id", updateUser)
router.put("/save-address/:id", saveAddress)
router.delete("/:id", deleteUser)
router.get("/:id", getUser)
router.get("/found/users", getAllUser)
router.get("/wishlist/:id",getWishlist)
router.get("/found/cart/:id",userCart)
router.get("/found/usercart/",getUserCart)
router.get("/found/user-orders/",getOrders)
router.get("/found/user-orders/:id",getOrderByuserId)
router.put("/status/orders-status/:id",updateOrderStatus)
router.get("/found/emppty-cart/",emptyCart)
router.post("/found/apply-coupon/",applyCoupon)
router.post("/cart/cash-order/",createOrder)

export default router